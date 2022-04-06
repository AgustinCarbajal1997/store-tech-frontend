import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import BannerListItem from './BannerListItem';
const BannerList = ({ carouselList, listIndex, setListIndex, prev, next }) => {
  return (
    <>
      {carouselList.map((item, index) => (
        <BannerListItem
            item={item}
            index={index}
            listIndex={listIndex}
            key={index}
        />
      ))}

      <div onClick={prev} className="leftArrow">
        <IoIosArrowBack size="3rem" color="#f5f5f5" />
      </div>
      <div onClick={next} className="rightArrow">
        <IoIosArrowForward size="3rem" color="#f5f5f5" />
      </div>
      <div className="carousel-group-index">
        {carouselList.map((el, index) => {
          return (
            <div
              className={
                index === listIndex
                  ? "carousel-index isActiveCarouselIndex"
                  : "carousel-index"
              }
              key={`key${index}`}
              onClick={() => setListIndex(index)}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default BannerList;
