import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/MarkdownDocsCard.css";

function MarkdownDocsCard({className, title, children}) {
  return (
    <div>
      <div className={"basic-title rounded-top py-2 " + className}>
        <h6 className="text-center mb-0">{title}</h6>
      </div>
      <div className=" basic__formating_p rounded-bottom bg-light p-3">
        {children}
      </div>
    </div>
  );
  
}

export default MarkdownDocsCard;
