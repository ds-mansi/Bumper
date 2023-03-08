import * as React from "react";
import gallerybg from "../../images/faq-bg.png"

import { useState, useEffect } from "react";
import AccordionItem from "./AccordianItem";
import { StaticData } from "../../../sites-global/staticData";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Faq(props: any) {
  console.log(props,"faq")
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

 
 
 return (
    <>
      {props?.faqs && props?.faqs?.map((res:any,index:any)=>{
        return(
          <>
            <div>
            <Accordion
                  open={open === index + 1}
                  style={{
                  
                    backgroundColor: "#ffcfcf",
                    borderRadius:"10px",
                    border:"1px solid red",
                    fontSize:"10px",
                    padding: "20px 20px 3px 20px",
                   
                    
                  }}
                >
                  <AccordionHeader onClick={() => handleOpen(index + 1)}>
                    <h4>{res.question}</h4>
                  </AccordionHeader>
                  <AccordionBody
                    style={{
                      backgroundColor: "#eb0000",
                       fontSize:"16px",
                      color:"white",
                     padding:"10px",
                      // width:"100%"
                    }}
                  >
                    {res?.answer}
                  </AccordionBody>
                </Accordion>
            </div>
          </>
        )
      })}
    </>
  );
}