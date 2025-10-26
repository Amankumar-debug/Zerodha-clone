import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        learnMore=""
        tryDemo=""
        appStore=""
        googlePlay=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        link=""
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        learnMore=""
        tryDemo=""
        appStore=""
        googlePlay=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        link=""
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        learnMore=""
        tryDemo=""
        appStore=""
        googlePlay=""
      />
      <p className="text-center mt-5 mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </div>
  );
}

export default ProductPage;
