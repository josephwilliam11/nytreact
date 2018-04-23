import React from "react";

const Title = ({ children }) => (
  <div 
      style={{ background: "grey", height: 180, clear: "both", textAlign: "center" }}
      className="jumbotron"
      >
      {children}
    </div>
);

export default Title;