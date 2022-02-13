import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import cat1 from '../../../Assets/images/cat_img_1.jpg'
import cat2 from '../../../Assets/images/cat_img_2.jpg'
import cat3 from '../../../Assets/images/cat_img_3.jpg'
import cat4 from '../../../Assets/images/cat_img_4.jpg'

export default function Carousel2() {
  const slickDefaults = {
    slidesToShow: 4,
    slidesToScroll: 4,
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
        <div class='categorie-part owl-carousel '>
          <div class='item'>
            <div class='categorie-box card radius-5px' style={{ width: '95%' }}>
              <div class='card-body p-0'>
                <div class='cat-item text-center'>
                  <div class='cat-img'>
                    <img
                      src={cat1}
                      alt='TravelRide'
                      class=''
                      style={{ width: '-webkit-fill-available' }}
                    />
                    <div class='effect'></div>
                  </div>
                  <div class='cat-desc'>
                    <h3>تور جاده</h3>
                    <p>بهترین تور جاده ای ایران</p>
                    <div class='places'>
                      <span class='icon'>
                        <FaMapMarkerAlt size={15} />
                      </span>{' '}
                      12 مکان
                    </div>
                    <a href='tour_grid.html' class='btn btn-color'>
                      جزئیات
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='categorie-part owl-carousel '>
          <div class='item'>
            <div class='categorie-box card radius-5px' style={{ width: '95%' }}>
              <div class='card-body p-0'>
                <div class='cat-item text-center'>
                  <div class='cat-img'>
                    <img
                      src={cat4}
                      alt='TravelRide'
                      class=''
                      style={{ width: '-webkit-fill-available' }}
                    />
                    <div class='effect'></div>
                  </div>
                  <div class='cat-desc'>
                    <h3>تور جاده</h3>
                    <p>بهترین تور جاده ای ایران</p>
                    <div class='places'>
                      <span class='icon'>
                        <FaMapMarkerAlt size={15} />
                      </span>{' '}
                      12 مکان
                    </div>
                    <a href='tour_grid.html' class='btn btn-color'>
                      جزئیات
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='categorie-part owl-carousel '>
          <div class='item'>
            <div class='categorie-box card radius-5px' style={{ width: '95%' }}>
              <div class='card-body p-0'>
                <div class='cat-item text-center'>
                  <div class='cat-img'>
                    <img
                      src={cat2}
                      alt='TravelRide'
                      class=''
                      style={{ width: '-webkit-fill-available' }}
                    />
                    <div class='effect'></div>
                  </div>
                  <div class='cat-desc'>
                    <h3>تور جاده</h3>
                    <p>بهترین تور جاده ای ایران</p>
                    <div class='places'>
                      <span class='icon'>
                        <FaMapMarkerAlt size={15} />
                      </span>{' '}
                      12 مکان
                    </div>
                    <a href='tour_grid.html' class='btn btn-color'>
                      جزئیات
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='categorie-part owl-carousel '>
          <div class='item'>
            <div class='categorie-box card radius-5px' style={{ width: '95%' }}>
              <div class='card-body p-0'>
                <div class='cat-item text-center'>
                  <div class='cat-img'>
                    <img
                      src={cat3}
                      alt='TravelRide'
                      class=''
                      style={{ width: '-webkit-fill-available' }}
                    />
                    <div class='effect'></div>
                  </div>
                  <div class='cat-desc'>
                    <h3>تور جاده</h3>
                    <p>بهترین تور جاده ای ایران</p>
                    <div class='places'>
                      <span class='icon'>
                        <FaMapMarkerAlt size={15} />
                      </span>{' '}
                      12 مکان
                    </div>
                    <a href='tour_grid.html' class='btn btn-color'>
                      جزئیات
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='categorie-part owl-carousel '>
          <div class='item'>
            <div class='categorie-box card radius-5px' style={{ width: '95%' }}>
              <div class='card-body p-0'>
                <div class='cat-item text-center'>
                  <div class='cat-img'>
                    <img
                      src={cat4}
                      alt='TravelRide'
                      class=''
                      style={{ width: '-webkit-fill-available' }}
                    />
                    <div class='effect'></div>
                  </div>
                  <div class='cat-desc'>
                    <h3>تور جاده</h3>
                    <p>بهترین تور جاده ای ایران</p>
                    <div class='places'>
                      <span class='icon'>
                        <FaMapMarkerAlt size={15} />
                      </span>{' '}
                      12 مکان
                    </div>
                    <a href='tour_grid.html' class='btn btn-color'>
                      جزئیات
                    </a>
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
