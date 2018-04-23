import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ marginBottom: 10 }} onClick={props.handleFormSubmit} className="btn btn-success">
    {props.children}
  </button>
);