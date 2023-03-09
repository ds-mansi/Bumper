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
