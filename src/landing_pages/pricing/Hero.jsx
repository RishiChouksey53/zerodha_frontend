import Taxes from "./Taxes";
function Hero() {
  return (
    <>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col-12 py-5">
            <h2 className="fs-1">Charges</h2>
            <p className="fs-4 text-muted">List of all charges and taxes</p>
          </div>
          <div className="col-12 mt-5 d-flex flex-row justify-content-between ">
            <div className="col-4">
              <Taxes
                img="media\images\pricingEquity.svg"
                header="Free equity delivery"
                description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
              />
            </div>
            <div className="col-4">
              <Taxes
                img="media\images\other-trades.svg"
                header="Intraday and F&O trades"
                description="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
              />
            </div>
            <div className="col-4">
              <Taxes
                img="media\images\pricingMF.svg"
                header="Free direct MF"
                description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
