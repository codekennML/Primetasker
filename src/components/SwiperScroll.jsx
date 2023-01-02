// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import { Navigation } from 'swiper';
import {faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import QuestionCard from './QuestionCard';
import { useRef,useCallback} from 'react';
import Icon from '../utils/Icon';


const SwiperScroll = ({content, slide, gap}) => {
    // const sliderRef = useRef(null);

//   const handlePrev = useCallback(() => {
//     if (!sliderRef.current) return;
//     sliderRef.current.swiper.slidePrev();
//   }, []);

//   const handleNext = useCallback(() => {
//     if (!sliderRef.current) return;
//     sliderRef.current.swiper.slideNext();
//   }, []);


  return (

    <Swiper className='static'
    modules={[Navigation]}
                       spaceBetween={gap ? gap : 15}
                       slidesPerView={slide ? slide : 3}
                       navigation ={true}
                    //    onSlideChange={() => console.log('slide change')}
                    //    onSwiper={(swiper) => console.log(swiper)}
                       >
                
                       <SwiperSlide>{content}</SwiperSlide>
                       <SwiperSlide>{content}</SwiperSlide>
                       <SwiperSlide>{content}</SwiperSlide>
                       <SwiperSlide>{content}</SwiperSlide>
                       <SwiperSlide>{content}</SwiperSlide>
                       <SwiperSlide>{content}</SwiperSlide>
                     
    </Swiper>

  )
}

export default SwiperScroll