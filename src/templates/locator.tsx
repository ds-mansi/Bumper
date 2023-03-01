import * as React from "react";
import "../index.css";
import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import { SearchHeadlessProvider } from "@yext/search-headless-react";
import {
  FilterSearch,
  VerticalResults,
  ResultsCount,
  AppliedFilters,
  ApplyFiltersButton,
  LocationBias,
  Pagination,
} from "@yext/search-ui-react";
import { Location } from "../types/search/locations";
import MapboxMap from "../components/MapboxMap";
import MapPin from "../components/MapPin";
import LocationCard from "../components/locatorPage/LocationCard";
import PageLayout from "../components/layouts/PageLayout";
import Geocode from "react-geocode";
import UseMyLocation from "../components/locatorPage/UseMyLocation";
import { Address } from "../types/search/locations";
import { useSearchActions } from "@yext/search-headless-react";
import { useEffect } from "react";
import SearchLayout from "../components/locatorPage/SearchLayout";
import {
  stagingBaseurl,
  favicon,
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
} from "../../sites-global/global";
import Newsletter from "../components/locatorPage/Newsletter";
import { JsonLd } from "react-schemaorg";
import { StaticData } from "../../sites-global/staticData";
import Banner from "../components/locationDetail/banner";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

export const config: TemplateConfig = {
  stream: {
    $id: "Locator",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: ["name"],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["global-data"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
  return `/index.html`;
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: `${
      document.c_meta_title
        ? document.c_meta_title
        : `Bumper to Bumper Store Near Me - Find Bumper to Bumper Branch Locator Here.`
    }`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `View Bumper Store near you today at Bumper to Bumper. We stock high-quality, robust products at competitive rates.`
          }`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: `${
            document._site.c_canonical ? document.c_canonical : stagingBaseurl
          }`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `View Bumper Store near you today at Bumper to Bumper. We stock high-quality, robust products at competitive rates.`
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${
            document.c_meta_title
              ? document.c_meta_title
              : `Bumper to Bumper Store Near Me - Find Bumper to Bumper Branch Locator Here.`
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `View Bumper Store near you today at Bumper to Bumper. We stock high-quality, robust products at competitive rates.`
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: `${
            document.c_meta_title
              ? document.c_meta_title
              : `Bumper Store Near Me - Find Bumper to Bumper Branch Locator Here.`
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: favicon,
        },
      },
    ],
  };
};

const Locator: Template<TemplateRenderProps> = ({ document, __meta }) => {
  const { _site } = document;

  let templateData = { document: document, __meta: __meta };
  const endpoints = {
    universalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",
  };
  var Api = "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18";
  return (
    <>
      <JsonLd<locator>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MGM ",
          url: stagingBaseurl,
          logo: favicon,
        }}
      />
      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
          <Header
            _site={_site}
            labels={_site.c_upperHeader.upperHeaderNav}
            store={_site?.c_upperHeader}
            icon={_site?.c_upperHeader?.upperHeaderIcon}
            lhead={_site?.c_lowerHeader?.lowerHeaderNav}
            licon={_site?.c_lowerHeader}
            limg={_site?.c_lowerHeader?.lowerHeaderShopIcon}
          />
          <div style={{ display: "flex" }}>
            <div style={{ width: "70%", padding: "50px" }}>
              <h1
                style={{
                  fontFamily: "Marche Super Forwardslant",
                  fontWeight: "bold",
                  paddingBottom:"50px"
                }}
              >
                {_site.c_banner2.banner2Heading}
              </h1>
              <p>{_site.c_banner2.banner2Desc}</p>
            </div>
            <div>{<img src={_site?.c_banner2?.banner2Image?.url} />}</div>
          </div>
         
          <SearchHeadlessProvider
            experienceKey={AnswerExperienceConfig.experienceKey}
            locale={AnswerExperienceConfig.locale}
            apiKey={AnswerExperienceConfig.apiKey}
            verticalKey={AnswerExperienceConfig.verticalKey}
            experienceVersion="STAGING"
            sessionTrackingEnabled={true}
            endpoints={AnswerExperienceConfig.endpoints}
          >
            <SearchLayout _site={_site} />
          </SearchHeadlessProvider>

          <Footer
            _site={_site?.c_lowerFooter}
            ufooter={_site?.c_upperFooter?.upperFooterLabel}
            upfooter={_site?.c_upperFooter}
            subscribe={_site?.c_upperFooter?.subscribeCta}
            copy={_site?.c_lowerFooter}
            tandc={_site?.c_lowerFooter?.tAndC}
            aboutimg={_site?.c_about?.aboutImage}
            abouthead={_site?.c_about}
            aboutcta={_site?.c_about?.aboutCTA}
            about2img={_site?.c_about2?.about2Image}
            abouthead2={_site?.c_about2}
            about2cta={_site?.c_about2?.about2CTA}
          />
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Locator;
