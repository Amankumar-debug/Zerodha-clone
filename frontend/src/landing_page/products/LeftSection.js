import React from "react";

function LeftSection({
  imageURL,
  productName,
  description,
  learnMore,
  tryDemo,
  appStore,
  googlePlay,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6  ">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1 className="mb-3">{productName}</h1>
          <p>{description}</p>
          <div>
            <a href={tryDemo}  style={{ textDecoration:"none"}}>Try demo →</a>
            <a href={learnMore} style={{marginLeft:"80px", textDecoration:"none"}}>Learn more →</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}  style={{marginLeft:"30px", }}>
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
