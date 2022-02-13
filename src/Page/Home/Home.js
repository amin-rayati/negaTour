import React from 'react'
import RecentTourSLider from '../../Component/Sliders/HomeSlider/RecentTourSLider'
import SpecialTourSlider from '../../Component/Sliders/HomeSlider/SpecialTourSlider'
import LatestTourSlider from '../../Component/Sliders/HomeSlider/LatestToursSlider'
import PopularTourSlider from '../../Component/Sliders/HomeSlider/PopularTourSlider'
import CategoryTourSlider from '../../Component/Sliders/HomeSlider/CategoryTourSlider'
import MainSlider from '../../Component/Sliders/HomeSlider/MainSlider'
import des1 from '../../Assets/images/destinations_img_1.jpg'
import des2 from '../../Assets/images/destinations_img_2.jpg'
import des3 from '../../Assets/images/destinations_img_3.jpg'
import des4 from '../../Assets/images/destinations_img_4.jpg'
import des5 from '../../Assets/images/destinations_img_5.jpg'
import des6 from '../../Assets/images/destinations_img_6.jpg'
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'
const Home = () => {
  return (
    <>
      {/* <!-- BANNER STRAT --> */}
      <section class='home-banner banner-wrapper2'>
        <div class='banner'>
          <div class='main-banner owl-carousel '>
            <MainSlider />
          </div>
          {/* <div class='tour-search tour-wrapper2'>
            <div class=' main-form tour-search-detail'>
              <div class='container'>
                <div class='search-form-wrapper'>
                  <form class='main-form' action='index-tour.html#'>
                    <div class='row align-items-end justify-content-center'>
                      <div class='form-group col-xl-3 col-md-6 col-12'>
                        <div class='input-inner mb-3 mb-xl-0'>
                          <label>Your Destinationss</label>
                          <div class='input-box'>
                            <div class='input-icon'>
                              <FaMapMarkerAlt />
                            </div>
                            <input
                              id='tour-destinationss'
                              class='form-control'
                              type='text'
                              required
                              placeholder='Enter a destination'
                            />
                          </div>
                        </div>
                      </div>
                      <div class='form-group col-xl-2 col-md-3 col-sm-6'>
                        <div class='input-inner mb-3 mb-xl-0'>
                          <label>Travel Date</label>
                          <div class='input-box'>
                            <div class='input-icon'>
                              <FaCalendar />
                            </div>
                            <input
                              id='tour-start-date'
                              class='form-control datepicker datepick'
                              type='date'
                              required
                              placeholder='MM/DD/YY'
                            />
                          </div>
                        </div>
                      </div>
                      <div class='form-group col-xl-2 col-md-3 col-sm-6'>
                        <div class='input-inner mb-3 mb-xl-0'>
                          <label>Return Date</label>
                          <div class='input-box'>
                            <div class='input-icon'>
                              <FaCalendar />
                            </div>
                            <input
                              id='tour-start-end'
                              class='form-control datepicker datepick'
                              type='date'
                              required
                              placeholder='MM/DD/YY'
                            />
                          </div>
                        </div>
                      </div>
                      <div class='form-group col-xl-3 col-md-8 col-sm-12'>
                        <div class='row'>
                          <div class='col-6'>
                            <div class='input-inner mb-3 mb-md-0'>
                              <label>Adults</label>
                              <select class='select' name='adults'>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                              </select>
                            </div>
                          </div>
                          <div class='col-6'>
                            <div class='input-inner mb-3 mb-md-0'>
                              <label>Children</label>
                              <select class='select' name='children'>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='form-group col-xl-2 col-md-4 col-sm-6 col-12'>
                        <div class='search-btn'>
                          <button
                            name='search'
                            type='submit'
                            class='btn btn-color w-100'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 17 17'
                            >
                              <path
                                d='M11.35 1.94a6.67 6.67 0 0 0-9.41 0 6.67 6.67 0 0 0 0 9.41c2.31 2.31 5.91 2.56 8.5.75.05.26.18.5.38.7l3.78 3.78c.55.55 1.44.55 1.99 0s.55-1.44 0-1.99l-3.78-3.78c-.2-.2-.45-.33-.7-.38 1.8-2.58 1.55-6.17-.76-8.49zm-1.19 8.22c-1.94 1.94-5.09 1.94-7.02 0a4.98 4.98 0 0 1 0-7.02c1.94-1.94 5.09-1.94 7.02 0s1.94 5.08 0 7.02z'
                                fill-rule='evenodd'
                                fill='#fff'
                              />
                            </svg>{' '}
                            Search Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <!-- BANNER END -->  */}

      {/* Categorie Start  */}
      <div class='ptb-100'>
        <div class='container'>
          <div class='row no-gutters'>
            <div class='col-12'>
              <div class='heading-part text-center mb-30 mb-sm-20'>
                <h2 class='main_title heading mb-15'>
                  دسته بندی <span>تور ها</span>{' '}
                </h2>
                <p class='heading-des'>
                  با نگاتور بهترین تور های ایران را پیدا کنید
                </p>
              </div>
            </div>
          </div>
          <div class='categorie'>
            <CategoryTourSlider />
          </div>
        </div>
      </div>
      {/* Categorie Block End   */}

      {/* Popular Tour Packages Start  */}
      <section class='pb-100'>
        <div class='container'>
          <div class='row no-gutters'>
            <div class='col-12'>
              <div class='heading-part text-center mb-30 mb-sm-20'>
                <h2 class='main_title heading mb-15'>
                  تورهای <span>مورد علاقه</span>
                </h2>
                <p class='heading-des'>بهترین تور هایی که مردم انتخاب کردند</p>
              </div>
            </div>
          </div>
          <PopularTourSlider />
        </div>
      </section>
      {/* Popular Tour Packages End  */}

      {/* parallax Start */}
      <section>
        <div class='parallax-banner ptb-100'>
          <div class='container'>
            <div class='row'>
              <div class='col-xl-8 offset-xl-2 ptb-70 client-box m-auto'>
                <div class='parallax-delail text-center color-white'>
                  <div
                    class='parallax-subtitle'
                    style={{
                      background: '#ffffff40',
                      width: 'max-content',
                      color: 'white',
                      padding: '15px 30px',
                      borderRadius: '15px',
                      margin: 'auto',
                    }}
                  >
                    از <span style={{ color: '#fff' }}>250000</span>
                  </div>
                  <div class='parallax-title'>تعطیلات قصر طایی</div>
                  <div class='parallax-des mtb-20'>
                    <ul>
                      <li>
                        <div class='places'>
                          <span>
                            <FaMapMarkerAlt size={20} />
                          </span>{' '}
                          کیش
                        </div>
                      </li>
                      <li>
                        <div class='places'>
                          <span>
                            <i class='far fa-calendar-alt'></i>
                          </span>{' '}
                          17 مهر
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class='rating-summary-block mb-10'>
                    {/* <div class='rating-result' title='70%'>
                      {' '}
                      <span style={{ width: '66%' }}></span>{' '}
                    </div> */}
                    <span class='label-review'>10 بازدید</span>
                  </div>
                  <p>
                    جزیره بسیار زیبای کیش دارای نقاط دیدنی بسیار زیبا و هیجان
                    انگیز
                  </p>
                  <a class='btn btn-color mt-2 mt-sm-3' href='index-tour.html#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 384 512'
                    >
                      <path
                        d='M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.7-29.9 13.7-39.4 0h0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z'
                        fill='#fff'
                      />
                    </svg>{' '}
                    با ما سفر کنید
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* parallax End  */}

      {/* destination-start */}
      <section class='ptb-100 '>
        <div class='Destinations-part mb_-30 text-center'>
          <div class='container'>
            <div class='row no-gutters'>
              <div class='col-12'>
                <div class='heading-part text-center mb-30 mb-sm-20'>
                  <h2 class='main_title heading mb-15'>
                    مقصد <span>ما </span>
                  </h2>
                  <p class='heading-des'>بهترین نقاط ایران مقصد تورهای ماست</p>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col-lg-4 col-md-6 col-sm-6 col-12 mb-30'>
                <div class='desti-item'>
                  <img src={des1} alt='TravelRide' />
                  <div class='desti-detail-hover color-white'>
                    <div class='detail-inner-hover'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و سه شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3 mb-1 mb-md-2'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>3600000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                      <p class='dec'>تور اروپا در 5 روز بسیار عالی</p>
                      <div class='packages-btn mt-30 mt-md-15'>
                        <a class='btn btn-color' href='tour_detail.html'>
                          جزئیات
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class='desti-detail'>
                    <div class='detail-inner'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و 3 شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>500000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-4 col-md-6 col-sm-6 col-12 mb-30'>
                <div class='desti-item'>
                  <img src={des2} alt='TravelRide' />
                  <div class='desti-detail-hover color-white'>
                    <div class='detail-inner-hover'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و سه شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3 mb-1 mb-md-2'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>3600000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                      <p class='dec'>تور اروپا در 5 روز بسیار عالی</p>
                      <div class='packages-btn mt-30 mt-md-15'>
                        <a class='btn btn-color' href='tour_detail.html'>
                          جزئیات
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class='desti-detail'>
                    <div class='detail-inner'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و 3 شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>500000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-4 col-md-6 col-sm-6 col-12 mb-30'>
                <div class='desti-item'>
                  <img src={des3} alt='TravelRide' />
                  <div class='desti-detail-hover color-white'>
                    <div class='detail-inner-hover'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و سه شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3 mb-1 mb-md-2'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>3600000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                      <p class='dec'>تور اروپا در 5 روز بسیار عالی</p>
                      <div class='packages-btn mt-30 mt-md-15'>
                        <a class='btn btn-color' href='tour_detail.html'>
                          جزئیات
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class='desti-detail'>
                    <div class='detail-inner'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و 3 شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>500000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-4 col-md-6 col-sm-6 col-12 mb-30'>
                <div class='desti-item'>
                  <img src={des4} alt='TravelRide' />
                  <div class='desti-detail-hover color-white'>
                    <div class='detail-inner-hover'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و سه شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3 mb-1 mb-md-2'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>3600000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                      <p class='dec'>تور اروپا در 5 روز بسیار عالی</p>
                      <div class='packages-btn mt-30 mt-md-15'>
                        <a class='btn btn-color' href='tour_detail.html'>
                          جزئیات
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class='desti-detail'>
                    <div class='detail-inner'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و 3 شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>500000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-4 col-md-6 col-sm-6 col-12 mb-30'>
                <div class='desti-item'>
                  <img src={des5} alt='TravelRide' />
                  <div class='desti-detail-hover color-white'>
                    <div class='detail-inner-hover'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و سه شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3 mb-1 mb-md-2'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>3600000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                      <p class='dec'>تور اروپا در 5 روز بسیار عالی</p>
                      <div class='packages-btn mt-30 mt-md-15'>
                        <a class='btn btn-color' href='tour_detail.html'>
                          جزئیات
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class='desti-detail'>
                    <div class='detail-inner'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و 3 شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>500000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-4 col-md-6 col-sm-6 col-12 mb-30'>
                <div class='desti-item'>
                  <img src={des6} alt='TravelRide' />
                  <div class='desti-detail-hover color-white'>
                    <div class='detail-inner-hover'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و سه شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3 mb-1 mb-md-2'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>3600000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                      <p class='dec'>تور اروپا در 5 روز بسیار عالی</p>
                      <div class='packages-btn mt-30 mt-md-15'>
                        <a class='btn btn-color' href='tour_detail.html'>
                          جزئیات
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class='desti-detail'>
                    <div class='detail-inner'>
                      <h4 class='title color-white'>اروپا</h4>
                      <div class='tour-info'>
                        <ul>
                          <li>
                            <div class='days'>4 روز و 3 شب</div>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div class='d-flex align-items-center justify-content-between mt-2 mt-md-3'>
                        <div class='price-box '>
                          <div class='price color-white mb-0'>
                            <span>فقط </span>500000
                          </div>
                        </div>
                        {/* <div class='rating-summary-block m-0'>
                          <div class='rating-result' title='70%'>
                            {' '}
                            <span style={{ width: '66%' }}></span>{' '}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* destination-End */}

      {/* latestTweet */}
      <section class='client-bg'>
        <div class='ptb-100'>
          <div class='our-tweets'>
            <div class='container'>
              <div class='row no-gutters'>
                <div class='col-12'>
                  <div class='heading-part text-center mb-30 mb-sm-20'>
                    <h2 class='main_title heading color-white mb-15'>
                      آخرین <span>تورها</span>
                    </h2>
                    <p class='heading-des color-white'>
                      به روز ترین تور های ما در نگاتور
                    </p>
                  </div>
                </div>
              </div>
              <LatestTourSlider />
            </div>
          </div>
        </div>
      </section>
      {/* latestTweet */}

      {/* Special Tours */}
      <section class='ptb-100'>
        <div class='container'>
          <div class='row no-gutters'>
            <div class='col-12'>
              <div class='heading-part text-center mb-30 mb-sm-20'>
                <h2 class='main_title heading mb-15'>
                  تورهای <span>خاص</span>
                </h2>
                <p class='heading-des'>خاص ترین تور های نگاتریپ</p>
              </div>
            </div>
          </div>
          <SpecialTourSlider />
        </div>
      </section>
      {/* Special Tours */}

      {/* recentArticles-start */}
      <section class='pb-100'>
        <div id='blog-section'>
          <div class='container'>
            <div class='row no-gutters'>
              <div class='col-12'>
                <div class='heading-part text-center mb-30 mb-sm-20'>
                  <h2 class='main_title heading mb-15'>
                    مقالات <span>اخیر</span>
                  </h2>
                  <p class='heading-des'>مقاله هایی درباره تور های ایرانی</p>
                </div>
              </div>
            </div>
            <RecentTourSLider />
          </div>
        </div>
      </section>
      {/* recentArticles-end */}
    </>
  )
}

export default Home
