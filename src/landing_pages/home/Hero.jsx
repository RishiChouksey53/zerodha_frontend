import React from "react";

export default function Hero() {
  return (
    <div className="container mb-5">
      <div className="row">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-4"
        />
        <h1 className="mt-5 text-center">Invest in everything</h1>
        <p className="text-center fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ maxWidth: "fit-content", margin: "auto", marginTop: "1rem" }}
        >
          Sign&nbsp;up&nbsp;for&nbsp;free
        </button>
      </div>
    </div>
  );
}
