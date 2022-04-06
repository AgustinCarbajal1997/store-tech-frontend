import React,{ useState } from 'react'
import BannerList from './BannerList';
const BannerContainer = ({ carouselList }) => {
    const [listIndex, setListIndex] = useState(0);
    
    const prev = () =>{
        listIndex === 0 ? setListIndex(carouselList.length - 1) : setListIndex(listIndex - 1)
    }
    const next = () => {
        listIndex < carouselList.length - 1 ? setListIndex(listIndex + 1) : setListIndex(0)
        
    }
    return (
        <section className="slider">
            <BannerList
                carouselList={carouselList}
                listIndex={listIndex}
                setListIndex={setListIndex}
                prev={prev}
                next={next}
            />
        </section>
    )
}

export default BannerContainer
