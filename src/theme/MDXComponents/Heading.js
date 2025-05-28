import React, { useState, useEffect } from "react";
import Heading from "@theme/Heading";
export default function MDXHeading(props) {
  const [className, setClassName] = useState("");

  useEffect(() => {
    switch (props.as) {
      case "h1":
        setClassName("text-h1");
        break;
      case "h2":
        setClassName("text-h2");
        break;
      case "h3":
        setClassName("text-h3");
        break;
      case "h4":
        setClassName("text-h4");
        break;
      case "h5":
        setClassName("text-h5");
        break;
      case "h6":
        setClassName("text-h6");
        break;
      default:
        setClassName("");
        break;
    }
  }, [props]);

  return <Heading {...props} className={className} />;
}
