import { useState } from "react";
import "./Style.css";

const ImageSlider = (props) => {
  const [image, setImage] = useState(props.images[0]);
  const images = props.images;

  function left() {
    const actualImageIndex = images.indexOf(image);
    let newImage;
    if (actualImageIndex === 0) {
      newImage = images[images.length - 1];
    } else {
      newImage = images[actualImageIndex - 1];
    }
    setImage(newImage);
  }

  function right() {
    const actualImageIndex = images.indexOf(image);
    let newImage;
    if (actualImageIndex === images.length - 1) {
      newImage = images[0];
    } else {
      newImage = images[actualImageIndex + 1];
    }
    setImage(newImage);
  }

  return (
    <div className="slider">
      <img src={image} alt={image} />
      <div className="sliderOptions">
        <i className="fa fa-angle-double-left" onClick={left}></i>
        <span>
          {images.indexOf(image) + 1}/{images.length}
        </span>
        <i className="fa fa-angle-double-right" onClick={right}></i>
      </div>
    </div>
  );
};

export default ImageSlider;
