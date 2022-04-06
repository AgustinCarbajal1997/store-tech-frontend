import React,{ useState, useRef, useLayoutEffect, useEffect } from 'react'
import useCurrentWidth from '../../customHooks/useCurrentWidth';
import CarouselHighlightsList from './CarouselHighlightsList';
import carouselHighlightsQueries from './CarouselHighlightsQueries';
const CarouselHighlightsContainer = ({ productList, title }) => {
    const [currentPlaceCarousel, setCurrentPlaceCarousel] = useState(0)
    const [widthCarousel, setWidthCarousel] = useState(0)
    const carousel = useRef();
    const carouselSlide = useRef();


    const onBackPlaceTinyCarousel = () =>{
        if(currentPlaceCarousel === 0) return;
        if(currentPlaceCarousel <= carousel.current.clientWidth){
            setCurrentPlaceCarousel(0);  
        }else{
            setCurrentPlaceCarousel(currentPlaceCarousel - carousel.current.clientWidth);
        } 
    }
    

    const onNextPlaceTinyCarousel = () => {
        
        if((currentPlaceCarousel + carousel.current.clientWidth)>= carouselSlide.current.clientWidth)return;
        if(currentPlaceCarousel + (carousel.current.clientWidth*2) >= carouselSlide.current.clientWidth){
            setCurrentPlaceCarousel(carouselSlide.current.clientWidth-carousel.current.clientWidth)
        }else{
            setCurrentPlaceCarousel(currentPlaceCarousel + carousel.current.clientWidth)
        }
    }

    useLayoutEffect(() => {
        setWidthCarousel(carousel.current.clientWidth);
    }, [])

    let width = useCurrentWidth();
    useEffect(() => {
        setCurrentPlaceCarousel(0)
      }, [width])
    return (
        <section
            ref={carousel}
            className="carousel-five-products-view-section"
        >
            <CarouselHighlightsList
                title={title}
                carouselSlide={carouselSlide}
                widthCarousel={widthCarousel}
                currentPlaceCarousel={currentPlaceCarousel}
                productList={productList}
                onBackPlaceTinyCarousel={onBackPlaceTinyCarousel}
                onNextPlaceTinyCarousel={onNextPlaceTinyCarousel}
                width={width}
                carouselHighlightsQueries={carouselHighlightsQueries}
            />
        </section>
    )
}

export default CarouselHighlightsContainer
