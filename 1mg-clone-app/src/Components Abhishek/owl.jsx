import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

/*
  resources:
  1- https://www.npmjs.com/package/react-owl-carousel
  2- https://github.com/seal789ie/react-owl-carousel
*/

const MyOwlCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true
  };
  return (
    <div className="box1">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <div className="minibox">
            <img
              src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
              alt="1"
            />
          </div>
          <h2 className="head_car">Make Healthcare Simpler </h2>
          <div>
            Get medicine information, order medicines, book lab tests and
            consult doctors online from the comfort of your home.
          </div>
        </div>
        <div className="item">
          <div className="minibox">
            <img
              src="https://www.1mg.com/images/login-signup/Know-Your-Medicines.png"
              alt="2"
            />
          </div>
          <h2 className="head_car">Know Your Medicines </h2>
          <div>
            View medicine information like usage, side effects and cheaper
            substitutes before you take them.
          </div>
        </div>
        <div className="item">
          <div className="minibox">
            <img
              src="https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"
              alt="3"
            />
          </div>
          <h2 className="head_car">Medicines, Home Delivered</h2>
          <div>
            Order any medicine or health product and we’ll deliver it for free.
            Enjoy discounts on everything.
          </div>
        </div>
        <div className="item">
          <div className="minibox">
            <img
              src="https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png"
              alt="4"
            />
          </div>
          <h2 className="head_car">Lab Tests at Home</h2>
          <div>
            Book any test from any lab. We'll collect the sample and send the
            reports. Save up to 80% every time.
          </div>
        </div>
        <div className="item">
          <div className="minibox">
            <img
              src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
              alt="5"
            />
          </div>
          <h2 className="head_car">Health Related Queries?</h2>
          <div>
            Consult our certified doctors from anywhere, anytime, and for free.
            We guarantee your privacy.
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};
export default MyOwlCarousel;
