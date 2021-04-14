import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout); //cleanup function
  }, [alert]);

  return (
    <article
      className={`color ${index > 4 && "color-light"}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percentage-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
