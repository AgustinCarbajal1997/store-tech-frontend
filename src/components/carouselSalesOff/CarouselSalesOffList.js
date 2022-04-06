import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import CarouselSalesOffItem from './CarouselSalesOffItem';
const CarouselSalesOffList = ({carouselSlide,currentPlaceCarousel,onBackPlaceTinyCarousel,onNextPlaceTinyCarousel,widthCarousel,salesOffQueries,width,DataSaleOff}) => {
    return (
        <>
            <div className="sales-off-section__title"><h3>OFERTAS POR TIEMPO LIMITADO</h3></div>
            <div
                ref={carouselSlide} 
                className="sales-off-section__products" 
                style={{
                    width:`${salesOffQueries[width]* DataSaleOff.length}%`,
                    left:`-${currentPlaceCarousel}px`
                }}>
                {DataSaleOff.map((item)=>{
                    return (
                        <CarouselSalesOffItem
                            key={item.id}
                            item={item}
                            widthCarousel={widthCarousel}
                            salesOffQueries={salesOffQueries}
                            width={width}
                        />
                    )
                })}
            </div>
            
            <div 
                className="button-saleleft" 
                onClick={onBackPlaceTinyCarousel}>
                <IoIosArrowBack size="3rem" color="black"/> 
            </div>
            <div 
                className="button-saleright" 
                onClick={onNextPlaceTinyCarousel}>
                <IoIosArrowForward size="3rem" color="black"/>
            </div>
        </>
    )
}

export default CarouselSalesOffList
