import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg';
import Avt2 from '../../assets/avatar2.jpg';
import Avt3 from '../../assets/avatar3.jpg';
import Avt4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Avt1,
    name: 'مشتری اول',
    review: 'بسیار زیاد از کار با ایشون لذت بردم'
  },
  {
    avatar: Avt2,
    name: 'مشتری دوم',
    review: 'بسیار زیاد از کار با ایشون لذت بردم'
  },
  {
    avatar: Avt3,
    name: 'مشتری سوم',
    review: 'بسیار زیاد از کار با ایشون لذت بردم'
  },
  {
    avatar: Avt4,
    name: 'مشتری چهارم',
    review: 'بسیار زیاد از کار با ایشون لذت بردم'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>رضایت مشتری </h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
 
      >{
        data.map(({avatar, name, review}, index)=>{ 
          return(
            <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt='Avatar One'/>
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials