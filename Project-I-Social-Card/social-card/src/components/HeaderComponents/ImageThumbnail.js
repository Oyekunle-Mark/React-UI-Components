import React from "react";
import "./Header.css";

const ImageThumbnail = ({ url }) => (
  <div className='thumbnail'>
    <img
      src={url}
      alt="logo"
    />
  </div>
);

export default ImageThumbnail;
