import React from "react";
import "./FirstSection.scss";
import FinanceCard from "./FinanceCard/FinanceCard";

const FirstSection = () => {
  const loansUp = "assets/loansup.svg";
  const fruit = "assets/nfruit.svg";
  return (
    <section className="FirstSection col-6">
      <h2 className="FirstSection_title">
        We’re passionate about making financial inclusion count
      </h2>
      <p className="FirstSection_body">
        Our loans and investment products are designed to offer you convenience
        and value.
      </p>
      <div className="display_cards">
        <FinanceCard
          pic={loansUp}
          title="Loans"
          body="Borrow up to N6m and receive money in less than 24 hours."
          btnText="Apply now"
        />
        <FinanceCard
          pic={fruit}
          title="Investments"
          body="Earn up to 13% per annum with our investment solutions."
          btnText="Start Earning"
        />
      </div>
    </section>
  );
};

export default FirstSection;
