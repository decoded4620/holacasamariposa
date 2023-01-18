// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import styles from "./carousel.module.scss";
import {
  KeyboardOptions,
  MousewheelOptions,
  NavigationOptions,
  PaginationOptions,
} from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// configure Swiper to use modules

export interface CarouselImage {
  src: string;
  width: number;
  height: number;
  title: string;
}
interface CarouselProps {
  images: CarouselImage[];
  navigation?: NavigationOptions | boolean;
  mouseWheel?: MousewheelOptions | boolean;
  pagination?: PaginationOptions | boolean;
  keyboard?: KeyboardOptions | boolean;
  onLoad?: () => void;
}

export default function Carousel(props: CarouselProps) {
  let slidesLoaded = 0;

  return (
    <Box className={styles.gallery}>
      <Swiper
        modules={[Navigation, Pagination]}
        cssMode={true}
        loop={true}
        navigation={props.navigation}
        mousewheel={props.mouseWheel}
        keyboard={props.keyboard}
        pagination={props.pagination}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className={styles.swiper}
      >
        {props.images.map((image, idx) => (
          <SwiperSlide
            key={image.src}
            onLoad={() => {
              slidesLoaded++;
              if (slidesLoaded === props.images.length && props.onLoad) {
                props.onLoad();
              }
            }}
          >
            {/* <p>{image.title}</p> */}
            <img src={image.src} alt=""/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
