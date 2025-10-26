import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="mt-3 text-muted fs-5 mb-5">
          Free equity investments and flat &#8377;20 intraday and F&O trades
        </h3>
      </div>
      <div className="row mt-5 ">
        <div className="col-4">
          <img className="p-3" src="media/images/pricing0.svg" alt="0img" style={{width:"90%"}} />
          <h1 className="fs-3 text-center">Free equity delivery</h1>
          <p className="text-center p-3 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img className="p-3" src="media/images/intradayTrades.svg" alt="0img" style={{width:"90%"}} />
          <h1 className="fs-3 text-center">Intraday and F&O trades</h1>
          <p className="text-center p-3 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4">
          <img className="p-3" src="media/images/pricingEquity.svg" alt="0img" style={{width:"90%"}} />
          <h1 className="fs-3 text-center">Free direct MF</h1>
          <p className="text-center p-3 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
