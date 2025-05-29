import React from "react";

export default function Founder() {
  return (
    <>
      <div className="container text-start mt-5 px-5">
        <h2 className="text-center py-5">People</h2>
        <div className="row ">
          <div className="col-6 text-center p-5">
            <img
              src="media/images/nithinKamath.jpg"
              alt=""
              className="mb-4"
              width={"60%"}
              style={{ borderRadius: "100%" }}
            />
            <h5>Nithin Kamath</h5>
            <p className="my-4">Founder, CEO</p>
          </div>
          <div className="col-6 p-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a href="/">Homepage</a> / <a href="">TradingQnA</a> /{" "}
              <a href="">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
