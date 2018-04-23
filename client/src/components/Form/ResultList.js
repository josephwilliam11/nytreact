import React from "react";

export const ResultList = props => (
  <ul className="list-group">
    {props.results.map(result => (
      <li key={result._id} className="list-group-item">
        <p>
          {result.headline.main}
        </p>
        <a  href={result.web_url}>{result.web_url}</a>
      
          
        

      </li>
    ))}
   </ul>
);