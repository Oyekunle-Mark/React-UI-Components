import React from "react";
import "./Card.css";

const CardBanner = ({ url }) => {
  const backgroundStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="banner"
      style={backgroundStyle}
    />
  );
};

export default CardBanner;
