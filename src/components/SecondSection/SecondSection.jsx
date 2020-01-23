import React from "react";
import "./SecondSection.scss";
import StatCard from "./StatCard/StatCard";

const SecondSection = () => {
  const bank = "assets/bank.svg";
  const chat = "assets/chat.svg";
  const profile = "assets/profile.svg";
  return (
    <section className="SecondSection">
      <StatCard
        icon={bank}
        title="Over ₦50bn"
        body="in loans provided"
        color="light"
      />
      <StatCard
        icon={profile}
        title="140,000"
        body="customers and counting"
        color="mid"
      />
      <StatCard
        icon={chat}
        title="Over ₦170bn"
        body="in Fixed Deposit inflows"
        color="dark"
      />
    </section>
  );
};

export default SecondSection;
