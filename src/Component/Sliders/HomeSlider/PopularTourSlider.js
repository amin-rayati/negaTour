import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import pac1 from '../../../Assets/images/packages_img_1.jpg'
import pac2 from '../../../Assets/images/packages_img_2.jpg'
import pac3 from '../../../Assets/images/packages_img_3.jpg'
import pac4 from '../../../Assets/images/packages_img_4.jpg'
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Carousel2() {
  const slickDefaults = {
    autoplay: true,
    autoplaySpeed: 3000,
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div id='packages-part' class='packages-part owl-carousel '>
        <div class='item'>
          <div
            class='card packages-box box-shadow overflow-hidden'
            style={{ width: '95%' }}
          >
            <div class='package-img'>
              <a href='tour_detail.html'>
                <img alt='TravelRide' src={pac1} />
                <div class='effect'></div>
              </a>
            </div>
            <div class='card-body p-25 p-xs-15' style={{ direction: 'rtl' }}>
              <div class='packages-details'>
                <h4>
                  <a href='tour_detail.html' class='title'>
                    کرج به لواسان
                  </a>
                </h4>
                <div class='rating-summary-block'>
                  <span class='label-review'>10 بازدید</span>
                </div>
                <div
                  class='d-flex align-items-center mt-2 mt-sm-4'
                  style={{ justifyContent: 'space-between' }}
                >
                  <div class='tour-info'>
                    <ul>
                      <li>
                        <div class='days'>
                          <span>
                            <FaClock size={20} />
                          </span>{' '}
                          4 روز و 3 شب
                        </div>
                      </li>
                      <li>
                        <div class='places'>
                          <span>
                            <FaMapMarkerAlt size={20} />
                          </span>{' '}
                          لواسان - 4 مکان
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class='price-box ml-auto mt-0  pl-2 pl-lg-5 pl-md-3 pl-sm-5 text-center'>
                    <div class='price-text mb-1'>قیمت</div>
                    <div class='price mb-0'>1500000</div>
                  </div>
                </div>
                <div
                  class='packages-btn mt-30 mt-xs-20 d-flex'
                  style={{ justifyContent: 'space-around' }}
                >
                  <a class='btn btn-color mr-3' href='tour_booking.html'>
                    رزرو
                  </a>
                  <a class='btn btn-light' href='tour_detail.html'>
                    جزئیات
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='packages-part' class='packages-part owl-carousel '>
        <div class='item'>
          <div
            class='card packages-box box-shadow overflow-hidden'
            style={{ width: '95%' }}
          >
            <div class='package-img'>
              <a href='tour_detail.html'>
                <img alt='TravelRide' src={pac2} />
                <div class='effect'></div>
              </a>
            </div>
            <div class='card-body p-25 p-xs-15' style={{ direction: 'rtl' }}>
              <div class='packages-details'>
                <h4>
                  <a href='tour_detail.html' class='title'>
                    کرج به لواسان
                  </a>
                </h4>
                <div class='rating-summary-block'>
                  <span class='label-review'>10 بازدید</span>
                </div>
                <div
                  class='d-flex align-items-center mt-2 mt-sm-4'
                  style={{ justifyContent: 'space-between' }}
                >
                  <div class='tour-info'>
                    <ul>
                      <li>
                        <div class='days'>
                          <span>
                            <FaClock size={20} />
                          </span>{' '}
                          4 روز و 3 شب
                        </div>
                      </li>
                      <li>
                        <div class='places'>
                          <span>
                            <FaMapMarkerAlt size={20} />
                          </span>{' '}
                          لواسان - 4 مکان
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class='price-box ml-auto mt-0  pl-2 pl-lg-5 pl-md-3 pl-sm-5 text-center'>
                    <div class='price-text mb-1'>قیمت</div>
                    <div class='price mb-0'>1500000</div>
                  </div>
                </div>
                <div
                  class='packages-btn mt-30 mt-xs-20 d-flex'
                  style={{ justifyContent: 'space-around' }}
                >
                  <a class='btn btn-color mr-3' href='tour_booking.html'>
                    رزرو
                  </a>
                  <a class='btn btn-light' href='tour_detail.html'>
                    جزئیات
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='packages-part' class='packages-part owl-carousel '>
        <div class='item'>
          <div
            class='card packages-box box-shadow overflow-hidden'
            style={{ width: '95%' }}
          >
            <div class='package-img'>
              <a href='tour_detail.html'>
                <img alt='TravelRide' src={pac3} />
                <div class='effect'></div>
              </a>
            </div>
            <div class='card-body p-25 p-xs-15' style={{ direction: 'rtl' }}>
              <div class='packages-details'>
                <h4>
                  <a href='tour_detail.html' class='title'>
                    کرج به لواسان
                  </a>
                </h4>
                <div class='rating-summary-block'>
                  <span class='label-review'>10 بازدید</span>
                </div>
                <div
                  class='d-flex align-items-center mt-2 mt-sm-4'
                  style={{ justifyContent: 'space-between' }}
                >
                  <div class='tour-info'>
                    <ul>
                      <li>
                        <div class='days'>
                          <span>
                            <FaClock size={20} />
                          </span>{' '}
                          4 روز و 3 شب
                        </div>
                      </li>
                      <li>
                        <div class='places'>
                          <span>
                            <FaMapMarkerAlt size={20} />
                          </span>{' '}
                          لواسان - 4 مکان
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class='price-box ml-auto mt-0  pl-2 pl-lg-5 pl-md-3 pl-sm-5 text-center'>
                    <div class='price-text mb-1'>قیمت</div>
                    <div class='price mb-0'>1500000</div>
                  </div>
                </div>
                <div
                  class='packages-btn mt-30 mt-xs-20 d-flex'
                  style={{ justifyContent: 'space-around' }}
                >
                  <a class='btn btn-color mr-3' href='tour_booking.html'>
                    رزرو
                  </a>
                  <a class='btn btn-light' href='tour_detail.html'>
                    جزئیات
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='packages-part' class='packages-part owl-carousel '>
        <div class='item'>
          <div
            class='card packages-box box-shadow overflow-hidden'
            style={{ width: '95%' }}
          >
            <div class='package-img'>
              <a href='tour_detail.html'>
                <img alt='TravelRide' src={pac4} />
                <div class='effect'></div>
              </a>
            </div>
            <div class='card-body p-25 p-xs-15' style={{ direction: 'rtl' }}>
              <div class='packages-details'>
                <h4>
                  <a href='tour_detail.html' class='title'>
                    کرج به لواسان
                  </a>
                </h4>
                <div class='rating-summary-block'>
                  <span class='label-review'>10 بازدید</span>
                </div>
                <div
                  class='d-flex align-items-center mt-2 mt-sm-4'
                  style={{ justifyContent: 'space-between' }}
                >
                  <div class='tour-info'>
                    <ul>
                      <li>
                        <div class='days'>
                          <span>
                            <FaClock size={20} />
                          </span>{' '}
                          4 روز و 3 شب
                        </div>
                      </li>
                      <li>
                        <div class='places'>
                          <span>
                            <FaMapMarkerAlt size={20} />
                          </span>{' '}
                          لواسان - 4 مکان
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class='price-box ml-auto mt-0  pl-2 pl-lg-5 pl-md-3 pl-sm-5 text-center'>
                    <div class='price-text mb-1'>قیمت</div>
                    <div class='price mb-0'>1500000</div>
                  </div>
                </div>
                <div
                  class='packages-btn mt-30 mt-xs-20 d-flex'
                  style={{ justifyContent: 'space-around' }}
                >
                  <a class='btn btn-color mr-3' href='tour_booking.html'>
                    رزرو
                  </a>
                  <a class='btn btn-light' href='tour_detail.html'>
                    جزئیات
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
