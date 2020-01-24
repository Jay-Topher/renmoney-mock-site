import React from "react";
import "./FourthSection.scss";

const FourthSection = () => {
  const cnbc = "assets/cnbc.svg";
  const punch = "assets/punch.svg";
  const vanguard = "assets/vanguard.svg";
  const guardian = "assets/guardian.svg";
  const techpoint = "assets/techpoint.svg";
  const venture = "assets/venture.svg";
  return (
    <section className="FourthSection">
      <h3>As featured in...</h3>
      <div className="images">
        <img src={cnbc} alt="cnbc" />
        <img src={punch} alt="punch" />
        <img src={vanguard} alt="vanguard" />
        <img src={guardian} alt="guardian" />
        <img src={techpoint} alt="techpoint" />
        <img src={venture} alt="venture" />
      </div>
    </section>
  );
};

export default FourthSection;
