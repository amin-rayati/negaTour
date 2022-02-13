import { React, useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import blog1 from '../../../Assets/images/blog/blog_img1_md.jpg'
import blog2 from '../../../Assets/images/blog/blog_img2_md.jpg'
import blog3 from '../../../Assets/images/blog/blog_img3_md.jpg'
import blog4 from '../../../Assets/images/blog/blog_img4_md.jpg'
import { BsChevronLeft } from 'react-icons/bs'
import { AiFillCalendar } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
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
        <div id='blog'>
          <div class='item'>
            <div class='blog-item box-shadow' style={{ width: '95%' }}>
              <div class='blog-media'>
                <img src={blog1} alt='TravelRide' />
                <div class='blog-effect'></div>
                <a
                  href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                  title='Click For Read More'
                  class='read'
                >
                  &nbsp;
                </a>
              </div>
              <div
                class='blog-detail p-25 p-xs-15'
                style={{ direction: 'rtl' }}
              >
                <div class='post-info'>
                  <ul class='d-flex align-items-center '>
                    <li>
                      <div class='post-date'>
                        <span>
                          <AiFillCalendar />
                        </span>
                        13 اردیبهشت 1360
                      </div>
                    </li>
                    <li>
                      <div class='post-user'>
                        <a href='index-tour.html#'>
                          <span>
                            <FaUserAlt />
                          </span>
                          امین رعیتی
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class='blog-title'>
                  <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                    بهترین استراتژی برای جذب مشتری
                  </a>
                </div>
                <p class='dec mb-3'>
                  بسیاری از ترفند های بازاریابی وجود دارند که به ما اموزش میدهند
                  که چگونه مشتری جذب کنیم
                </p>
                <a
                  class='read-more'
                  href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                >
                  بیشتر <BsChevronLeft />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id='blog'>
          <div class='item'>
            <div class='blog-item box-shadow' style={{ width: '95%' }}>
              <div class='blog-media'>
                <img src={blog2} alt='TravelRide' />
                <div class='blog-effect'></div>
                <a
                  href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                  title='Click For Read More'
                  class='read'
                >
                  &nbsp;
                </a>
              </div>
              <div
                class='blog-detail p-25 p-xs-15'
                style={{ direction: 'rtl' }}
              >
                <div class='post-info'>
                  <ul class='d-flex align-items-center '>
                    <li>
                      <div class='post-date'>
                        <span>
                          <AiFillCalendar />
                        </span>
                        13 اردیبهشت 1360
                      </div>
                    </li>
                    <li>
                      <div class='post-user'>
                        <a href='index-tour.html#'>
                          <span>
                            <FaUserAlt />
                          </span>
                          امین رعیتی
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class='blog-title'>
                  <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                    بهترین استراتژی برای جذب مشتری
                  </a>
                </div>
                <p class='dec mb-3'>
                  بسیاری از ترفند های بازاریابی وجود دارند که به ما اموزش میدهند
                  که چگونه مشتری جذب کنیم
                </p>
                <a
                  class='read-more'
                  href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                >
                  بیشتر <BsChevronLeft />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id='blog'>
          <div class='item'>
            <div class='blog-item box-shadow' style={{ width: '95%' }}>
              <div class='blog-media'>
                <img src={blog3} alt='TravelRide' />
                <div class='blog-effect'></div>
                <a
                  href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                  title='Click For Read More'
                  class='read'
                >
                  &nbsp;
                </a>
              </div>
              <div
                class='blog-detail p-25 p-xs-15'
                style={{ direction: 'rtl' }}
              >
                <div class='post-info'>
                  <ul class='d-flex align-items-center '>
                    <li>
                      <div class='post-date'>
                        <span>
                          <AiFillCalendar />
                        </span>
                        13 اردیبهشت 1360
                      </div>
                    </li>
                    <li>
                      <div class='post-user'>
                        <a href='index-tour.html#'>
                          <span>
                            <FaUserAlt />
                          </span>
                          امین رعیتی
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class='blog-title'>
                  <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                    بهترین استراتژی برای جذب مشتری
                  </a>
                </div>
                <p class='dec mb-3'>
                  بسیاری از ترفند های بازاریابی وجود دارند که به ما اموزش میدهند
                  که چگونه مشتری جذب کنیم
                </p>
                <a
                  class='read-more'
                  href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                >
                  بیشتر <BsChevronLeft />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id='blog'>
          <div class='item'>
            <div class='blog-item box-shadow' style={{ width: '95%' }}>
              <div class='blog-media'>
                <img src={blog4} alt='TravelRide' />
                <div class='blog-effect'></div>
                <a
                  href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                  title='Click For Read More'
                  class='read'
                >
                  &nbsp;
                </a>
              </div>
              <div
                class='blog-detail p-25 p-xs-15'
                style={{ direction: 'rtl' }}
              >
                <div class='post-info'>
                  <ul class='d-flex align-items-center '>
                    <li>
                      <div class='post-date'>
                        <span>
                          <AiFillCalendar />
                        </span>
                        13 اردیبهشت 1360
                      </div>
                    </li>
                    <li>
                      <div class='post-user'>
                        <a href='index-tour.html#'>
                          <span>
                            <FaUserAlt />
                          </span>
                          امین رعیتی
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class='blog-title'>
                  <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                    بهترین استراتژی برای جذب مشتری
                  </a>
                </div>
                <p class='dec mb-3'>
                  بسیاری از ترفند های بازاریابی وجود دارند که به ما اموزش میدهند
                  که چگونه مشتری جذب کنیم
                </p>
                <a
                  class='read-more'
                  href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                >
                  بیشتر <BsChevronLeft />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
