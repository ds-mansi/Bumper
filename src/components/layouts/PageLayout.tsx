import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";

type Props = {
  title?: string;
  _site?: any;
  global: any;
  children?: React.ReactNode;
  aboutimg?: any;
  abouthead?: any;
  aboutcta?: any;
  about2img?: any;
  abouthead2?: any;
  about2cta?: any;
};

const PageLayout = ({
  title,
  _site,
  global,
  children,
  aboutimg,
  abouthead,
  aboutcta,
  abouthead2,
  about2img,
  about2cta,
}: Props) => {
  console.log(aboutimg, "aboutimg");
  return (
    <>
      <div style={{ display: "inline-block" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ width: "50%" }}>
            <div style={{ display: "flex" }}>
              {aboutimg?.map((img: any) => {
                // console.log(props.aboutimg, "adefsgedg");
                return (
                  <>
                    <img src={img.url} />
                  </>
                );
              })}
              <div style={{ padding: "30px" }}>
                <h1 style={{ fontWeight: "bold", paddingBottom: "10px" }}>
                  {abouthead?.aboutHeading}
                </h1>
                <br />
                <p style={{ paddingBottom: "10px" }}>
                  {abouthead?.aboutDescription}
                </p>
                <br />
                <button
                  style={{
                    border: "1px solid black",
                    backgroundColor: "black",
                    color: "white",
                    padding: "15px",
                  }}
                >
                  <a href={aboutcta?.link}>{aboutcta?.label}</a>
                </button>
              </div>
            </div>
          </div>
          {/* about1 end */}
          <div
            style={{
              display: "flex",
              backgroundColor: "black",
              width: "50%",
            }}
          >
            <div style={{ width: "90%" }}>
              <img src={about2img?.url} style={{ height: "100%" }} />
            </div>
            <div
              style={{
                color: "white",
                fontWeight: "bold",
                padding: "50px",
              }}
            >
              <h1
                style={{
                  paddingBottom: "55px",
                  fontWeight: "bold",
                }}
              >
                {abouthead2?.aboutHeading2}
              </h1>
              <p style={{ color: "white", paddingBottom: "70px" }}>
                {abouthead2?.about2Description}
              </p>
              <button style={{ border: "1px solid white", padding: "10px" }}>
                <a href={about2cta?.link}>{about2cta?.label}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
