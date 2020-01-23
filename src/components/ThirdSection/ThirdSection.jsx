import React from "react";
import "./ThirdSection.scss";
import ApplyButton from "../ApplyButton/ApplyButton";

const ThirdSection = () => {
  return (
    <section className="ThirdSection">
      <div className="col-5">
        <h2>Get a loan in less than 24 hours</h2>
        <p>
          Our Personal Loans and Micro-Business Loans are designed to
          conveniently meet your financial needs. So, whether you’re employed or
          run your own business, you can get a loan of up to ₦6,000,000.
        </p>
        <ApplyButton />
      </div>
    </section>
  );
};

export default ThirdSection;
