import React from "react";
import "./Box.scss";

function Box(props) {
  return (
    <div className={props.isColumn ? "c-box--column" : "c-box"}>
      {props.children}
    </div>
  );
}

export default Box;
