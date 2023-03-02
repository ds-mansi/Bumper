import * as React from "react";
import Banner from "../components/locationDetail/banner";
import Cta from "../components/commons/cta";
import Contact from "../components/locationDetail/contact";
import ApiCall from "../Apis/ApiCall";
import Nearby from "../components/locationDetail/Nearby";
import { CustomFieldDebuggerReactProvider } from "@yext/custom-field-debugger";
import { JsonLd } from "react-schemaorg";
import Opening from "../components/commons/openClose";
import { nearByLocation } from "../types/nearByLocation";
import Logo from "../images/logo-header.svg";
import offerBanner from "../images/offer-banner.jpg";
import IframeMap from "../components/locationDetail/IframeMap";
import "../index.css";
import Header from "../components/layouts/header";

import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";
import { fetch } from "@yext/pages/util";
import Nav from "../components/layouts/Nav";
import Footer from "../components/layouts/footer";
import Menu from "../components/locationDetail/Menu";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import PhotoGallery from "../components/locationDetail/PhotoGallery";
import About from "../components/locationDetail/About";
import Breadcrumb from "../components/layouts/Breadcrumb";
import CustomMap from "../components/locationDetail/CustomMap";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import StoreHighlight from "../components/locationDetail/SoreHighlight";
import OpenClose from "../components/commons/openClose";
import Faq from "../components/locationDetail/Faqs";
import { StaticData } from "../../sites-global/staticData";

import {
  apikey_for_entity,
  baseuRL,
  stagingBaseurl,
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
  favicon,
} from "../../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import FeaturesBrand from "../components/locationDetail/FeaturesBrand";
import { Fade, Slide } from "react-awesome-reveal";
import MgmTimber from "../components/locationDetail/MgmTimber";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "emails",
      "address",
      "mainPhone",
      "hours",
      "slug",
      "timezone",
      "yextDisplayCoordinate",
      "displayCoordinate",
      "cityCoordinate",
      "alternatePhone",
      "c_service",
      "c_banner",
      "c_message",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryParents.c_addressRegionDisplayName",
      
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  var url = "";
  var name: any = document.name.toLowerCase();
  var string: any = name.toString();;
  let result: any = string.replaceAll(" ", "-");
  document?.dm_directoryParents?.map((result: any, i: Number) => {
    if (i > 0) {
      url += result.slug + "/"
    }
  })
  if (!document.slug) {
    url += `${result}.html`;
  } else {
    url += `${document.slug.toString()}.html`;
  }
  

  return url;
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.c_meta_title
      ? document.c_meta_title
      : `${document.name} Store of MGM Timber`,
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
              : `Find the ${document.name} Bumper Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`
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
          rel: "canonical",
          href: `${
            document._site.c_canonical ? document.c_canonical : stagingBaseurl
          }${
            document.slug ? document.slug : `${document.name.toLowerCase()}`
          }.html`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Find the ${document.name} Bumper Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`
          }`,
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
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
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
          name: "twitter:title",
          content: document.c_meta_title
            ? document.c_meta_title
            : `${document.name} Store of MGM Bumper`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Find the ${document.name} Bumper Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`
          }`,
        },
      },
      /// twitter tag
    ],
  };
};
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {
  var location = `${
    data.document.yextDisplayCoordinate
      ? data.document.yextDisplayCoordinate.latitude
      : data.document.displayCoordinate.latitude
  },${
    data.document.yextDisplayCoordinate
      ? data.document.yextDisplayCoordinate.longitude
      : data.document.displayCoordinate.longitude
  }`;

  const url = `https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=2500&location=${data.document.yextDisplayCoordinate.latitude},${data.document.yextDisplayCoordinate.longitude}&api_key=7636b8bb589ab6337d4fc231953b4006&v=20181201&resolvePlaceholders=true&entityTypes=location&limit=4`;
  console.log(url);
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()
  )) as nearByLocation;
  return { ...data, externalApiData };
};

