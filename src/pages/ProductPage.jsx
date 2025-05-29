import React from "react";

import Hero from "../landing_pages/product/Hero";
import LeftSection from "../landing_pages/product/LeftSection";
import RightSection from "../landing_pages/product/RightSection";
import ZerodhaUniverse from "../landing_pages/product/ZerodhaUniverse";
import Zuniverse from "../landing_pages/product/Zuniverse"

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        image="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="Try demo &rarr;"
        link2="Learn More &rarr;"
      />
      <RightSection
        image="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="Learn more"
      />
      <LeftSection
        image="media/images/coin.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="coin &rarr;"
        link2=""
      />
      <RightSection
        image="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link1="Kite Connect "
      />
      <LeftSection
        image="media/images/varsity.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link2=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="">Zerodha.tech</a> blog.
      </p>
      <ZerodhaUniverse />
    </>
  );
}
