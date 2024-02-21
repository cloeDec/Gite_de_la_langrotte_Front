
import React from "react";

const Image = ({ image }) => {
  return (
    <>
          <img className="image_slider" src={image.url_image} />

    </>
  );
};

export default Image;