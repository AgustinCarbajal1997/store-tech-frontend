import React, { useState, useRef, useEffect } from "react";
import useCurrentWidth from "../../customHooks/useCurrentWidth";
import OptionsList from "./OptionsList";
import OptionsListMobile from "./OptionsListMobile";

const OptionsContainer = ({ listOptions }) => {
  const [currentPlaceCarousel, setCurrentPlaceCarousel] = useState(0);
  const carousel = useRef();
  const carouselSlide = useRef();

  const onBackPlaceTinyCarousel = () => {
    if (currentPlaceCarousel === 0) return;
    if (currentPlaceCarousel <= carousel.current.clientWidth) {
      setCurrentPlaceCarousel(0);
    } else {
      setCurrentPlaceCarousel(
        currentPlaceCarousel - carousel.current.clientWidth
      );
    }
  };

  const onNextPlaceTinyCarousel = () => {
    if (
      currentPlaceCarousel + carousel.current.clientWidth >=
      carouselSlide.current.clientWidth
    )
      return;
    if (
      currentPlaceCarousel + carousel.current.clientWidth * 2 >=
      carouselSlide.current.clientWidth
    ) {
      setCurrentPlaceCarousel(
        carouselSlide.current.clientWidth - carousel.current.clientWidth
      );
    } else {
      setCurrentPlaceCarousel(
        currentPlaceCarousel + carousel.current.clientWidth
      );
    }
  };

  const optionsQueries = {
    xs: 160,
    sm: 174,
    md: 190,
    lg: 220,
  };

  let width = useCurrentWidth();
  useEffect(() => {
    setCurrentPlaceCarousel(0)
  }, [width])
  return (
    <section className="section-options" ref={carousel}>
      {width === "xs" || width === "sm" ? (
        <OptionsListMobile listOptions={listOptions} />
      ) : (
        <OptionsList
          carouselSlide={carouselSlide}
          currentPlaceCarousel={currentPlaceCarousel}
          listOptions={listOptions}
          onBackPlaceTinyCarousel={onBackPlaceTinyCarousel}
          onNextPlaceTinyCarousel={onNextPlaceTinyCarousel}
          optionsQueries={optionsQueries}
          width={width}
        />
      )}
    </section>
  );
};

export default OptionsContainer;
