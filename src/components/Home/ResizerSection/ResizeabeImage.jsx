import React, { useState } from "react";
import "./ResizeableImage.css";

import image1 from "../../../assets/Cards1.svg";
import image2 from "../../../assets/Card2.svg";
import image3 from "../../../assets/Card3.svg";
import image4 from "../../../assets/Card4.svg";

const ResizableImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: image1,
      title: "Management",
      subTitle: "Optimize resource utilization.",
    },
    {
      src: image2,
      title: "Faculity",
      subTitle: "Optimize resource utilization.",
    },
    {
      src: image3,
      title: "Parent's",
      subTitle: "Optimize resource utilization.",
    },
    {
      src: image4,
      title: "Student's",
      subTitle: "Optimize resource utilization.",
    },
  ];

  return (
    <div className="wrapper-resizer">
      <h2>Who Are You?</h2>
      <div className="resize-container">
        {images.map((item, index) => (
          <div
            key={index}
            className={`resizeimage ${index === activeIndex ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <h2>{`0${index + 1} `}</h2>
            <h4>{item.title}</h4>
            <p>{item.subTitle}</p>
            <img src={item.src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResizableImages;
