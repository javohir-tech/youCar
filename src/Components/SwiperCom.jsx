// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//images
import bannerImg from '../assets/mainSectionBanner.png'

export default function SwiperCom() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={bannerImg} alt="" /></SwiperSlide>
                <SwiperSlide><img src={bannerImg} alt="" /></SwiperSlide>
                <SwiperSlide><img src={bannerImg} alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
}
