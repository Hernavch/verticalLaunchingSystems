import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 500, clear: "both", paddingTop: 180, textAlign: "center" }}
      className="jumbotron container-fluid"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
