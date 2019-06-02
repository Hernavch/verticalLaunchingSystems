import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 500, clear: "both", paddingTop: 180, textAlign: "left" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
