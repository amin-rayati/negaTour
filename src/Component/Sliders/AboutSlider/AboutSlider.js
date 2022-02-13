import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import test1 from '../../../Assets/images/testimonial_img1.jpg'
import test2 from '../../../Assets/images/testimonial_img2.jpg'
import test3 from '../../../Assets/images/testimonial_img3.jpg'

import qoute1 from '../../../Assets/images/quote1.png'
import qoute2 from '../../../Assets/images/quote2.png'

export default function Carousel2() {
  const slickDefaults = {
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    rtl: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
        },
      },
    ],
  }

  return (
    <Slider {...slickDefaults}>
      <div>
        <div class='item client-detail'>
          <div class='client-img left-side float-none-lg'>
            <img alt='TravelRide' src={test1} />
            <h4 class='sub-title client-title'>Richard Pam</h4>
            <div class='designation'>Canada</div>
          </div>
          <div class='quote right-side float-none-lg'>
            <div class='quote1-img align-left' style={{ direction: 'rtl' }}>
              <img src={qoute1} alt='TravelRide' />
            </div>
            <p>
              It is a long established fact reader will be distracted readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters
            </p>
            <div class='quote2-img align-right'>
              <img src={qoute2} alt='TravelRide' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item client-detail'>
          <div class='client-img left-side float-none-lg'>
            <img alt='TravelRide' src={test2} />
            <h4 class='sub-title client-title'>Richard Pam</h4>
            <div class='designation'>Canada</div>
          </div>
          <div class='quote right-side float-none-lg'>
            <div class='quote1-img align-left' style={{ direction: 'rtl' }}>
              <img src={qoute1} alt='TravelRide' />
            </div>
            <p>
              It is a long established fact reader will be distracted readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters
            </p>
            <div class='quote2-img align-right'>
              <img src={qoute2} alt='TravelRide' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item client-detail'>
          <div class='client-img left-side float-none-lg'>
            <img alt='TravelRide' src={test3} />
            <h4 class='sub-title client-title'>Richard Pam</h4>
            <div class='designation'>Canada</div>
          </div>
          <div class='quote right-side float-none-lg'>
            <div class='quote1-img align-left' style={{ direction: 'rtl' }}>
              <img src={qoute1} alt='TravelRide' />
            </div>
            <p>
              It is a long established fact reader will be distracted readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters
            </p>
            <div class='quote2-img align-right'>
              <img src={qoute2} alt='TravelRide' />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
