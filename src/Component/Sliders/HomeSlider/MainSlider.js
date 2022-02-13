import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import banner1 from '../../../Assets/images/banner1.jpg'

export default function Carousel2() {
  const slickDefaults = {
    autoplay: true,
    autoplaySpeed: 3000,
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
        <div class='item'>
          <div class='banner-1'>
            <img
              src={banner1}
              alt='TravelRide'
              style={{ position: 'relative', top: '-10px', right: '-10px' }}
            />
            <div class='banner-detail text-center'>
              <div class='container'>
                <div class='row align-items-center'>
                  <div class='col-12'>
                    <div class='banner-detail-inner slider-animation animated-1'>
                      <div class='slogan'>بهترین تجربه ها</div>
                      <h1 class='banner-title'>بهترین سفر خود را تجربه کنید</h1>
                      <p class=''>
                        با نگاتور بهترین تور های گردشگری ایران را بروید
                      </p>
                      <a
                        class='btn btn-color mt-2 mt-sm-0'
                        href='index-tour.html#'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 384 512'
                        >
                          <path
                            d='M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.7-29.9 13.7-39.4 0h0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z'
                            fill='#fff'
                          />
                        </svg>
                        تور های ما را ببینید
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
