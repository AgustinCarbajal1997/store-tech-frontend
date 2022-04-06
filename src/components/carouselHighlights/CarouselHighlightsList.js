import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import CarouselHighlightsItem from './CarouselHighlightsItem';
const CarouselHighlightsList = ({ title, carouselSlide, widthCarousel, currentPlaceCarousel, productList, onBackPlaceTinyCarousel, onNextPlaceTinyCarousel, width, carouselHighlightsQueries }) => {
    return (
        <>
            <h3 className="title-carousel-five-products">{title}</h3>
            <div 
                ref={carouselSlide}
                className="carousel-five-products-view-container" 
                style={{
                    width:`${carouselHighlightsQueries[width]* productList.length}%`,
                    left:`-${currentPlaceCarousel}px`
                }}>
                {productList.map(item =>{
                    return(
                        <CarouselHighlightsItem
                            key={item.id}
                            item={item}
                            widthCarousel={widthCarousel}
                            width={width}
                            carouselHighlightsQueries={carouselHighlightsQueries}
                        />
                    )
                })}
            </div>
            <div 
                className="button-optionleft-carousel-five" 
                onClick={onBackPlaceTinyCarousel}>
                <IoIosArrowBack size="3rem" color="black"/> 
            </div>
            <div 
                className="button-optionright-carousel-five" 
                onClick={onNextPlaceTinyCarousel}>
                <IoIosArrowForward size="3rem" color="black"/>
            </div>
        </>
    )
}

export default CarouselHighlightsList
