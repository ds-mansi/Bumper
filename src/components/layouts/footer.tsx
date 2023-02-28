import * as React from "react";
type props = {
  ufooter: any;
  upfooter: any;
  _site: any;
  subscribe: any;
  tandc:any;
  copy: any;
};

const Footer = (props: any) => {
  //   console.log(props.links);
  //   console.log("copyright",props.copy.copyright)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };

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

  const upfooter = props?.upfooter?.subscribeLabel;

  const tandc=props?.tandc?.map((res:any)=>{
	return(
		<>
			<ul>
				<li className="term"><a href={res.link}>{res.label}</a></li>
			</ul>
		</>
	)
  })
  //   console.log("object",props.subscribe.label)

  return (
    <>
      <footer className="upperfooter">
        <div style={{ display: "flex" }}>{ufooter}</div>
        <div style={{ paddingLeft: "10%", display: "flex", paddingTop: "4%" }}>
          <div style={{ paddingRight: "90px" }}>{upfooter}</div>
          <div>
            <button
              style={{
                border: "1px solid black",
                padding: "5px 50px 5px 20px",
              }}
            >
              <a>{props.subscribe.label}</a>
            </button>
          </div>
        </div>
      </footer>
      <div style={{width:"100%",display:"flex",backgroundColor:"#f4f4f4"}}>
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
		<div className="tandc-footer">{tandc}</div>

      </div>
    </>
  );
};

export default Footer;
