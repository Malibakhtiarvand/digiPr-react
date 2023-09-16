import { Slide, useScrollTrigger } from "@mui/material";
import React from "react";
import checkRerender from "../helpers/checkRerender";

const ScrollToHide = (props) => {
  checkRerender("ScrollToHide")
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: props.window ? window() : undefined,
  });

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
};

export default ScrollToHide;
