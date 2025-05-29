import React from "react";
import "./Pricing.css"; 
export default function Pricing() {
  return (
    <>
      <div className="container text-start mb-5 mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 left">
            <h2>Unbeatable pricing</h2>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
          </div>
          <div className="col-lg-8 col-md-12 pricing_div">
            <div className="pricing_box">
              <img src="media/images/pricing0.svg" alt="" />
              <p>
                Free account <br />
                opening
              </p>
            </div>
            <div className="pricing_box">
              <img src="media/images/pricingEquity.svg" alt="" />
              <p>
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>
            <div className="pricing_box">
              <img src="media/images/other-trades.svg" alt="" />
              <p>
                Intraday and <br />
                F&O
              </p>
            </div>
          </div>
        </div>
        <p>
          <a href="#">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </>
  );
}
