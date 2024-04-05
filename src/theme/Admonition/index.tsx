import React from "react";
import Admonition from "@theme-original/Admonition";
import HtmlDemo from "@site/src/components/HtmlDemo";
import JsDemo from "@site/src/components/JsDemo";

export default function AdmonitionWrapper(props) {
  if (props.type === "htmlDemo") {
    return <HtmlDemo {...props} />;
  } else if (props.type === "jsDemo") {
    return <JsDemo {...props} />;
  }
  return <Admonition {...props} />;
}
