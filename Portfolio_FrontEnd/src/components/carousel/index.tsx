import React, { useEffect, useState } from "react";
import ArrowLeft from "../../assets/svg/arrow-left-solid.svg";
import ArrowRight from "../../assets/svg/arrow-right-solid.svg";
import { ProjectImages } from "../../types/api/ProjectImages";
import "./styles.css";

interface CarouselProps {
  projectImages: ProjectImages[];
}

const Carousel: React.FC<CarouselProps> = ({ projectImages }) => {
  const [current, setCurrent] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState(
    Array(projectImages.length).fill(null)
  );
  const [loading, setLoading] = useState(true);
  const MAX_NUM_DISPLAY = 5;

  const getDisplayNumbers = () => {
    const totalImages = projectImages.length;
    const numbers = [];

    let start = Math.max(current - Math.floor(MAX_NUM_DISPLAY / 2), 0);
    let end = Math.min(start + MAX_NUM_DISPLAY, totalImages);

    if (end === totalImages && start > 0) {
      start = Math.max(end - MAX_NUM_DISPLAY, 0);
    }

    for (let i = start; i < end; i++) {
      numbers.push(i + 1);
    }

    return numbers;
  };

  useEffect(() => {
    const preloadedImages = projectImages.map((image) => {
      const img = new Image();
      img.src = image.link;
      return img;
    });

    Promise.all(
      preloadedImages.map(
        (img) =>
          new Promise((resolve) => {
            img.onload = resolve;
          })
      )
    ).then(() => {
      setPreloadedImages(preloadedImages);
      setLoading(false);
    });
  }, [projectImages]);

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
        <div className="slide active">
          {loading ? (
            <div className="loading_img">Loading...</div>
          ) : (
            <img
              src={preloadedImages[current].src}
              alt="Carousel Image"
              className="image"
            />
          )}
        </div>
      </div>
      <div className="arrows">
        <img
          src={ArrowLeft}
          width={40}
          height={40}
          alt="Previous"
          className="arrow"
          onClick={prevSlide}
        />
        <div className="image-counter">
          {getDisplayNumbers().map((index) => (
            <span
              key={index}
              className={`dot ${index === current + 1 ? "active-dot" : ""}`}
              onClick={() => goToSlide(index - 1)}
            >
              {index}
            </span>
          ))}
        </div>
        <img
          src={ArrowRight}
          width={40}
          height={40}
          alt="Next"
          className="arrow"
          onClick={nextSlide}
        />
      </div>
    </>
  );
};

export default Carousel;
