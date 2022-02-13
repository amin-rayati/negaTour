import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import serv1 from '../../../Assets/images/service-img1.jpg'
import servIcon1 from '../../../Assets/images/services_icon_1.png'

import serv2 from '../../../Assets/images/service-img2.jpg'
import servIcon2 from '../../../Assets/images/services_icon_2.png'

import serv3 from '../../../Assets/images/service-img3.jpg'
import servIcon3 from '../../../Assets/images/services_icon_3.png'

import serv4 from '../../../Assets/images/service-img4.jpg'
import servIcon4 from '../../../Assets/images/services_icon_4.png'

import serv5 from '../../../Assets/images/service-img5.jpg'
import servIcon5 from '../../../Assets/images/services_icon_5.png'

import serv6 from '../../../Assets/images/service-img6.jpg'
import servIcon6 from '../../../Assets/images/services_icon_6.png'

export default function Carousel2() {
  const slickDefaults = {
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    dots: true,
    rtl: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          <div class='services-box'>
            <div class='services-inner-box'>
              <div class='services-img'>
                <img src={serv1} alt='TravelRide' className='m-auto' />
                <div class='services-icon icon1'>
                  <img alt='TravelRide' className='alignImg' src={servIcon1} />
                </div>
              </div>
              <div class='services-details'>
                <h3>Amazing Tour</h3>
                <p class='m-0'>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as using 'Content here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item'>
          <div class='services-box'>
            <div class='services-inner-box'>
              <div class='services-img'>
                <img src={serv2} alt='TravelRide' />
                <div class='services-icon icon2'>
                  <img alt='TravelRide' className='alignImg' src={servIcon2} />
                </div>
              </div>
              <div class='services-details'>
                <h3>Private Guide</h3>
                <p class='m-0'>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as using 'Content here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item'>
          <div class='services-box'>
            <div class='services-inner-box'>
              <div class='services-img'>
                <img src={serv3} alt='TravelRide' />
                <div class='services-icon icon3'>
                  <img alt='TravelRide' className='alignImg' src={servIcon3} />
                </div>
              </div>
              <div class='services-details'>
                <h3>Location Manager</h3>
                <p class='m-0'>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as using 'Content here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item'>
          <div class='services-box'>
            <div class='services-inner-box'>
              <div class='services-img'>
                <img src={serv4} alt='TravelRide' />
                <div class='services-icon icon4'>
                  <img alt='TravelRide' className='alignImg' src={servIcon4} />
                </div>
              </div>
              <div class='services-details'>
                <h3>Support Cases</h3>
                <p class='m-0'>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as using 'Content here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item'>
          <div class='services-box'>
            <div class='services-inner-box'>
              <div class='services-img'>
                <img src={serv5} alt='TravelRide' />
                <div class='services-icon icon5'>
                  <img alt='TravelRide' className='alignImg' src={servIcon5} />
                </div>
              </div>
              <div class='services-details'>
                <h3>Happy Clients</h3>
                <p class='m-0'>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as using 'Content here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item'>
          <div class='services-box'>
            <div class='services-inner-box'>
              <div class='services-img'>
                <img src={serv6} alt='TravelRide' />
                <div class='services-icon icon6'>
                  <img alt='TravelRide' className='alignImg' src={servIcon6} />
                </div>
              </div>
              <div class='services-details'>
                <h3>Best Travel Agent</h3>
                <p class='m-0'>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as using 'Content here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
