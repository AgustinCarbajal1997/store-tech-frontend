import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import OptionsItem from './OptionsItem';
const OptionsList = ({ carouselSlide, currentPlaceCarousel, listOptions, onBackPlaceTinyCarousel, onNextPlaceTinyCarousel, optionsQueries, width  }) => {
    return (
        <>
          <ul 
                ref={carouselSlide}
                className="section-options-list" 
                style={{
                    width:`${optionsQueries[width] * listOptions.length}px`,
                    left:`-${currentPlaceCarousel}px`
                }}>
            {listOptions.map((item,index)=>{
                return(
                    <OptionsItem 
                        key={index}
                        index={index}
                        item={item}
                        optionsQueries={optionsQueries}
                        width={width}
                    />
                )
            })}
            </ul>  
            <div 
                className="button-optionleft" 
                onClick={onBackPlaceTinyCarousel}>
                <IoIosArrowBack size="3rem" color="black"/> 
            </div>
            <div 
                className="button-optionright" 
                onClick={onNextPlaceTinyCarousel}>
                <IoIosArrowForward size="3rem" color="black"/>
            </div>
        </>
    )
}

export default OptionsList
