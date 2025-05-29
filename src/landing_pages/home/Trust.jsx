import React from "react";
import "./Trust.css";
export default function Trust() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 text-start Trust">
            <h2>Trust with confidence</h2>
            <h3>Customer-first always</h3>
            <p>
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h3>No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h3>The Zerodha universe</h3>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h3>Do better with money</h3>
            <p>
              With initiatives like <a href="#">Nudge</a> and{" "}
              <a href="#">Kill Switch</a>, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              src="media/images/ecosystem.png"
              alt="ecosystem"
              width={"100%"}
            />
            <p>
              <a href="#">
                Explore our products <i className="fa-solid fa-arrow-right"></i>
              </a>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <a href="#">
                Try kite demo <i className="fa-solid fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="col-12 mt-5">
            <img src="media/images/press-logos.png" alt="press-logos" />
          </div>
        </div>
      </div>
    </>
  );
}
