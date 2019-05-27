import React from "react";
import "./Header.css";

const HeaderTitle = ({ title, handle }) => (
  <p className="title">
    <b>{title}</b>{" "}
    <small>
      {handle} <span>.</span> 26 jan
    </small>
  </p>
);

export default HeaderTitle;
