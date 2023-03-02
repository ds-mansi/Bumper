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
  console.log(props, "bgvugahswgvajgvxdg");
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  // console.log(props.labels,"labels for header")
  const linkDoms = props?.labels?.map((element: any) => {
    // console.log("sssssssss",element)

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
  console.log(props.licon.lowerHeaderIcon, "uadgyhgawvhgagvdhgavg");

  // const icons = props?.icon?.map((ico: any) => {
  //   // console.log("objectssssssssssssss",ico)
  //   return (
  //     <>
  //       <a
  //         style={{
  //           height: "18px",
  //           width: "18px",
  //           display: "flex",
  //           backgroundColor: "red",
  //           margin:"5px"
  //         }}
  //       >
  //         <img src={ico.url} style={{display: "flex",}}/>
  //       </a>
  //     </>
  //   );
  // });

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
          <div style={{ display: "inline-block" }}>
            <div
              style={{
                width: "224px",
                height: "30px",
                backgroundColor: "red",
              }}
            >
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
              <button>
                <div style={{ display: "flex" }}>
                  <div style={{ padding: "19px" }}>
                    <label><a href={props.licon.lowerHeaderShop.link}>{props.licon.lowerHeaderShop.label}</a></label>
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
            <button href={props._site.c_login.link}>
              {props._site.c_login.label}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
