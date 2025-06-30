import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtifactsCarousel = ({image}) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={`/${image}/arti${i + 1}.png`}
            className="w-14 h-10 object-cover rounded"
            alt={`Thumb ${i + 1}`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const totalSlides = 11;

  return (
    <div className="w-[50%] py-10">
      <Slider {...settings}>
        {Array.from({ length: totalSlides }, (_, i) => (
          <div key={i}>
            <img
              src={`/${image}/arti${i + 1}.png`}
              className=" h-[400px] w-full object-top object-cover rounded"
              alt={`Artifact ${i + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArtifactsCarousel;
