import React from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrump from '../../Component/BreadCrumb/BreadCrumb'
import blog1 from '../../Assets/images/blog/blog_img1_md.jpg'
import blog2 from '../../Assets/images/blog/blog_img2_md.jpg'
import blog3 from '../../Assets/images/blog/blog_img3_md.jpg'
import { FaMapMarkerAlt, FaCalendar, FaUserAlt } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
const Blog = () => {
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

      {/* <!--Blog Block Start --> */}
      <section class='blog ptb-100'>
        <div class='container'>
          <div class='row'>
            <div class='col-xl-4 col-lg-4'>
              <div class='sidebar-block sidebar-block-1 mt-md-30'>
                <div class='box-shadow radius-5px p-25 p-xs-15'>
                  <div class='sidebar-box mb-30 mb-sm-15'>
                    <form>
                      <div class='search-box'>
                        <input
                          type='text'
                          placeholder='Search here...'
                          class='input-text'
                        />
                        <button class='search-btn'></button>
                      </div>
                    </form>
                  </div>
                  <div class='sidebar-box listing-box'>
                    {' '}
                    <span class='opener plus'></span>
                    <div class='sidebar-title'>
                      <h3>
                        <span>Categories</span>
                      </h3>
                    </div>
                    <div class='sidebar-contant pt-3'>
                      <div id='accordion' class='accordion  side-categories'>
                        <ul id='categories'>
                          <li>
                            <div class='card'>
                              <a
                                class='categorie-title'
                                data-toggle='collapse'
                                href='blog.html#asia'
                                data-parent='#accordion'
                              >
                                {' '}
                                Asia{' '}
                              </a>
                              <ul
                                id='asia'
                                class='collapse sub-cate show pl-15'
                                data-parent='#accordion'
                              >
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    View all
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    India - New Delhi
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    China - Beijing
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Indonesia - Jakarta
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Japan - Tokyo
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Maldives - Male
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Singapore - Singapore
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Thailand - Bangkok
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    UAE - Abu Dhabi
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div class='card'>
                              <a
                                class='categorie-title collapsed'
                                data-toggle='collapse'
                                href='blog.html#europe'
                                data-parent='#accordion'
                              >
                                {' '}
                                Europe{' '}
                              </a>
                              <ul
                                id='europe'
                                class='collapse sub-cate pl-15'
                                data-parent='#accordion'
                              >
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    View all
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    United Kingdom - London
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Germany - Berlin
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Switzerland - Bern
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Italy - Rome
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Spain - Madrid
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Germany - Berlin
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    France - Paris
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Ukraine - Kyiv
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div class='card'>
                              <a
                                class='categorie-title collapsed'
                                data-toggle='collapse'
                                href='blog.html#noarth_america'
                                data-parent='#accordion'
                              >
                                {' '}
                                Noarth America{' '}
                              </a>
                              <ul
                                id='noarth_america'
                                class='collapse sub-cate pl-15'
                                data-parent='#accordion'
                              >
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    View all
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    USA - Washington
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Canada - Ottawa
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Mexico - Mexico City
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Panama - Panama City
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Greenland - Nuuk
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Jamaica - Kingston
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Dominica - Roseau
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Cuba - Havana
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div class='card'>
                              <a
                                class='categorie-title collapsed'
                                data-toggle='collapse'
                                href='blog.html#south_america'
                                data-parent='#accordion'
                              >
                                {' '}
                                South America{' '}
                              </a>
                              <ul
                                id='south_america'
                                class='collapse sub-cate pl-15'
                                data-parent='#accordion'
                              >
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    View all
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Brazil - Brazil
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Argentina - Buenos Aires
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Colombia - Bogota
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Paraguay - Asuncion
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Peru - Lima
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Guyana - Georgetown
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Venezuela - Caracas
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Chile - Santiago
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div class='card'>
                              <a
                                class='categorie-title collapsed'
                                data-toggle='collapse'
                                href='blog.html#africa'
                                data-parent='#accordion'
                              >
                                {' '}
                                Africa{' '}
                              </a>
                              <ul
                                id='africa'
                                class='collapse sub-cate pl-15'
                                data-parent='#accordion'
                              >
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    View all
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Egypt - Cairo
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    South Africa - Pretoria
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Zambia - Lusaka
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Morocco - Rabat
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Kenya - Nairobi
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Swaziland - Mbabane
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Eritrea - Asmara
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Nigeria - Abuja
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div class='card'>
                              <a
                                class='categorie-title collapsed'
                                data-toggle='collapse'
                                href='blog.html#australia'
                                data-parent='#accordion'
                              >
                                {' '}
                                Australia{' '}
                              </a>
                              <ul
                                id='australia'
                                class='collapse sub-cate pl-20'
                                data-parent='#accordion'
                              >
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    View all
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Australia - Canberra
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Fiji - Suva
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Kiribati - Tarawa
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    NewZealand - Hamilton
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Palau - Koror
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Samoa - Apia
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Micronesia - Palikir
                                  </a>
                                </li>
                                <li>
                                  <a href='blog.html#javascript:void(0)'>
                                    Vanuatu - Port Vila
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
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
                  <div class='sidebar-box listing-archive'>
                    {' '}
                    <span class='opener plus'></span>
                    <div class='sidebar-title'>
                      <h3>
                        <span>Archive</span>
                      </h3>
                    </div>
                    <div class='sidebar-contant pt-3'>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>
                            September<span>2020</span>
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            January<span>2021</span>
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            February<span>2021</span>
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            March<span>2021</span>
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            April<span>2021</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class='sidebar-box sidebar-item sidebar-item-wide '>
                    {' '}
                    <span class='opener plus'></span>
                    <div class='sidebar-title'>
                      <h3>
                        <span>Trending News</span>
                      </h3>
                    </div>
                    <div class='sidebar-contant pt-3'>
                      <div class='thumb-box'>
                        <figure>
                          <div class='media-img'>
                            <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                              <img src={blog1} alt='TravelRide' />
                            </a>
                          </div>
                          <figcaption>
                            <div class='thumb-detail-info'>
                              <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                                Aliquam tincidunt ma...
                              </a>
                              <div class='post-info'>15 Mar, 2021</div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div class='thumb-box'>
                        <figure>
                          <div class='media-img'>
                            <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                              <img src={blog2} alt='TravelRide' />
                            </a>
                          </div>
                          <figcaption>
                            <div class='thumb-detail-info'>
                              <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                                Aliquam tincidunt ma...
                              </a>
                              <div class='post-info'>15 Mar, 2021</div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div class='thumb-box'>
                        <figure>
                          <div class='media-img'>
                            <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                              <img src={blog3} alt='TravelRide' />
                            </a>
                          </div>
                          <figcaption>
                            <div class='thumb-detail-info'>
                              <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                                Aliquam tincidunt ma...
                              </a>
                              <div class='post-info'>15 Mar, 2021</div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-xl-8 col-lg-8'>
              <div class='blog-listing'>
                <div class='row'>
                  <div class='col-xl-6 col-12 mb-30'>
                    <div class='blog-item box-shadow'>
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
                      <div class='blog-detail p-25 p-xs-15'>
                        <div class='post-info'>
                          <ul class='d-flex align-items-center '>
                            <li>
                              <div class='post-date'>
                                <span>
                                  <FaCalendar />
                                </span>{' '}
                                Jan 13, 2021
                              </div>
                            </li>
                            <li>
                              <div class='post-user'>
                                <a href='blog.html#'>
                                  <span>
                                    <FaUserAlt />
                                  </span>{' '}
                                  cormon jons
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class='blog-title'>
                          <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                            Content strategy can help engage your customers
                          </a>
                        </div>
                        <p class='dec mb-3'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <a
                          class='read-more'
                          href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                        >
                          Read More <FiChevronLeft />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class='col-xl-6 col-12 mb-30'>
                    <div class='blog-item box-shadow'>
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
                      <div class='blog-detail p-25 p-xs-15'>
                        <div class='post-info'>
                          <ul class='d-flex align-items-center '>
                            <li>
                              <div class='post-date'>
                                <span>
                                  <FaCalendar />
                                </span>{' '}
                                Jan 13, 2021
                              </div>
                            </li>
                            <li>
                              <div class='post-user'>
                                <a href='blog.html#'>
                                  <span>
                                    <FaUserAlt />
                                  </span>{' '}
                                  cormon jons
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class='blog-title'>
                          <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                            Content strategy can help engage your customers
                          </a>
                        </div>
                        <p class='dec mb-3'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <a
                          class='read-more'
                          href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                        >
                          Read More <FiChevronLeft />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class='col-xl-6 col-12 mb-30'>
                    <div class='blog-item box-shadow'>
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
                      <div class='blog-detail p-25 p-xs-15'>
                        <div class='post-info'>
                          <ul class='d-flex align-items-center '>
                            <li>
                              <div class='post-date'>
                                <span>
                                  <FaCalendar />
                                </span>{' '}
                                Jan 13, 2021
                              </div>
                            </li>
                            <li>
                              <div class='post-user'>
                                <a href='blog.html#'>
                                  <span>
                                    <FaUserAlt />
                                  </span>{' '}
                                  cormon jons
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class='blog-title'>
                          <a href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'>
                            Content strategy can help engage your customers
                          </a>
                        </div>
                        <p class='dec mb-3'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <a
                          class='read-more'
                          href='https://aaryaweb.info/html/travelride/tr001/single-blog.html'
                        >
                          Read More <FiChevronLeft />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Blog Block End --> */}
    </>
  )
}

export default Blog
