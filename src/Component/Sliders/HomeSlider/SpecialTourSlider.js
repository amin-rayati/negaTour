import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import pac7 from '../../../Assets/images/packages_img_7.jpg'
import pac8 from '../../../Assets/images/packages_img_8.jpg'
import pac9 from '../../../Assets/images/packages_img_9.jpg'
import pac10 from '../../../Assets/images/packages_img_10.jpg'
import ad1 from '../../../Assets/images/advisor_1.jpg'
import ad2 from '../../../Assets/images/advisor_2.jpg'
import ad3 from '../../../Assets/images/advisor_3.jpg'
import { BsCurrencyDollar } from 'react-icons/bs'
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
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
        <div
          id='special-tours'
          class='special-tours packages-part owl-carousel col-12'
        >
          <div class='item'>
            <div
              class='card packages-box box-shadow overflow-hidden'
              style={{ width: '95%' }}
            >
              <div class='package-img'>
                <a href='tour_detail.html'>
                  <img alt='TravelRide' src={pac10} />
                  <div class='effect'></div>
                </a>
              </div>
              <div class='packages-details' style={{ direction: 'rtl' }}>
                <div class='card-body p-25 p-xs-15'>
                  <h4>
                    <a href='tour_detail.html' class='title'>
                      لندن
                    </a>
                  </h4>
                  <div class='tour-info'>
                    <ul class='d-lg-flex align-items-center justify-content-between'>
                      <li>
                        <div class='places'>
                          <span>
                            <FaMapMarkerAlt size={15} />
                          </span>
                          لندن-4 مکان
                        </div>
                      </li>
                      <li>
                        <div class='contact-no'>
                          <span>
                            <FaPhone size={15} />
                          </span>
                          09362625488
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class='rating-summary-block mt-10'>
                    {/* <div class='rating-result' title='70%'>
                      <span style={{ width: '66%' }}></span>
                    </div> */}
                    <span class='label-review'>10 بازدید</span>
                  </div>
                  <p class='dec'>مکانی بسیار زیبا در شهر لندن</p>
                </div>
                <hr />
                <div class='card-body plr-25 plr-xs-15'>
                  <div class='tour-info price-box ptb-10'>
                    <ul class='d-lg-flex align-items-center justify-content-between'>
                      <li>
                        <div class='price'>
                          <span>
                            <BsCurrencyDollar size={15} />
                          </span>
                          750 - 980
                        </div>
                      </li>
                      <li>
                        <div class='days'>
                          <span>
                            <FaClock size={15} />
                          </span>
                          4 روز و 3 شب
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div class='card-body  p-25 p-xs-15'>
                  <div class='d-flex align-items-center justify-content-between'>
                    <div class='advisor-detail d-flex align-items-center'>
                      <img
                        src={ad1}
                        class='avatar rounded-circle mr-2'
                        alt='TravelRide'
                      />
                      <div class='advisor-info' style={{ marginRight: '15px' }}>
                        <div class='user-name'>امین</div>
                        <div class='post-info'>تورگاید</div>
                      </div>
                    </div>
                    <div class='packages-btn'>
                      <a class='btn btn-color' href='tour_detail.html'>
                        جزئیات
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          id='special-tours'
          class='special-tours packages-part owl-carousel col-12'
        >
          <div class='item'>
            <div
              class='card packages-box box-shadow overflow-hidden'
              style={{ width: '95%' }}
            >
              <div class='package-img'>
                <a href='tour_detail.html'>
                  <img alt='TravelRide' src={pac7} />
                  <div class='effect'></div>
                </a>
              </div>
              <div class='packages-details' style={{ direction: 'rtl' }}>
                <div class='card-body p-25 p-xs-15'>
                  <h4>
                    <a href='tour_detail.html' class='title'>
                      لندن
                    </a>
                  </h4>
                  <div class='tour-info'>
                    <ul class='d-lg-flex align-items-center justify-content-between'>
                      <li>
                        <div class='places'>
                          <span>
                            <FaMapMarkerAlt size={15} />
                          </span>
                          لندن-4 مکان
                        </div>
                      </li>
                      <li>
                        <div class='contact-no'>
                          <span>
                            <FaPhone size={15} />
                          </span>
                          09362625488
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class='rating-summary-block mt-10'>
                    {/* <div class='rating-result' title='70%'>
                      <span style={{ width: '66%' }}></span>
                    </div> */}
                    <span class='label-review'>10 بازدید</span>
                  </div>
                  <p class='dec'>مکانی بسیار زیبا در شهر لندن</p>
                </div>
                <hr />
                <div class='card-body plr-25 plr-xs-15'>
                  <div class='tour-info price-box ptb-10'>
                    <ul class='d-lg-flex align-items-center justify-content-between'>
                      <li>
                        <div class='price'>
                          <span>
                            <BsCurrencyDollar size={15} />
                          </span>
                          750 - 980
                        </div>
                      </li>
                      <li>
                        <div class='days'>
                          <span>
                            <FaClock size={15} />
                          </span>
                          4 روز و 3 شب
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div class='card-body  p-25 p-xs-15'>
                  <div class='d-flex align-items-center justify-content-between'>
                    <div class='advisor-detail d-flex align-items-center'>
                      <img
                        src={ad2}
                        class='avatar rounded-circle mr-2'
                        alt='TravelRide'
                      />
                      <div class='advisor-info' style={{ marginRight: '15px' }}>
                        <div class='user-name'>امین</div>
                        <div class='post-info'>تورگاید</div>
                      </div>
                    </div>
                    <div class='packages-btn'>
                      <a class='btn btn-color' href='tour_detail.html'>
                        جزئیات
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          id='special-tours'
          class='special-tours packages-part owl-carousel col-12'
        >
          <div class='item'>
            <div
              class='card packages-box box-shadow overflow-hidden'
              style={{ width: '95%' }}
            >
              <div class='package-img'>
                <a href='tour_detail.html'>
                  <img alt='TravelRide' src={pac8} />
                  <div class='effect'></div>
                </a>
              </div>
              <div class='packages-details' style={{ direction: 'rtl' }}>
                <div class='card-body p-25 p-xs-15'>
                  <h4>
                    <a href='tour_detail.html' class='title'>
                      لندن
                    </a>
                  </h4>
                  <div class='tour-info'>
                    <ul class='d-lg-flex align-items-center justify-content-between'>
                      <li>
                        <div class='places'>
                          <span>
                            <FaMapMarkerAlt size={15} />
                          </span>
                          لندن-4 مکان
                        </div>
                      </li>
                      <li>
                        <div class='contact-no'>
                          <span>
                            <FaPhone size={15} />
                          </span>
                          09362625488
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class='rating-summary-block mt-10'>
                    {/* <div class='rating-result' title='70%'>
                      <span style={{ width: '66%' }}></span>
                    </div> */}
                    <span class='label-review'>10 بازدید</span>
                  </div>
                  <p class='dec'>مکانی بسیار زیبا در شهر لندن</p>
                </div>
                <hr />
                <div class='card-body plr-25 plr-xs-15'>
                  <div class='tour-info price-box ptb-10'>
                    <ul class='d-lg-flex align-items-center justify-content-between'>
                      <li>
                        <div class='price'>
                          <span>
                            <BsCurrencyDollar size={15} />
                          </span>
                          750 - 980
                        </div>
                      </li>
                      <li>
                        <div class='days'>
                          <span>
                            <FaClock size={15} />
                          </span>
                          4 روز و 3 شب
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div class='card-body  p-25 p-xs-15'>
                  <div class='d-flex align-items-center justify-content-between'>
                    <div class='advisor-detail d-flex align-items-center'>
                      <img
                        src={ad3}
                        class='avatar rounded-circle mr-2'
                        alt='TravelRide'
                      />
                      <div class='advisor-info' style={{ marginRight: '15px' }}>
                        <div class='user-name'>امین</div>
                        <div class='post-info'>تورگاید</div>
                      </div>
                    </div>
                    <div class='packages-btn'>
                      <a class='btn btn-color' href='tour_detail.html'>
                        جزئیات
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          id='special-tours'
          class='special-tours packages-part owl-carousel col-12'
        >
          <div class='item'>
            <div
              class='card packages-box box-shadow overflow-hidden'
              style={{ width: '95%' }}
            >
              <div class='package-img'>
                <a href='tour_detail.html'>
                  <img alt='TravelRide' src={pac9} />
                  <div class='effect'></div>
                </a>
              </div>
              <div class='packages-details' style={{ direction: 'rtl' }}>
                <div class='card-body p-25 p-xs-15'>
                  <h4>
                    <a href='tour_detail.html' class='title'>
                      لندن
                    </a>
                  </h4>
                  <div class='tour-info'>
                    <ul class='d-lg-flex align-items-center justify-content-between'>
                      <li>
                        <div class='places'>
                          <span>
                            <FaMapMarkerAlt size={15} />
                          </span>
                          لندن-4 مکان
                        </div>
                      </li>
                      <li>
                        <div class='contact-no'>
                          <span>
                            <FaPhone size={15} />
                          </span>
                          09362625488
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class='rating-summary-block mt-10'>
                    {/* <div class='rating-result' title='70%'>
                      <span style={{ width: '66%' }}></span>
                    </div> */}
                    <span class='label-review'>10 بازدید</span>
                  </div>
                  <p class='dec'>مکانی بسیار زیبا در شهر لندن</p>
                </div>
                <hr />
                <div class='card-body plr-25 plr-xs-15'>
                  <div class='tour-info price-box ptb-10'>
                    <ul class='d-lg-flex align-items-center justify-content-between'>
                      <li>
                        <div class='price'>
                          <span>
                            <BsCurrencyDollar size={15} />
                          </span>
                          750 - 980
                        </div>
                      </li>
                      <li>
                        <div class='days'>
                          <span>
                            <FaClock size={15} />
                          </span>
                          4 روز و 3 شب
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div class='card-body  p-25 p-xs-15'>
                  <div class='d-flex align-items-center justify-content-between'>
                    <div class='advisor-detail d-flex align-items-center'>
                      <img
                        src={ad1}
                        class='avatar rounded-circle mr-2'
                        alt='TravelRide'
                      />
                      <div class='advisor-info' style={{ marginRight: '15px' }}>
                        <div class='user-name'>امین</div>
                        <div class='post-info'>تورگاید</div>
                      </div>
                    </div>
                    <div class='packages-btn'>
                      <a class='btn btn-color' href='tour_detail.html'>
                        جزئیات
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
