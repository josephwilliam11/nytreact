import React from "react";

export const Input = props => (
  <div className="form-group">
    <input 
      className="form-control" 
      onChange={props.handleInputChange} 
      value={props.search}
      // name="search"
      // id="search"
      {...props} />
  </div>
);

