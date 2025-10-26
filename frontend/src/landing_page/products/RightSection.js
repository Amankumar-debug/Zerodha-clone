import React from "react";

function RightSection({ imageURL, productName, link, description }) {
  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-6 p-5 mt-3">
          <h1 className="mb-3">{productName}</h1>
          <p>{description}</p>
          <div>
            <a href={link}  style={{ textDecoration:"none"}}>Learn more →</a>
          </div>
        </div>
        <div className="col-6  ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  )
}

export default RightSection;
