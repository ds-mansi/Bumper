import * as React from "react";
import OpenClose from "../commons/openClose";
import Defaultimage from "../../images/luxurystore.jpg"

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  address?: Address;
  hours?: any;
  banner:any;
  timezone: any;
  clickcollect?: object;
  c_bannerImage?: string;
  c_locatorBannerAdditionalText?:string;
  children?: React.ReactNode;
};

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

// const Banner = (props: Banner) => {
//   const { c_banner } = props;
const Banner = (props: any) => {
  const { c_banner } = props;  
  // console.log(c_banner?.bannerCTA?.label,"mansi")
  

  return (
    <>
      {/* <div className="hero-section">
        <img className="hero-image"
          src={c_bannerImage?c_bannerImage:Defaultimage} alt="banner" width="1" height="1" />
        <div className="hero-content">
          <div className="container">
            <div className={`banner-text  ${props.hours && props.timezone ? 'banner-dark-bg': ''}`}>
              <h1>{name}</h1>
              {c_locatorBannerAdditionalText?
              <p>{c_locatorBannerAdditionalText}</p>
              :''}
              {props.hours && props.timezone ?
                <div className="openClosestatus">
                  <OpenClose timezone={props.timezone} hours={props.hours} deliveryHours={props.hours}></OpenClose>
                </div> : ''}
            </div>
          </div>
        </div>
        </div> */}
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
                  <a>{c_banner?.bannerCTA?.label}</a>
                </button>
              </div>
            </div>
            <div style={{ height: "440px", width: "560px" }}>
              <a>
                {/* <img src={c_banner.bannerImage.url} /> */}
              </a>
            </div>
          </div>
      </>
      );
};

      export default Banner;
