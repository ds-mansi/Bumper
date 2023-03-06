import * as React from "react";

type props = {
  data: any;
  labels: any;
  store: any;
  icon: any;
  lhead: any;
  licon: any;
  limg: any;
};

const Header = (props: any) => {
  // console.log(props, "bgvugahswgvajgvxdg");
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  // console.log(props.labels,"labels for header")
  // upper header nav
  const linkDoms = props?.labels?.map((element: any) => {

    return (
      <>
        <a
          className="navbar-item"
          href={element.link}
          style={{ paddingRight: "15px", borderRight: "1px solid black" }}
        >
          {element.label}
        </a>
      </>
    );
  });
  // console.log(props.store.upperCtaStore, "data");
  // console.log(props.licon.lowerHeaderIcon, "uadgyhgawvhgagvdhgavg");


// lower header nav
  const lhead = props?.lhead?.map((head: any) => {
    // console.log("hbsdjhbswjsjbgsj",head)
    return (
      <>
        <a href={head.link} style={{ paddingRight: "40px" }}>
          {head.label}
        </a>
      </>
    );
  });
  // lower header icon
  const lowericon = props?.limg?.map((low: any) => {
    return (
      <>
        <a href="#">
          <img src={low.url} style={{ height: "20px" }} />
        </a>
      </>
    );
  });

  return (
    <>
      <div id="header" className="header-nav">
        {/* logo */}
        <div className="headerLogo" style={{ display: "flex" }}>
          <a className="logo" href="/">
            <div
              style={{
                height: "100px",
                width: "224px",
                display: "flex",
                backgroundColor: "red",
              }}
            >
              <img
                src={props._site.c_bumperLogo.url}
                style={{
                  backgroundColor: "red",
                  height: "70px",
                  width: "154px",
                  margin: "auto",
                }}
              />
            </div>
          </a>
          {/* upper header nav */}
          <div>
            <nav
              style={{
                color: "black",
                backgroundColor: "red",
                // padding: "0px 15px",
                // width: "100%",
                height: "30px",
                fontSize: "14px",
                width: "784px",
              }}
            >
              <ul style={{ float: "right" }}>{linkDoms}</ul>
            </nav>
            {/* lower header nav */}
            <div>
              <div
                style={{
                  backgroundColor: "#202124",
                  color: "white",
                  padding: "22px",
                  display: "flex",
                }}
              >
                {lhead}
                <img src={props?.licon?.lowerHeaderIcon?.url} />
              </div>
            </div>
          </div>
          <div style={{ display: "inline-block",borderBottom:"1px solid #202124" }}>
            <div
              style={{
                width: "224px",
                height: "30px",
                backgroundColor: "red",
              }}
            >
              {/* upper nav find a  Store button  */}
              <button
                style={{
                  backgroundColor: "red",

                  height: "30px",
                  paddingRight: "75px",
                  color: "white",
                  float: "right",
                }}
              >
                <a href={props.store.upperCtaStore.link}>
                  {props.store.upperCtaStore.label}
                </a>
              </button>
              {/* lower header button Find a shop button */}
              <button>
                <div style={{ display: "flex" }}>
                  <div style={{ padding: "19px" }}>
                    <label>
                      <a href={props.licon.lowerHeaderShop.link}>
                        {props.licon.lowerHeaderShop.label}
                      </a>
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      float: "right",
                      paddingTop: "20px",
                      paddingLeft: "25px",
                    }}
                  >
                    {lowericon}
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#202124",
              color: "white",
              padding: "35px",
            }}
          >
            {/* login button header */}
            <button>
              <a href={props._site.c_login.link}>{props._site.c_login.label}</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