type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
}) => {
  const {
    _site,
    address,
    slug,
    hours,
    mainPhone,
    alternatePhone,
    photoGallery,
    c_banner,
    c_banner_image,
    c_canonical,
    description,
    additionalHoursText,
    timezone,
    yextDisplayCoordinate,
    displayCoordinate,
    dm_directoryParents,
    cityCoordinate,
    c_service,
    emails,
    name,
  } = document;

  const services = c_service?.map((link: any) => {
    console.log("objectsaeffsfsf", link);
    return (
      <>
        <ul style={{ paddingLeft: "9%", color: "white", paddingBottom: "5%" }}>
          <li>
            <a href={link.services.link}>{link.services.label}</a>
          </li>
        </ul>
      </>
    );
  });
  const serviceicon = c_service?.map((res: any) => {
    return (
      <>
        <ul style={{ paddingLeft: "16%", paddingBottom: "20px" }}>
          <img src={res.servicesIcon.url} style={{ height: "50px" }} />
        </ul>
      </>
    );
  });



  let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme = [];
  for (var key in hours) {
    if (hours.hasOwnProperty(key)) {
      let openIntervalsSchema = "";
      if (key !== "holidayHours") {
        if (hours[key].isClosed) {
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: key,
          };
        } else {
          let end = "";
          let start = "";
          if (typeof hours[key].openIntervals != "undefined") {
            let openIntervals = hours[key].openIntervals;
            for (var o in openIntervals) {
              if (openIntervals.hasOwnProperty(o)) {
                end = openIntervals[o].end;
                start = openIntervals[o].start;
              }
            }
          }
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            closes: end,
            dayOfWeek: key,
            opens: start,
          };
        }
      } else {
      }

      hoursSchema.push(openIntervalsSchema);
    }
  }
  document.dm_directoryParents &&
    document.dm_directoryParents.map((i: any, index: any) => {
      if (i.meta.entityType.id == "ce_country") {
        document.dm_directoryParents[index].name =
          document.dm_directoryParents[index].name;
        document.dm_directoryParents[index].slug =
          document.dm_directoryParents[index].slug;

        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_region") {
        let url = "";
        document.dm_directoryParents.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_region" &&
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            console.log(j, "j");
            url = url + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              url +
              "/" +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_city") {
        let url = "";
        document.dm_directoryParents.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            console.log(j, "j");
            url = url + "/" + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              url +
              "/" +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      }
    });

  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 4,
    item: {
      "@id": stagingBaseurl + path,
      name: document.name,
    },
  });
  // let imageurl = photoGallery
  //   ? photoGallery.map((element: any) => {
  //       return element.image.url;
  //     })
  //   : null;
  // console.log(document);
  // let bannerimage = c_banner_image && c_banner_image.image.url;

  return (
    <>
      <JsonLd<Store>
        item={{
          "@context": "https://schema.org",
          "@type": "DepartmentStore",
          name: name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hoursSchema,
          description: description,
          // image: imageurl,
          telephone: mainPhone,
          url: `${c_canonical ? c_canonical : stagingBaseurl}${
            slug ? slug : `${name}`
          }.html`,
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
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
            lhead={_site?.c_lowerHeader?.lowerHeaderNav}
            licon={_site?.c_lowerHeader}
            limg={_site?.c_lowerHeader?.lowerHeaderShopIcon}
            
          />
           
          <div style={{ display: "flex" }}>
            <div style={{ width: "60%" }}>
              <h1
                style={{
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  fontSize: "45px",
                  fontWeight: "700",
                  width: "68%",
                  marginTop: "50px",
                  marginLeft: "100px",
                  color: "black",
                }}
              >
                {c_banner?.bannerText}
              </h1>
              <br />
              <div>
                <button
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    marginLeft: "100px",
                    marginTop: "50px",
                  }}
                >
                  <a href={c_banner.link}>{c_banner?.bannerCTA.label}</a>
                </button>
              </div>
            </div>
            <div style={{ height: "383px", width: "560px" }}>
              <a>
                <img src={c_banner.bannerImage.url} />
              </a>
            </div>
          </div>
          <BreadCrumbs
            name={name}
            parents={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
            address={address}
          ></BreadCrumbs>
          <div className="location-information">
            {hours ? (
              <div className="map-sec" id="map_canvas">
                <CustomMap
                  prop={
                    yextDisplayCoordinate
                      ? yextDisplayCoordinate
                      : displayCoordinate
                  }
                />
              </div>
            ) : (
              <div className="map-sec without-hours" id="map_canvas">
                <CustomMap
                  prop={
                    yextDisplayCoordinate
                      ? yextDisplayCoordinate
                      : displayCoordinate
                  }
                />
              </div>
            )}
            <Contact
              address={address}
              phone={mainPhone}
              phone2={alternatePhone}
              emails={emails}
              latitude={
                yextDisplayCoordinate
                  ? yextDisplayCoordinate.latitude
                  : displayCoordinate?.latitude
              }
              yextDisplayCoordinate={yextDisplayCoordinate}
              longitude={
                yextDisplayCoordinate
                  ? yextDisplayCoordinate.longitude
                  : displayCoordinate?.longitude
              }
              hours={hours}
              additionalHoursText={additionalHoursText}
            ></Contact>
          </div>
          <div style={{ backgroundColor: "#e11f1c" }}>
            <h3
              style={{
                fontSize: "40px",
                color: "white",
                padding: "50px",
                marginLeft: "40%",
              }}
            >
              SERVICES
            </h3>
            <div className="serviceimghover" style={{ display: "flex" }}>
              {serviceicon}
            </div>
            <div className="servicehover" style={{ display: "flex" }}>
              {services}
            </div>
          </div>

          
          <div className="nearby-sec">
            <div className="container">
              <div className="sec-title">
                <h2 style={{color:"red"}}>{StaticData.NearStoretext}</h2>
              </div>
              <div className="nearby-sec-inner">
                {yextDisplayCoordinate ||
                cityCoordinate ||
                displayCoordinate ? (
                  <Nearby externalApiData={externalApiData} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </AnalyticsScopeProvider>
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
      </AnalyticsProvider>
    </>
  );
};

export default Location;
