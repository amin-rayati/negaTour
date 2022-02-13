import { React, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrump from '../../Component/BreadCrumb/BreadCrumb'
import ImageGallery from 'react-image-gallery'

import 'react-image-gallery/styles/css/image-gallery.css'
import det1 from '../../Assets/images/detail_img_1.jpg'
import det2 from '../../Assets/images/detail_img_2.jpg'
import det3 from '../../Assets/images/detail_img_3.jpg'
import det4 from '../../Assets/images/detail_img_4.jpg'
import det5 from '../../Assets/images/detail_img_5.jpg'
import det6 from '../../Assets/images/detail_img_6.jpg'

import pac1 from '../../Assets/images/packages_img_1.jpg'
import pac2 from '../../Assets/images/packages_img_2.jpg'
import pac3 from '../../Assets/images/packages_img_3.jpg'
import pac4 from '../../Assets/images/packages_img_4.jpg'

import user1 from '../../Assets/images/comment-user.jpg'
import user2 from '../../Assets/images/comment-user2.jpg'
import user3 from '../../Assets/images/comment-user3.jpg'

import org1 from '../../Assets/images/organizer_logo.png'
import pro1 from '../../Assets/images/profile-img-1.jpg'
import {
  AiFillStar,
  AiFillEye,
  AiFillHeart,
  AiFillClockCircle,
  AiFillCalendar,
  AiOutlineClose,
  AiFillPhone,
} from 'react-icons/ai'
import {
  FaLinkedinIn,
  FaBasketballBall,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaUserAlt,
  FaMapMarkerAlt,
  FaPlane,
  FaStar,
  FaCalendar,
} from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import { BsCheckLg, BsFillReplyFill, BsShareFill } from 'react-icons/bs'
const SingleTour = () => {
  const images = [
    {
      original: det1,
      thumbnail: det1,
    },
    {
      original: det2,
      thumbnail: det2,
    },
    {
      original: det3,
      thumbnail: det3,
    },
    {
      original: det4,
      thumbnail: det4,
    },
    {
      original: det5,
      thumbnail: det5,
    },
    {
      original: det6,
      thumbnail: det6,
    },
  ]
  const { pathname } = useLocation()
  const path = pathname.split('/')[1]
  return (
    <>
      {/* breadcrumb */}
      <section className='bread bread-banner'>
        <div className='container'>
          <div className='bread-detail text-center d-md-flex align-items-center justify-content-between'>
            <div className='bread-crumb'>
              <Breadcrump path={path} />
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}

      {/* <!--package Block Start --> */}
      <section class='ptb-100 tour-detail'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-8'>
              <div class='tour-item'>
                <div class='detail-title'>
                  <h2>Tower of London</h2>
                </div>
                <div class='tour-rating mb-3'>
                  <ul>
                    <li>
                      <button
                        type='button'
                        class='rating-star'
                        data-toggle='modal'
                        data-target='#star-btn'
                      >
                        <AiFillStar />
                        <span>4.5</span>
                      </button>
                    </li>
                    <li>
                      <a href='tour_detail.html#review' class='page-scroll'>
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a
                        href='tour_detail.html#write_review'
                        class='page-scroll'
                      >
                        Write a review
                      </a>
                    </li>
                  </ul>
                </div>
                <div class='tour-info pb-4'>
                  <ul class='list-meta d-flex mb-0'>
                    <li class='mr-2 mr-md-4'>
                      <div class='user'>
                        <a href='tour_detail.html#'>
                          <span>
                            <FaUserAlt />
                          </span>{' '}
                          John Smith
                        </a>
                      </div>
                    </li>
                    <li class='mr-2 mr-md-4'>
                      <div class='places'>
                        <a href='tour_detail.html#'>
                          <span>
                            <FaMapMarkerAlt />
                          </span>{' '}
                          Germany - 21 Places
                        </a>
                      </div>
                    </li>
                    <li class='mr-2 mr-md-4'>
                      <div class='views'>
                        <a href='tour_detail.html#'>
                          <span>
                            <AiFillEye />
                          </span>{' '}
                          5984
                        </a>
                      </div>
                    </li>
                    <li class='mr-2 mr-md-4'>
                      <div class='likes'>
                        <a href='tour_detail.html#'>
                          <span>
                            <AiFillHeart />
                          </span>{' '}
                          4563
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class='single-content-item ptb-25'>
                  <div class='row'>
                    <div class='col-lg-4 col-6'>
                      <div class='single-tour-feature d-flex align-items-center mb-3'>
                        <div class='single-feature-icon icon-element ml-0 flex-shrink-0'>
                          <span class='icon'>
                            <AiFillClockCircle />
                          </span>
                        </div>
                        <div class='single-feature-titles'>
                          <h5 class='title mb-1'>Duration</h5>
                          <span class='font-size-13'>5 Days</span>
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-4 col-6'>
                      <div class='single-tour-feature d-flex align-items-center mb-3'>
                        <div class='single-feature-icon icon-element ml-0 flex-shrink-0'>
                          <span class='icon'>
                            <FaUserAlt />
                          </span>
                        </div>
                        <div class='single-feature-titles'>
                          <h5 class='title mb-1'>Group Size</h5>
                          <span class='font-size-13'>30 People</span>
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-4 col-6'>
                      <div class='single-tour-feature d-flex align-items-center mb-3'>
                        <div class='single-feature-icon icon-element ml-0 flex-shrink-0'>
                          <span class='icon'>
                            <BiWorld />
                          </span>
                        </div>
                        <div class='single-feature-titles'>
                          <h5 class='title mb-1'>Tour Type</h5>
                          <span class='font-size-13'>Adventures Tour</span>
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-4 col-6'>
                      <div class='single-tour-feature d-flex align-items-center mb-3'>
                        <div class='single-feature-icon icon-element ml-0 flex-shrink-0'>
                          <span class='icon'>
                            <AiFillCalendar />
                          </span>
                        </div>
                        <div class='single-feature-titles'>
                          <h5 class='title mb-1'>Date</h5>
                          <span class='font-size-13'>Jan 19' - Dec 21'</span>
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-4 col-6'>
                      <div class='single-tour-feature d-flex align-items-center mb-3'>
                        <div class='single-feature-icon icon-element ml-0 flex-shrink-0'>
                          <span class='icon'>
                            <FaUserAlt />
                          </span>
                        </div>
                        <div class='single-feature-titles'>
                          <h5 class='title mb-1'>Min Age</h5>
                          <span class='font-size-13'>10+</span>
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-4 col-6'>
                      <div class='single-tour-feature d-flex align-items-center mb-3'>
                        <div class='single-feature-icon icon-element ml-0 flex-shrink-0'>
                          <span class='icon'>
                            <FaPlane />
                          </span>
                        </div>
                        <div class='single-feature-titles'>
                          <h5 class='title mb-1'>Pickup From</h5>
                          <span class='font-size-13'>Airport</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class='fotorama'
                  data-nav='thumbs'
                  data-allowfullscreen='native'
                >
                  {/* <a href='tour_detail.html#'>
                    <img src={det1} alt='TravelRide' />
                  </a>
                  <a href='tour_detail.html#'>
                    <img src={det2} alt='TravelRide' />
                  </a>
                  <a href='tour_detail.html#'>
                    <img src={det3} alt='TravelRide' />
                  </a>
                  <a href='tour_detail.html#'>
                    <img src={det4} alt='TravelRide' />
                  </a>
                  <a href='tour_detail.html#'>
                    <img src={det5} alt='TravelRide' />
                  </a>
                  <a href='tour_detail.html#'>
                    <img src={det6} alt='TravelRide' />
                  </a>
                  <a href='tour_detail.html#'>
                    <img src={det1} alt='TravelRide' />
                  </a>
                  <a href='tour_detail.html#'>
                    <img src={det2} alt='TravelRide' />
                  </a>
                  <a href='tour_detail.html#'>
                    <img src={det3} alt='TravelRide' />
                  </a> */}
                  <ImageGallery
                    showPlayButton={false}
                    autoPlay={false}
                    showNav={false}
                    items={images}
                  />
                </div>
              </div>
              <div class='tour-detail-tab mt-60'>
                <ul class='nav nav-tabs  mb-30' id='tab' role='tablist'>
                  <li class='nav-item'>
                    <a
                      class='nav-link btn active'
                      id='description_tab'
                      data-toggle='tab'
                      href='tour_detail.html#description'
                      role='tab'
                      aria-controls='description'
                      aria-selected='true'
                    >
                      Description
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a
                      class='nav-link btn'
                      id='itinerary_tab'
                      data-toggle='tab'
                      href='tour_detail.html#itinerary'
                      role='tab'
                      aria-controls='itinerary'
                      aria-selected='false'
                    >
                      Itinerary
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a
                      class='nav-link btn'
                      id='companyinfo_tab'
                      data-toggle='tab'
                      href='tour_detail.html#companyinfo'
                      role='tab'
                      aria-controls='companyinfo'
                      aria-selected='false'
                    >
                      Company Info
                    </a>
                  </li>
                </ul>
                <div class='tab-content' id='tab_content'>
                  <div
                    class='tab-pane fade show active'
                    id='description'
                    role='tabpanel'
                    aria-labelledby='description_tab'
                  >
                    <div class='description'>
                      {' '}
                      <strong>
                        The standard Lorem Ipsum passage, used since the 1500s
                      </strong>
                      <br />
                      <p>
                        Proin lectus ipsum, gravida et mattis vulputate,
                        tristique ut lectus. Sed et lorem nunc. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Aenean eleifend laoreet congue. Vivamus
                        adipiscing nisl ut dolor dignissim semper. Nulla luctus
                        malesuada Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        Ezonenic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets
                      </p>
                      <p>
                        Tristique ut lectus. Sed et lorem nunc. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Aenean eleifend laoreet congue. Vivamus
                        adipiscing nisl ut dolor dignissim semper. Nulla luctus
                        malesuada Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                      </p>
                      <div class='row mt-30'>
                        <div class='col-sm-6 col-12'>
                          <h4 class='title pb-2'>Included</h4>
                          <ul class='list-items'>
                            <li style={{ direction: 'ltr' }}>
                              <BsCheckLg
                                size={20}
                                style={{ color: 'green', marginRight: '10px' }}
                              />
                              Flight Tickets
                            </li>
                            <li style={{ direction: 'ltr' }}>
                              <BsCheckLg
                                size={20}
                                style={{ color: 'green', marginRight: '10px' }}
                              />
                              Food
                            </li>
                            <li style={{ direction: 'ltr' }}>
                              <BsCheckLg
                                size={20}
                                style={{ color: 'green', marginRight: '10px' }}
                              />
                              Accommodation
                            </li>
                            <li style={{ direction: 'ltr' }}>
                              <BsCheckLg
                                size={20}
                                style={{ color: 'green', marginRight: '10px' }}
                              />
                              Tour Guide
                            </li>
                          </ul>
                        </div>
                        <div class='col-sm-6 col-12 mt-3 mt-sm-0'>
                          <h4 class='title pb-2'>Not Included</h4>
                          <ul class='list-items'>
                            <li style={{ direction: 'ltr' }}>
                              <AiOutlineClose
                                size={20}
                                style={{ color: 'red', marginRight: '10px' }}
                              />
                              Entrance Fees
                            </li>
                            <li style={{ direction: 'ltr' }}>
                              <AiOutlineClose
                                size={20}
                                style={{ color: 'red', marginRight: '10px' }}
                              />
                              Additional Services
                            </li>
                            <li style={{ direction: 'ltr' }}>
                              <AiOutlineClose
                                size={20}
                                style={{ color: 'red', marginRight: '10px' }}
                              />
                              Insurance
                            </li>
                            <li style={{ direction: 'ltr' }}>
                              <AiOutlineClose
                                size={20}
                                style={{ color: 'red', marginRight: '10px' }}
                              />
                              Extra facilities
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class='tab-pane fade'
                    id='itinerary'
                    role='tabpanel'
                    aria-labelledby='itinerary_tab'
                  >
                    <div class='timeline'>
                      <ul class='timeline-tour'>
                        <li class='d-sm-flex'>
                          <img src={pac1} alt='' class='tour-img' />
                          <div class='timeline-data ml-0 ml-sm-4 mt-3 mt-sm-0'>
                            <div class='session session-1'>
                              <div class='day'>
                                <b>Day 01 :</b>{' '}
                                <span class='time text-primary'>08am-10am</span>
                              </div>
                              <h5 class=' mt-1'>Moraine Lake</h5>
                              <p class='mb-0'>
                                Mea appareat omittantur eloquentiam ad, nam ei
                                quas oportere democritum. Prima causae admodum
                                id est, ei timeam inimicus sed. Sit an meis
                                aliquam, cetero inermis vel ut. An sit illum
                                euismod facilisis Nullam id dolor id nibh
                                ultricies vehicula ut id elit....{' '}
                              </p>
                            </div>
                            <div class='session session-2 mt-4'>
                              <div class='day'>
                                <span class='time text-primary'>10am-3pm</span>
                              </div>
                              <h5 class=' mt-1'>National Park</h5>
                              <p class='mb-0'>
                                Mea appareat omittantur eloquentiam ad, nam ei
                                quas oportere democritum. Prima causae admodum
                                id est, ei timeam inimicus sed. Sit an meis
                                aliquam, cetero inermis vel ut. An sit illum
                                euismod facilisis Nullam id dolor id nibh
                                ultricies vehicula ut id elit....{' '}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class='d-sm-flex'>
                          <img src={pac2} alt='' class='tour-img' />
                          <div class='timeline-data ml-0 ml-sm-4 mt-3 mt-sm-0'>
                            <div class='session session-1'>
                              <div class='day'>
                                <b>Day 02 :</b>{' '}
                                <span class='time text-primary'>08am-11am</span>
                              </div>
                              <h5 class=' mt-1'>Historical place</h5>
                              <p class='mb-0'>
                                Mea appareat omittantur eloquentiam ad, nam ei
                                quas oportere democritum. Prima causae admodum
                                id est, ei timeam inimicus sed. Sit an meis
                                aliquam, cetero inermis vel ut. An sit illum
                                euismod facilisis Nullam id dolor id nibh
                                ultricies vehicula ut id elit....{' '}
                              </p>
                            </div>
                            <div class='session session-2 mt-4'>
                              <div class='day'>
                                <span class='time text-primary'>10am-3pm</span>
                              </div>
                              <h5 class=' mt-1'>New Travel location</h5>
                              <p class='mb-0'>
                                Mea appareat omittantur eloquentiam ad, nam ei
                                quas oportere democritum. Prima causae admodum
                                id est, ei timeam inimicus sed. Sit an meis
                                aliquam, cetero inermis vel ut. An sit illum
                                euismod facilisis Nullam id dolor id nibh
                                ultricies vehicula ut id elit....{' '}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class='d-sm-flex'>
                          <img src={pac3} alt='' class='tour-img' />
                          <div class='timeline-data ml-0 ml-sm-4 mt-3 mt-sm-0'>
                            <div class='session session-1'>
                              <div class='day'>
                                <b>Day 03 :</b>{' '}
                                <span class='time text-primary'>08am-10am</span>
                              </div>
                              <h5 class=' mt-1'>Desert Safari with Dinner</h5>
                              <p class='mb-0'>
                                Mea appareat omittantur eloquentiam ad, nam ei
                                quas oportere democritum. Prima causae admodum
                                id est, ei timeam inimicus sed. Sit an meis
                                aliquam, cetero inermis vel ut. An sit illum
                                euismod facilisis Nullam id dolor id nibh
                                ultricies vehicula ut id elit....{' '}
                              </p>
                            </div>
                            <div class='session session-2 mt-4'>
                              <div class='day'>
                                <span class='time text-primary'>10am-3pm</span>
                              </div>
                              <h5 class=' mt-1'>National Park</h5>
                              <p class='mb-0'>
                                {' '}
                                Mea appareat omittantur eloquentiam ad, nam ei
                                quas oportere democritum. Prima causae admodum
                                id est, ei timeam inimicus sed. Sit an meis
                                aliquam, cetero inermis vel ut. An sit illum
                                euismod facilisis Nullam id dolor id nibh
                                ultricies vehicula ut id elit....{' '}
                              </p>
                            </div>
                            <div class='session session-3 mt-4'>
                              <div class='day'>
                                <span class='time text-primary'>10am-3pm</span>
                              </div>
                              <h5 class=' mt-1'>Adventure Place</h5>
                              <p class='mb-0'>
                                Mea appareat omittantur eloquentiam ad, nam ei
                                quas oportere democritum. Prima causae admodum
                                id est, ei timeam inimicus sed. Sit an meis
                                aliquam, cetero inermis vel ut. An sit illum
                                euismod facilisis Nullam id dolor id nibh
                                ultricies vehicula ut id elit....{' '}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class='d-sm-flex'>
                          <img src={pac4} alt='' class='tour-img' />
                          <div class='timeline-data ml-0 ml-sm-4 mt-3 mt-sm-0'>
                            <div class='session session-1'>
                              <div class='day'>
                                <b>Day 04 :</b>{' '}
                                <span class='time text-primary'>08am-10am</span>
                              </div>
                              <h5 class=' mt-1'>Departure</h5>
                              <p class='mb-0'>
                                Mea appareat omittantur eloquentiam ad, nam ei
                                quas oportere democritum. Prima causae admodum
                                id est, ei timeam inimicus sed. Sit an meis
                                aliquam, cetero inermis vel ut. An sit illum
                                euismod facilisis Nullam id dolor id nibh
                                ultricies vehicula ut id elit....{' '}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class='tab-pane fade'
                    id='companyinfo'
                    role='tabpanel'
                    aria-labelledby='companyinfo_tab'
                  >
                    <div class='table-responsive '>
                      <h4 class='title pb-2'>Company Info</h4>
                      <table class='table table-borderless mb-0  text-nowrap'>
                        <tbody>
                          <tr>
                            <td class='pl-0'>Established Year</td>
                            <td class=''>2001</td>
                          </tr>
                          <tr>
                            <td class='pl-0'>Services</td>
                            <td class=''>Tours &amp; Travels</td>
                          </tr>
                          <tr>
                            <td class='pl-0'>Payment Methods</td>
                            <td class=''>
                              Mastercard, VISA, American Express Discover,
                            </td>
                          </tr>
                          <tr>
                            <td class='pl-0'>Fax</td>
                            <td class=''>+0 123-456-7890</td>
                          </tr>
                          <tr>
                            <td class='pl-0'>TollFree</td>
                            <td class=''>+0 123-456-7890</td>
                          </tr>
                          <tr>
                            <td class='pl-0'>Certification</td>
                            <td class=''>ISO Certified</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class='tour-map mt-60'>
                <div class='row'>
                  <div class='col-12'>
                    <h3 class='sub-heading mb-30 mb-xs-15'>Location</h3>
                    <div class='map'>
                      <iframe
                        class='map-part'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190178.49401377814!2d13.253727274681411!3d52.52218428869219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sin!4v1627443069987!5m2!1sen!2sin'
                        style={{ border: '0' }}
                        allowfullscreen=''
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div id='review' class='reviews-reting mt-60'>
                <h3 class='sub-heading mb-30 mb-xs-15'>
                  <span>25</span> Reviews
                </h3>
                <div class='row align-items-center'>
                  <div class='col-md-4'>
                    <div class='reting-summary text-center p-25 p-xs-15 radius-5px mb-md-20'>
                      <div class='reting-detail'>
                        <div class='ret'>
                          <h2>
                            {' '}
                            4.5 <span>/5</span>
                          </h2>
                          <FaStar size={10} />
                          <FaStar size={10} />
                          <FaStar size={10} />
                          <FaStar size={10} />
                        </div>
                        {/* <div class='rating-summary-block'>
                          <div class='rating-result' title='84%'>
                            {' '}
                            <span style={{ width: '84%' }}></span>{' '}
                          </div>
                        </div> */}
                        <span>Based on 4 reviews</span>
                      </div>
                    </div>
                  </div>
                  <div class='col-md-8'>
                    <div class='reting-progress'>
                      <div class='progress-detail star-5 d-flex align-items-center'>
                        <div class='progress-star bg-success d-flex align-items-center'>
                          <span class='star-num'>5</span>
                          <FaStar size={10} style={{ marginRight: '10px' }} />
                        </div>
                        <div class='w-100'>
                          <div class='progress mx-auto mx-md-0'>
                            <div
                              class='progress-bar bg-success'
                              style={{ width: '90%' }}
                              role='progressbar'
                            ></div>
                          </div>
                        </div>
                        <span class='ret-num'>9</span>
                      </div>
                    </div>
                    <div class='reting-progress mt-3'>
                      <div class='progress-detail star-4 d-flex align-items-center'>
                        <div class='progress-star bg-info d-flex align-items-center'>
                          <span class='star-num'>4</span>
                          <FaStar size={10} style={{ marginRight: '10px' }} />
                        </div>
                        <div class='w-100'>
                          <div class='progress mx-auto mx-md-0'>
                            <div
                              class='progress-bar bg-info'
                              style={{ width: '60%' }}
                              role='progressbar'
                            ></div>
                          </div>
                        </div>
                        <span class='ret-num'>6</span>
                      </div>
                    </div>
                    <div class='reting-progress mt-3'>
                      <div class='progress-detail star-3 d-flex align-items-center'>
                        <div class='progress-star bg-primary d-flex align-items-center'>
                          <span class='star-num'>3</span>
                          <FaStar size={10} style={{ marginRight: '10px' }} />
                        </div>
                        <div class='w-100'>
                          <div class='progress mx-auto mx-md-0'>
                            <div
                              class='progress-bar bg-primary'
                              style={{ width: '40%' }}
                              role='progressbar'
                            ></div>
                          </div>
                        </div>
                        <span class='ret-num'>4</span>
                      </div>
                    </div>
                    <div class='reting-progress mt-3'>
                      <div class='progress-detail star-2 d-flex align-items-center'>
                        <div class='progress-star bg-warning d-flex align-items-center'>
                          <span class='star-num'>2</span>
                          <FaStar size={10} style={{ marginRight: '10px' }} />
                        </div>
                        <div class='w-100'>
                          <div class='progress mx-auto mx-md-0'>
                            <div
                              class='progress-bar bg-warning'
                              style={{ width: '30%' }}
                              role='progressbar'
                            ></div>
                          </div>
                        </div>
                        <span class='ret-num'>3</span>
                      </div>
                    </div>
                    <div class='reting-progress mt-3'>
                      <div class='progress-detail star-1 d-flex align-items-center'>
                        <div class='progress-star bg-danger d-flex align-items-center'>
                          <span class='star-num'>1</span>
                          <FaStar size={10} style={{ marginRight: '10px' }} />
                        </div>
                        <div class='w-100'>
                          <div class='progress mx-auto mx-md-0'>
                            <div
                              class='progress-bar bg-danger'
                              style={{ width: '30%' }}
                              role='progressbar'
                            ></div>
                          </div>
                        </div>
                        <span class='ret-num'>3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='items-comments mt-60'>
                <div class='comments-area'>
                  <h3 class='sub-heading mb-30 mb-xs-15'>
                    <span>2</span> Comments
                  </h3>
                  <ul class='comment-list'>
                    <li>
                      <div class='comment-user mb-20'>
                        <div class='d-flex justify-content-between align-items-center mb-20'>
                          <div class='comment-detail align-items-center'>
                            <img src={user1} alt='TravelRide' />
                            <div class='comment-info'>
                              <div class='user-name'>Barbara Doe</div>
                              <div class='post-info'>3 days ago</div>
                            </div>
                          </div>
                          <a
                            class='btn btn-color small page-scroll'
                            href='tour_detail.html#reply-comment'
                          >
                            <BsFillReplyFill /> Reply
                          </a>
                        </div>
                        <p>
                          Consectetur Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae .
                        </p>
                      </div>
                      <ul class='comment-list child-comment'>
                        <li>
                          <div class='comment-user mb-20'>
                            <div class='d-flex justify-content-between align-items-center  mb-20'>
                              <div class='comment-detail align-items-center'>
                                <img src={user2} alt='TravelRide' />
                                <div class='comment-info'>
                                  <div class='user-name'>John Doe</div>
                                  <div class='post-info'>3 days ago</div>
                                </div>
                              </div>
                              <a
                                class='btn btn-color small page-scroll'
                                href='tour_detail.html#reply-comment'
                              >
                                <BsFillReplyFill /> Reply
                              </a>
                            </div>
                            <p>
                              Consectetur Sed ut perspiciatis unde omnis iste
                              natus error sit voluptatem accusantium doloremque
                              laudantium, totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae .
                            </p>
                          </div>
                        </li>
                        <li>
                          <div class='comment-user mb-20'>
                            <div class='d-flex justify-content-between align-items-center  mb-20'>
                              <div class='comment-detail align-items-center'>
                                <img src={user2} alt='TravelRide' />
                                <div class='comment-info'>
                                  <div class='user-name'>John Doe</div>
                                  <div class='post-info'>3 days ago</div>
                                </div>
                              </div>
                              <a
                                class='btn btn-color small page-scroll'
                                href='tour_detail.html#reply-comment'
                              >
                                <BsFillReplyFill /> Reply
                              </a>
                            </div>
                            <p>
                              Consectetur Sed ut perspiciatis unde omnis iste
                              natus error sit voluptatem accusantium doloremque
                              laudantium, totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae .
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class='comment-user mb-20'>
                        <div class='d-flex justify-content-between align-items-center  mb-20'>
                          <div class='comment-detail align-items-center'>
                            <img src={user3} alt='TravelRide' />
                            <div class='comment-info'>
                              <div class='user-name'>John Adams</div>
                              <div class='post-info'>3 Week ago</div>
                            </div>
                          </div>
                          <a
                            class='btn btn-color small page-scroll'
                            href='tour_detail.html#reply-comment'
                          >
                            <BsFillReplyFill /> Reply
                          </a>
                        </div>
                        <p>
                          Consectetur Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae .
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div class='border-top pt-20 d-md-flex justify-content-between align-items-center text-center'>
                    <div class='show-comment d-md-flex align-items-center mb-sm-15 '>
                      <span class='show-num'>Showing 5 of 15 reviews</span>
                      <div class='progress mx-auto mx-md-0'>
                        <div
                          class='progress-bar'
                          style={{ width: '33.33%' }}
                          role='progressbar'
                        ></div>
                      </div>
                    </div>
                    <button class='btn btn-color'> Show More Reviews</button>
                  </div>
                </div>
              </div>
              <div id='write_review' class='main-form mt-60'>
                <h3 class='sub-heading mb-30 mb-xs-15'>Write a review</h3>
                <div class='rate-option'>
                  <div class='row'>
                    <div class='col-md-4 col-6'>
                      <div class='star-rating mb-2'>
                        <label>Service</label>
                        <fieldset>
                          <input
                            type='checkbox'
                            id='ser5'
                            name='rating'
                            value='5'
                          />
                          <label for='ser5' title='Outstanding'></label>
                          <input
                            type='checkbox'
                            id='ser4'
                            name='rating'
                            value='4'
                          />
                          <label for='ser4' title='Very Good'></label>
                          <input
                            type='checkbox'
                            id='ser3'
                            name='rating'
                            value='3'
                          />
                          <label for='ser3' title='Good'></label>
                          <input
                            type='checkbox'
                            id='ser2'
                            name='rating'
                            value='2'
                          />
                          <label for='ser2' title='Poor'></label>
                          <input
                            type='checkbox'
                            id='ser1'
                            name='rating'
                            value='1'
                          />
                          <label for='ser1' title='Very Poor'></label>
                        </fieldset>
                      </div>
                    </div>
                    <div class='col-md-4 col-6'>
                      <div class='star-rating mb-2'>
                        <label>Location</label>
                        <fieldset>
                          <input
                            type='checkbox'
                            id='loc5'
                            name='rating'
                            value='5'
                          />
                          <label for='loc5' title='Outstanding'></label>
                          <input
                            type='checkbox'
                            id='loc4'
                            name='rating'
                            value='4'
                          />
                          <label for='loc4' title='Very Good'></label>
                          <input
                            type='checkbox'
                            id='loc3'
                            name='rating'
                            value='3'
                          />
                          <label for='loc3' title='Good'></label>
                          <input
                            type='checkbox'
                            id='loc2'
                            name='rating'
                            value='2'
                          />
                          <label for='loc2' title='Poor'></label>
                          <input
                            type='checkbox'
                            id='loc1'
                            name='rating'
                            value='1'
                          />
                          <label for='loc1' title='Very Poor'></label>
                        </fieldset>
                      </div>
                    </div>
                    <div class='col-md-4 col-6'>
                      <div class='star-rating mb-2'>
                        <label>Comfort</label>
                        <fieldset>
                          <input
                            type='checkbox'
                            id='com5'
                            name='rating'
                            value='5'
                          />
                          <label for='com5' title='Outstanding'></label>
                          <input
                            type='checkbox'
                            id='com4'
                            name='rating'
                            value='4'
                          />
                          <label for='com4' title='Very Good'></label>
                          <input
                            type='checkbox'
                            id='com3'
                            name='rating'
                            value='3'
                          />
                          <label for='com3' title='Good'></label>
                          <input
                            type='checkbox'
                            id='com2'
                            name='rating'
                            value='2'
                          />
                          <label for='com2' title='Poor'></label>
                          <input
                            type='checkbox'
                            id='com1'
                            name='rating'
                            value='1'
                          />
                          <label for='com1' title='Very Poor'></label>
                        </fieldset>
                      </div>
                    </div>
                    <div class='col-md-4 col-6'>
                      <div class='star-rating mb-2'>
                        <label>Cleanliness</label>
                        <fieldset>
                          <input
                            type='checkbox'
                            id='cln5'
                            name='rating'
                            value='5'
                          />
                          <label for='cln5' title='Outstanding'></label>
                          <input
                            type='checkbox'
                            id='cln4'
                            name='rating'
                            value='4'
                          />
                          <label for='cln4' title='Very Good'></label>
                          <input
                            type='checkbox'
                            id='cln3'
                            name='rating'
                            value='3'
                          />
                          <label for='cln3' title='Good'></label>
                          <input
                            type='checkbox'
                            id='cln2'
                            name='rating'
                            value='2'
                          />
                          <label for='cln2' title='Poor'></label>
                          <input
                            type='checkbox'
                            id='cln1'
                            name='rating'
                            value='1'
                          />
                          <label for='cln1' title='Very Poor'></label>
                        </fieldset>
                      </div>
                    </div>
                    <div class='col-md-4 col-6'>
                      <div class='star-rating mb-2'>
                        <label>Facilities</label>
                        <fieldset>
                          <input
                            type='checkbox'
                            id='f5'
                            name='rating'
                            value='5'
                          />
                          <label for='f5' title='Outstanding'></label>
                          <input
                            type='checkbox'
                            id='f4'
                            name='rating'
                            value='4'
                          />
                          <label for='f4' title='Very Good'></label>
                          <input
                            type='checkbox'
                            id='f3'
                            name='rating'
                            value='3'
                          />
                          <label for='f3' title='Good'></label>
                          <input
                            type='checkbox'
                            id='f2'
                            name='rating'
                            value='2'
                          />
                          <label for='f2' title='Poor'></label>
                          <input
                            type='checkbox'
                            id='f1'
                            name='rating'
                            value='1'
                          />
                          <label for='f1' title='Very Poor'></label>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
                <form>
                  <div class='row mt-30 mt-xs-15'>
                    <div class='col-lg-6 col-12 mb-30 mb-xs-15'>
                      <input type='text' placeholder='Name' required />
                    </div>
                    <div class='col-lg-6 col-12 mb-30 mb-xs-15'>
                      <input type='email' placeholder='Email' required />
                    </div>
                    <div class='col-12 mb-30 mb-xs-15'>
                      <textarea
                        cols='30'
                        rows='4'
                        placeholder='Message'
                        required
                      ></textarea>
                    </div>
                    <div class='col-12 mb-30 mb-xs-15'>
                      <div class='star-rating'>
                        <label class='float-left'>Overall Rating :</label>
                        <fieldset>
                          <input
                            type='checkbox'
                            id='star5'
                            name='rating'
                            value='5'
                          />
                          <label
                            for='star5'
                            data-toggle='tooltip'
                            data-placement='top'
                            title='Outstanding'
                          ></label>
                          <input
                            type='checkbox'
                            id='star4'
                            name='rating'
                            value='4'
                          />
                          <label for='star4' title='Very Good'></label>
                          <input
                            type='checkbox'
                            id='star3'
                            name='rating'
                            value='3'
                          />
                          <label for='star3' title='Good'></label>
                          <input
                            type='checkbox'
                            id='star2'
                            name='rating'
                            value='2'
                          />
                          <label for='star2' title='Poor'></label>
                          <input
                            type='checkbox'
                            id='star1'
                            name='rating'
                            value='1'
                          />
                          <label for='star1' title='Very Poor'></label>
                        </fieldset>
                      </div>
                    </div>
                    <div class='col-12'>
                      <button class='btn btn-color' name='submit' type='submit'>
                        Submit a Review
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class='col-lg-4'>
              <div class='sidebar-block sidebar-block-1 pt-sm-60 mt-md-30'>
                <div class='box-shadow radius-5px p-25 p-xs-15'>
                  <div class='sidebar-box listing-box'>
                    {' '}
                    <span class='opener plus'></span>
                    <div class='sidebar-title'>
                      <h3>
                        <span>Tour Booking</span>
                      </h3>
                    </div>
                    <div class='sidebar-contant pt-4'>
                      <div class=' main-form tour-search-detail'>
                        <div class='price-box d-flex align-items-center mb-3'>
                          <span class='mr-1'>From</span>
                          <h3 class='price mr-1 mb-0'>$520.00</h3>
                          <del class='old-price'>$620.00</del>
                        </div>
                        <form class='main-form' action='tour_detail.html#'>
                          <div class='sidebar-date'>
                            <div class='form-group'>
                              <div class='input-inner mb-3 mb-xl-0'>
                                <label for='datepicker-start'>From</label>
                                <div class='input-box'>
                                  <div class='input-icon'>
                                    <span>
                                      <FaCalendar />
                                    </span>
                                  </div>
                                  <input
                                    id='datepicker-start'
                                    class='form-control datepicker datepick'
                                    type='text'
                                    required
                                    placeholder='MM/DD/YY'
                                  />
                                </div>
                              </div>
                            </div>
                            <div class='form-group'>
                              <div class='input-inner mb-3 mb-xl-0'>
                                <label for='datepicker-end'>To</label>
                                <div class='input-box'>
                                  <div class='input-icon'>
                                    <span>
                                      <FaCalendar />
                                    </span>
                                  </div>
                                  <input
                                    id='datepicker-end'
                                    class='form-control datepicker datepick'
                                    type='text'
                                    required
                                    placeholder='MM/DD/YY'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class='sidebar-guest'>
                            <div class='qty-box mb-2 d-flex align-items-center justify-content-between'>
                              <label class=''>
                                Adults <span>Age 18+</span>
                              </label>
                              <div class='product-qty '>
                                <div class='custom-qty'>
                                  <button
                                    onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) result.value--;return false;"
                                    class='reduced items'
                                    type='button'
                                  >
                                    {' '}
                                  </button>
                                  <input
                                    type='text'
                                    class='input-text qty'
                                    title='Qty'
                                    value='1'
                                    maxlength='8'
                                    id='qty'
                                    name='qty'
                                  />
                                  <button
                                    onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty )) result.value++;return false;"
                                    class='increase items'
                                    type='button'
                                  >
                                    {' '}
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class='qty-box mb-2 d-flex align-items-center justify-content-between'>
                              <label class=''>
                                Children <span>2-12 years old</span>
                              </label>
                              <div class='product-qty '>
                                <div class='custom-qty'>
                                  <button
                                    onclick="var result = document.getElementById('qty2'); var qty2 = result.value; if( !isNaN( qty2 ) &amp;&amp; qty2 &gt; 1 ) result.value--;return false;"
                                    class='reduced items'
                                    type='button'
                                  >
                                    {' '}
                                  </button>
                                  <input
                                    type='text'
                                    class='input-text qty'
                                    title='Qty'
                                    value='1'
                                    maxlength='8'
                                    id='qty2'
                                    name='qty'
                                  />
                                  <button
                                    onclick="var result = document.getElementById('qty2'); var qty2 = result.value; if( !isNaN( qty2 )) result.value++;return false;"
                                    class='increase items'
                                    type='button'
                                  >
                                    {' '}
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class='qty-box mb-2 d-flex align-items-center justify-content-between'>
                              <label class=''>
                                Infants <span>0-2 years old</span>
                              </label>
                              <div class='product-qty '>
                                <div class='custom-qty'>
                                  <button
                                    onclick="var result = document.getElementById('qty3'); var qty3 = result.value; if( !isNaN( qty3 ) &amp;&amp; qty3 &gt; 1 ) result.value--;return false;"
                                    class='reduced items'
                                    type='button'
                                  >
                                    {' '}
                                  </button>
                                  <input
                                    type='text'
                                    class='input-text qty'
                                    title='Qty'
                                    value='1'
                                    maxlength='8'
                                    id='qty3'
                                    name='qty'
                                  />
                                  <button
                                    onclick="var result = document.getElementById('qty3'); var qty3 = result.value; if( !isNaN( qty3 )) result.value++;return false;"
                                    class='increase items'
                                    type='button'
                                  >
                                    {' '}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class='tour-booking-btn pt-3'>
                            <button
                              type='submit'
                              class='btn btn-color w-100 mb-3'
                            >
                              Book Now
                            </button>
                            <a
                              href='tour_detail.html#'
                              class='btn btn-light w-100'
                            >
                              Add to Wishlist
                            </a>
                            <div class='d-flex align-items-center justify-content-between pt-3'>
                              <a
                                href='tour_detail.html#'
                                class='btn btn-color small'
                              >
                                <BsShareFill /> Share
                              </a>
                              <div class='views'>
                                <a href='tour_detail.html#'>
                                  <span class='icon'>
                                    <AiFillEye />
                                  </span>{' '}
                                  5984
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class='sidebar-box listing-box'>
                    {' '}
                    <span class='opener plus'></span>
                    <div class='sidebar-title'>
                      <h3>
                        <span>Tour Organizer</span>
                      </h3>
                    </div>
                    <div class='sidebar-contant pt-4'>
                      <div class='organizer '>
                        <div class='profile-details text-center'>
                          <div class='profile-pic mb-0 mx-5'>
                            <img src={org1} alt='user' />
                          </div>
                          <div class='text-center mt-3'>
                            <a
                              href='https://aaryaweb.info/html/travelride/tr001/userprofile.html'
                              class='text-dark text-center'
                            >
                              <h5 class='mt-0 mb-1'>Melody Marshall</h5>
                            </a>
                            <span class='mt-1'>
                              Tour Organizer <b> Since Jun 2021</b>
                            </span>
                            <div>
                              <small class='text-muted'>
                                Listing Tour Id <b>2568723</b>
                              </small>
                            </div>
                          </div>
                        </div>
                        <div class='sidebar-tab mt-30'>
                          <div class='row'>
                            <div class='col-12'>
                              <div class='heading-part mb-20'>
                                <div
                                  id='tabs'
                                  class='contact-tour-tab tabs-nav'
                                >
                                  <ul class='tab-stap d-xl-flex d-lg-block d-flex'>
                                    <li>
                                      <a
                                        href='javascript:void(0)'
                                        class='tab-step1 btn selected '
                                        title='step1'
                                      >
                                        Contact
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href='javascript:void(0)'
                                        class='tab-step2 btn '
                                        title='step2'
                                      >
                                        New Tours
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class='tab_content'>
                            <div id='items'>
                              <ul>
                                <li>
                                  <div
                                    id='data-step1'
                                    class='items-step1 contact-info position-r selected'
                                    data-temp='tabdata'
                                  >
                                    <ul class='address'>
                                      <li class='item'>
                                        <div class='address-icon icon1'>
                                          <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 384 512'
                                          >
                                            <path
                                              d='M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.7-29.9 13.7-39.4 0h0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z'
                                              fill='#fff'
                                            />
                                          </svg>
                                        </div>
                                        <p class='address mb-0'>
                                          150-A Appolo aprtment, opp. Hopewell
                                          Junction, Allen st Road, new
                                          york-405001.
                                        </p>
                                      </li>
                                      <li>
                                        <div class='address-icon icon2'>
                                          <svg
                                            aria-hidden='true'
                                            focusable='false'
                                            data-prefix='fas'
                                            data-icon='phone-alt'
                                            class='svg-inline--fa fa-phone-alt fa-w-16'
                                            role='img'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 512 512'
                                          >
                                            <path
                                              fill='currentColor'
                                              d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'
                                            ></path>
                                          </svg>
                                        </div>
                                        <a href='tour_detail.html#'>
                                          +0 123-456-7890
                                        </a>
                                      </li>
                                      <li>
                                        <div class='address-icon icon3'>
                                          <svg
                                            aria-hidden='true'
                                            focusable='false'
                                            data-prefix='fas'
                                            data-icon='envelope'
                                            class='svg-inline--fa fa-envelope fa-w-16'
                                            role='img'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 512 512'
                                          >
                                            <path
                                              fill='currentColor'
                                              d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                                            ></path>
                                          </svg>
                                        </div>
                                        <a href='tour_detail.html#'>
                                          info@example.com
                                        </a>
                                      </li>
                                      <li>
                                        <div class='address-icon icon4'>
                                          <svg
                                            aria-hidden='true'
                                            focusable='false'
                                            data-prefix='fas'
                                            data-icon='globe-americas'
                                            class='svg-inline--fa fa-globe-americas fa-w-16'
                                            role='img'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 496 512'
                                          >
                                            <path
                                              fill='currentColor'
                                              d='M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z'
                                            ></path>
                                          </svg>
                                        </div>
                                        <a href='tour_detail.html#'>
                                          travelrideworld.com
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div
                                    id='data-step2'
                                    class='items-step2 contact-info position-r'
                                    data-temp='tabdata'
                                  >
                                    <div class='table-responsive'>
                                      <table class='table table-bordered text-nowrap'>
                                        <tbody>
                                          <tr>
                                            <td class='tour-city'>
                                              <a href='tour_detail.html#'>
                                                USA Tour
                                              </a>
                                            </td>
                                            <td class='tour-date'>
                                              18th Dec - 10th Jan
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class='tour-city'>
                                              <a href='tour_detail.html#'>
                                                Italy Tour
                                              </a>
                                            </td>
                                            <td class='tour-date'>
                                              10th Nov - 21st Dec
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class='tour-city'>
                                              <a href='tour_detail.html#'>
                                                Sydney Tour
                                              </a>
                                            </td>
                                            <td class='tour-date'>
                                              15th Dec - 6th Feb
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class='tour-city'>
                                              <a href='tour_detail.html#'>
                                                France Tour
                                              </a>
                                            </td>
                                            <td class='tour-date'>
                                              18th Nov - 21st Jan
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class='tour-city'>
                                              <a href='tour_detail.html#'>
                                                Australia Tour
                                              </a>
                                            </td>
                                            <td class='tour-date'>
                                              16th Sep - 10th Nov
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class='tour-city'>
                                              <a href='tour_detail.html#'>
                                                Canada Tour
                                              </a>
                                            </td>
                                            <td class='tour-date'>
                                              5th Oct - 16th Dec
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class='tour-city'>
                                              <a href='tour_detail.html#'>
                                                Europe Tour
                                              </a>
                                            </td>
                                            <td class='tour-date'>
                                              14th Oct - 19th Nov
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='sidebar-box'>
                    {' '}
                    <span class='opener plus'></span>
                    <div class='sidebar-title'>
                      <h3>
                        <span>Tags</span>
                      </h3>
                    </div>
                    <div class='sidebar-contant pt-3'>
                      <ul class='tagcloud'>
                        <li>
                          <a href='javascript:void(0)'>Flights</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Traveling</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Tours</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Cruises</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Hotels</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Booking</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Countries</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Trekking</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Adventure</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Air Rides</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class='sidebar-box'>
                    {' '}
                    <span class='opener plus'></span>
                    <div class='sidebar-title'>
                      <h3>
                        <span>Tourist Advisor</span>
                      </h3>
                    </div>
                    <div class='sidebar-contant pt-3'>
                      <div class='item-user'>
                        <div class='profile-details text-center'>
                          <div class='profile-pic mb-0 mx-5'>
                            <img
                              src={pro1}
                              class='rounded-circle'
                              alt='TravelRide'
                            />
                          </div>
                        </div>
                        <div class='text-center mt-2 product-filter-desc'>
                          <a href='tour_detail.html#' class='text-center'>
                            <h5 class='mt-0 mb-1'>Kody Byrd</h5>
                          </a>
                          <span class=''>Europe Tourist Advisor</span>
                          <div class='social-icon mt-3'>
                            <a href='tour_detail.html#' class='px-1'>
                              <FaFacebookF />
                            </a>
                            <a href='tour_detail.html#' class='px-1'>
                              <FaTwitter />
                            </a>
                            <a href='tour_detail.html#' class='px-1'>
                              <FaLinkedinIn />
                            </a>
                            <a href='tour_detail.html#' class='px-1'>
                              <FaBasketballBall />
                            </a>
                            <a href='tour_detail.html#' class='px-1'>
                              <FaPinterestP />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='sidebar-box'>
                    {' '}
                    <span class='opener plus'></span>
                    <div class='sidebar-title'>
                      <h3>
                        <span>Need Help</span>
                      </h3>
                    </div>
                    <div class='sidebar-contant pt-3'>
                      <div class='support-service p-25 p-xs-15'>
                        <span>
                          <AiFillPhone />
                        </span>
                        <h3>0+ 1920-30-3324</h3>
                        <p class='m-0'>Toll Free & 24/7 Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--package Block End --> */}
    </>
  )
}

export default SingleTour
