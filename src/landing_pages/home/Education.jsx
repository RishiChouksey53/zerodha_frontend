import React from "react";
import "./Education.css";
export default function Education() {
  return (
    <>
      <div className="container text-start mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6">
            <img src="media/images/index-education.svg" alt="" />
          </div>
          <div className="col-lg-6 text_area">
            <h2 className="mb-4">Free and open market education</h2>
            <div>
              <p className="my-3">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <a href="">
                Varsity <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div>
              <p className="my-3">
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a href="">
                TradingQ&A <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
