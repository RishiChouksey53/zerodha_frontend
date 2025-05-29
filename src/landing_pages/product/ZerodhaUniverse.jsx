import React from "react";
import Zuniverse from "./Zuniverse";
export default function ZerodhaUniverse() {
  return (
    <>
      <div className="container my-5  text-center">
        <div className="row">
          <div className="col-12">
            <h2>The Zerodha Universe</h2>
            <p>
              Extend your trading and investment experience even further with
              our partner platforms
            </p>
          </div>
          <div className="col-12 d-flex flex-row justify-content-center align-items-center">
            <div className="col-4 ">
              <Zuniverse
                img1="media/images/zerodhaFundhouse.png"
                description1="d-flex flex-row justify-content-center align-items-center"
                img2="media/images/streakLogo.png"
                description2="Systematic trading platformthat allows you to create and backteststrategies without coding."
              />
            </div>
            <div className="col-4">
              <Zuniverse
                img1="media/images/sensibullLogo.svg"
                description1="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
                img2="media/images/smallcaseLogo.png"
                description2="Systematic trading platform Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
              />
            </div>
            <div className="col-4">
              <Zuniverse
                img1="media/images/tijori.svg"
                description1="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
                img2="media/images/dittoLogo.png"
                description2="Personalized advice on life and health insurance. No spamand no mis-selling."
              />
            </div>
          </div>
          <button
            className="p-2 btn btn-primary fs-5"
            style={{ width: "20%", margin: "auto", marginTop: "1rem" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}
