import React from "react";

export const SearchForm = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">Search NYT For An Article:</label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder=""
        id="search"

      />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary mt-3"
      >
        Search 
      </button>
      
    </div>
  </form>
);

