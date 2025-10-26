import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-3">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}}  />
          <p className="text-muted fs-6  mt-3">Our asset management venture</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{width:"60%"}} />
          <p className="text-muted fs-6 mt-3">Options trading platform that lets you</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-muted fs-6 mt-3">Thematic investing platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"40%"}} />
          <p className="text-muted fs-6 mt-3">Investment research platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"40%"}}  />
          <p className="text-muted fs-6 mt-3">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-muted fs-6 mt-3">Personalized advice on life</p>
        </div>
        <button
          className="p-2 fs-5 btn btn-primary mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
