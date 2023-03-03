import * as React from "react";
type props = {
  ufooter: any;
  upfooter: any;
  _site: any;
  subscribe: any;
  tandc: any;
  copy: any;
  abouthead: any;
  aboutimg: any;
  aboutcta: any;
  abouthead2: any;
  about2img: any;
  about2cta: any;
};
// props call 
const Footer = (props: any) => {
  //   console.log(props.links);
  //   console.log("copyright",props.copy.copyright)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };
// map for upperfooter nav
  const ufooter = props?.ufooter?.map((link: any) => {
    return (
      <>
        <ul className="footer-item">
          <li>
            <a href={link.link}>{link.label}</a>
          </li>
        </ul>
      </>
    );
  });
// subscribe button in upperfooter
  const upfooter = props?.upfooter?.subscribeLabel;

  // terms and condition call in lowerfooter
  const tandc = props?.tandc?.map((res: any) => {
    return (
      <>
        <ul>
          <li className="term">
            <a href={res.link}>{res.label}</a>
          </li>
        </ul>
      </>
    );
  });
  //   console.log("object",props.subscribe.label)

  return (
    <>
      <div style={{ display: "inline-block" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ width: "50%" }}>
            <div style={{ display: "flex" }}>
              {/* about1 section in footer starts */}
              {props?.aboutimg?.map((img: any) => {
                // console.log(props.aboutimg, "adefsgedg");
                return (
                  <>
                    <img src={img.url} style={{ height: "80%" }} />
                  </>
                );
              })}
              <div style={{ padding: "30px" }}>
                <h1 style={{ fontWeight: "bold", paddingBottom: "10px" }}>
                  {props?.abouthead?.aboutHeading}
                </h1>
                <br />
                <p style={{ paddingBottom: "10px" }}>
                  {props?.abouthead?.aboutDescription}
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
                  <a href={props?.aboutcta?.link}>{props?.aboutcta?.label}</a>
                </button>
              </div>
            </div>
          </div>
          {/* about1 section in footer ends */}
          {/* about2 section in footer starts */}
          <div
            style={{
              display: "flex",
              backgroundColor: "black",
              width: "50%",
            }}
          >
            <div style={{ width: "90%" }}>
              <img src={props?.about2img?.url} style={{ height: "100%" }} />
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
                {props?.abouthead2?.aboutHeading2}
              </h1>
              <p style={{ color: "white", paddingBottom: "70px" }}>
                {props?.abouthead2?.about2Description}
              </p>
              <button style={{ border: "1px solid white", padding: "10px" }}>
                <a href={props?.about2cta?.link}>{props?.about2cta?.label}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* about2 section in footer ends */}
      {/* lower footer call */}
      <footer className="upperfooter">
        {/* upper footer nav */}
        <div style={{ display: "flex", width: "50%" }}>{ufooter}</div>
        <div style={{ paddingLeft: "10%", display: "flex", paddingTop: "4%" }}>
          {/* upper footer subscribe label */}
          <div style={{ paddingRight: "90px" }}>{upfooter}</div>
          {/* upper footer subscribe button */}
          <div>
            <button 
              style={{
                border: "1px solid black",
                padding: "5px 50px 5px 20px",
              }}
            >
              <a href={props.subscribe.link}>{props.subscribe.label}</a>
            </button>
          </div>
        </div>
      </footer>

      {/* lower footer starts */}
      <div
        style={{ width: "100%", display: "flex", backgroundColor: "#f4f4f4" }}
      >
        {/* lower footer copyright */}
        <p
          style={{
            width: "50%",
            padding: "30px 97px 77px 70px",
            fontSize: "15px",
            color: "#9c9fa7",
          }}
        >
          {props.copy.copyright}
        </p>
        {/* terms and condition  in lower footer */}
        <div className="tandc-footer">{tandc}</div>
      </div>
    </>
  );
};

export default Footer;
