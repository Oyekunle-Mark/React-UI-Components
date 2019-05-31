import React from "react";
import moment from 'moment';
import "./Header.css";

const HeaderTitle = ({ title, handle }) => (
  <p className="title">
    <b>{title}</b>{" "}
    <small>
      {handle} <span>.</span> {moment().format('D MMM').toLowerCase()}
    </small>
  </p>
);

export default HeaderTitle;
