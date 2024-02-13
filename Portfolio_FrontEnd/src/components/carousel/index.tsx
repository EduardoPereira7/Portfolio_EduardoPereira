import React, { useState } from "react";
import ArrowLeft from "../../assets/svg/arrow-left-solid.svg";
import ArrowRight from "../../assets/svg/arrow-right-solid.svg";
import { ProjectImages } from "../../types/api/ProjectImages";
import "./styles.css";

interface CarouselProps {
  projectImages: ProjectImages[];
}

const Carousel: React.FC<CarouselProps> = ({ projectImages }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === projectImages.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projectImages.length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      <div className="carousel">
        {projectImages.map((image, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={image.link}
                alt="Imagem do Carousel"
                className="image"
              />
            )}
          </div>
        ))}
      </div>
      <div className="arrows">
        <img
          src={ArrowLeft}
          width={40}
          height={40}
          alt="Anterior"
          className="arrow"
          onClick={prevSlide}
        />
        <div className="image-counter">
          {projectImages.map((_, index) => (
            <span
              key={index}
              className={index === current ? "dot active-dot" : "dot"}
              onClick={() => goToSlide(index)}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <img
          src={ArrowRight}
          width={40}
          height={40}
          alt="Próximo"
          className="arrow"
          onClick={nextSlide}
        />
      </div>
    </>
  );
};

export default Carousel;
