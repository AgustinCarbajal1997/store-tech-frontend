import image3 from "../../assets/banners/banner3-big.webp";
import image33 from "../../assets/banners/banner3-small.webp";
import image4 from "../../assets/banners/banner4-big.webp";
import image44 from "../../assets/banners/banner4-small.webp";
import imagetvb from "../../assets/banners/bannertv-big.webp";
import imagetv from "../../assets/banners/bannertv-small.webp";

const CarouselList = [
  {
    bigImage: image3,
    smallImage: image33,
    href:"/categoria/celulares?page=1&limit=6&pagination=true"
  },
  {
    bigImage: image4,
    smallImage: image44,
    href:"/categoria/aires?page=1&limit=6&pagination=true"
  },
  {
    bigImage: imagetvb,
    smallImage: imagetv,
    href:"/categoria/televisores?page=1&limit=6&pagination=true"
  },
];
export default CarouselList;
