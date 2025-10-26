import React from "react";

function Brokraje() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-4 text-center">
          <a href="" style={{ textDecoration: "none" }}>
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </h1>
        <h1 className="mt-5 fs-3 px-5">Charges for account opening</h1>
        <div className="d-flex border mx-5 mt-2" style={{display:"flex",alignContent:"center",width:"80%"}}>
            <p className="mt-1">Type of account</p>
            <p className="mt-1" style={{marginLeft:"73%"}}>	Charges</p>
        </div>
        <div className="row border mx-5" style={{width:"80%"}}>
            <div className="col-10" style={{lineHeight:"2"}}>
                <p >Online account</p>
                <p>Offline account</p>
                <p>NRI account (offline only)</p>
                <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
            </div>
            <div className="col-2" style={{lineHeight:"2"}}>
                <p>Free</p>
                <p>Free</p>
                <p>	₹ 500</p>
                <p>	₹ 500</p>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default Brokraje;
