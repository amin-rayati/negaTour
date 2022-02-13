import { React, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'
import Breadcrump from '../../Component/BreadCrumb/BreadCrumb'
import pac1 from '../../Assets/images/packages_img_1.jpg'
const Tour = () => {
  const [grid, setGrid] = useState(true)
  const { pathname } = useLocation()
  const path = pathname.split('/')[1]
  return (
    <>
      {/* <!-- Inner Page Banner STRAT --> */}
      <section class='inner-banner '>
        <div class=' tour-search'>
          <div class=' main-form tour-search-detail'>
            <div class='container'>
              <div class='search-form-wrapper'>
                <form class='main-form' action='tour_grid_sticky.html#'>
                  <div class='row align-items-end justify-content-center'>
                    <div class='form-group col-xl-3 col-md-6 col-12'>
                      <div class='input-inner mb-3 mb-xl-0'>
                        <label>Your Destinationss</label>
                        <div class='input-box'>
                          <div class='input-icon'>
                            <span>
                              <FaMapMarkerAlt />
                            </span>
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
                            <span>
                              <FaCalendar />
                            </span>
                          </div>
                          <input
                            id='tour-start-date'
                            class='form-control datepicker datepick'
                            type='text'
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
                            <span>
                              <FaCalendar />
                            </span>
                          </div>
                          <input
                            id='tour-start-end'
                            class='form-control datepicker datepick'
                            type='text'
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
        </div>
      </section>
      {/* <!-- Inner Page Banner END --> */}
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

      <section class='ptb-100'>
        <div class='container'>
          <div class='sticky-wrapper'>
            <div class='row m-0' style={{ justifyContent: 'space-around' }}>
              <div
                id='sidebar'
                class='col-xl-3 col-lg-3 mb-md-40 p-0 static-sidebar'
              >
                <div class='sidebar__inner'>
                  <div class='sidebar-block sidebar-block-1 pt-sm-60 mb-md-30'>
                    <div class='box-shadow radius-5px p-25 p-xs-15'>
                      <div class='sidebar-box listing-box'>
                        {' '}
                        <span class='opener plus'></span>
                        <div class='sidebar-title'>
                          <h3>
                            <span>Categories</span>
                          </h3>
                        </div>
                        <div class='sidebar-contant pt-3'>
                          <div
                            id='accordion'
                            class='accordion  side-categories'
                          >
                            <ul id='categories'>
                              <li>
                                <div class='card'>
                                  <a
                                    class='categorie-title'
                                    data-toggle='collapse'
                                    href='tour_grid_sticky.html#asia'
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
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        View all
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        India - New Delhi
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        China - Beijing
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Indonesia - Jakarta
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Japan - Tokyo
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Maldives - Male
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Singapore - Singapore
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Thailand - Bangkok
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
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
                                    href='tour_grid_sticky.html#europe'
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
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        View all
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        United Kingdom - London
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Germany - Berlin
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Switzerland - Bern
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Italy - Rome
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Spain - Madrid
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Germany - Berlin
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        France - Paris
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
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
                                    href='tour_grid_sticky.html#noarth_america'
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
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        View all
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        USA - Washington
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Canada - Ottawa
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Mexico - Mexico City
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Panama - Panama City
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Greenland - Nuuk
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Jamaica - Kingston
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Dominica - Roseau
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
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
                                    href='tour_grid_sticky.html#south_america'
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
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        View all
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Brazil - Brazil
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Argentina - Buenos Aires
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Colombia - Bogota
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Paraguay - Asuncion
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Peru - Lima
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Guyana - Georgetown
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Venezuela - Caracas
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
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
                                    href='tour_grid_sticky.html#africa'
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
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        View all
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Egypt - Cairo
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        South Africa - Pretoria
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Zambia - Lusaka
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Morocco - Rabat
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Kenya - Nairobi
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Swaziland - Mbabane
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Eritrea - Asmara
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
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
                                    href='tour_grid_sticky.html#australia'
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
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        View all
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Australia - Canberra
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Fiji - Suva
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Kiribati - Tarawa
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        NewZealand - Hamilton
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Palau - Koror
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Samoa - Apia
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
                                        Micronesia - Palikir
                                      </a>
                                    </li>
                                    <li>
                                      <a href='tour_grid_sticky.html#javascript:void(0)'>
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
                      <div class='sidebar-box filters'>
                        {' '}
                        <span class='opener plus'></span>
                        <div class='sidebar-title'>
                          <h3>Price range</h3>
                        </div>
                        <div class='sidebar-contant pt-3'>
                          <div class='price-range'>
                            <input class='price-txt' type='text' id='amount' />
                            <div id='slider-range'></div>
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
                            <span>Ratings</span>
                          </h3>
                        </div>
                        <div class='sidebar-contant pt-3'>
                          <div class='filter-checkboxs'>
                            <label class='custom-control custom-checkbox mb-2'>
                              <input
                                type='checkbox'
                                class='custom-control-input'
                                name='checkbox3'
                                value='option3'
                              />
                              <span class='custom-control-label star-rating'>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='color-yellow mr-2'>
                                  <i class='fa fa-star'></i>
                                </span>{' '}
                                Great
                              </span>
                            </label>
                            <label class='custom-control custom-checkbox mb-2'>
                              <input
                                type='checkbox'
                                class='custom-control-input'
                                name='checkbox3'
                                value='option3'
                              />
                              <span class='custom-control-label star-rating'>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='mr-2 text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>{' '}
                                Very Good
                              </span>
                            </label>
                            <label class='custom-control custom-checkbox mb-2'>
                              <input
                                type='checkbox'
                                class='custom-control-input'
                                name='checkbox3'
                                value='option3'
                              />
                              <span class='custom-control-label star-rating'>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted mr-2'>
                                  <i class='fa fa-star'></i>
                                </span>{' '}
                                Good
                              </span>
                            </label>
                            <label class='custom-control custom-checkbox mb-2'>
                              <input
                                type='checkbox'
                                class='custom-control-input'
                                name='checkbox3'
                                value='option3'
                              />
                              <span class='custom-control-label star-rating'>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted mr-2'>
                                  <i class='fa fa-star'></i>
                                </span>{' '}
                                Average
                              </span>
                            </label>
                            <label class='custom-control custom-checkbox mb-2'>
                              <input
                                type='checkbox'
                                class='custom-control-input'
                                name='checkbox3'
                                value='option3'
                              />
                              <span class='custom-control-label star-rating'>
                                <span class='color-yellow'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted mr-2'>
                                  <i class='fa fa-star'></i>
                                </span>{' '}
                                Bad
                              </span>
                            </label>
                            <label class='custom-control custom-checkbox mb-0'>
                              <input
                                type='checkbox'
                                class='custom-control-input'
                                name='checkbox3'
                                value='option3'
                              />
                              <span class='custom-control-label star-rating'>
                                <span class='text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted'>
                                  <i class='fa fa-star'></i>
                                </span>
                                <span class='text-muted mr-2'>
                                  <i class='fa fa-star'></i>
                                </span>{' '}
                                No Rating
                              </span>
                            </label>
                          </div>
                          <div class='filter-btn mt-40'>
                            <a
                              href='javascript:void(0)'
                              class='btn btn-color w-100'
                            >
                              Apply Filter
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='content' class='col-xl-8 col-lg-8 p-0 pl-30 pl-md-0'>
                <div class='shorting mb-30 mb-xs-15'>
                  <div class='row'>
                    <div class='col-12'>
                      <div class='view'>
                        <div
                          class={
                            grid
                              ? 'list-types grid active '
                              : 'list-types grid  '
                          }
                        >
                          <a>
                            <div
                              class='grid-icon list-types-icon'
                              onClick={() => {
                                setGrid(true)
                              }}
                            ></div>
                          </a>
                        </div>
                        <div
                          class={
                            grid
                              ? 'list-types grid  '
                              : 'list-types grid active '
                          }
                        >
                          <a>
                            <div
                              class='list-icon list-types-icon'
                              onClick={() => {
                                setGrid(false)
                              }}
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div class='short-by float-right-lg float-right'>
                        <span>Sort By :</span>
                        <div class='select-item'>
                          <div class=' select-dropdown '>
                            <div class='drop-option'>
                              <div class='drop-list'>
                                <span>Name : Z To A</span>
                                <div class='dropdown-arrow'>
                                  <i class='fa fa-angle-down'></i>
                                </div>
                              </div>
                              <div
                                class='select-option'
                                style={{ display: ' none' }}
                              >
                                <a href='tour_grid_sticky.html#'>New Tour</a>
                                <a href='tour_grid_sticky.html#'>
                                  Name : Z To A
                                </a>
                                <a href='tour_grid_sticky.html#'>
                                  Price : Low &gt; High
                                </a>
                                <a href='tour_grid_sticky.html#'>
                                  Price : High &gt; Low
                                </a>
                                <a href='tour_grid_sticky.html#'>
                                  Rating : Highest
                                </a>
                                <a href='tour_grid_sticky.html#'>
                                  Rating : Lowest
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class={
                    grid
                      ? 'product-listing grid-type'
                      : 'product-listing list-type'
                  }
                >
                  <div class='inner-listing'>
                    <div class='row'>
                      <div class='col-md-6 col-12 item-width mb-30'>
                        <div class='product-item box-shadow card packages-box overflow-hidden'>
                          <figure>
                            <div class='package-img'>
                              <a href='tour_detail.html'>
                                <img
                                  class='grid-img'
                                  alt='TravelRide'
                                  src={pac1}
                                />
                                <div class='effect'></div>
                              </a>
                            </div>
                            <figcaption>
                              <div class='card-body p-25 p-xs-15'>
                                <div class='packages-details'>
                                  <h4>
                                    <a href='tour_detail.html' class='title'>
                                      USA Tour
                                    </a>
                                  </h4>
                                  <div class='rating-summary-block'>
                                    <span class='label-review'>10 Reviews</span>
                                  </div>
                                  <div class='d-xl-flex align-items-center mt-3 mt-xl-4'>
                                    <div class='tour-info'>
                                      <ul>
                                        <li>
                                          <div class='days'>
                                            <span>
                                              <i class='far fa-clock'></i>
                                            </span>{' '}
                                            4 Days,3 Nights
                                          </div>
                                        </li>
                                        <li>
                                          <div class='places'>
                                            <span>
                                              <i class='fas fa-map-marker-alt'></i>
                                            </span>{' '}
                                            America - 4 Places
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class='price-box ml-xl-auto text-xl-center mt-xl-0 mt-3'>
                                      <div class='price-text mb-1'>Price</div>
                                      <div class='price mb-0'>$750</div>
                                    </div>
                                  </div>
                                  <p class='dec mb-0 mt-3'>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Nunc
                                    cursus libero purus ac congue arcu cursus ut
                                    sed vitae pulvinar massa idporta nequetiam.
                                  </p>
                                  <div class='packages-btn mt-30 mt-xs-20'>
                                    <a
                                      class='btn btn-color mr-1 mr-xl-3'
                                      href='tour_booking.html'
                                    >
                                      Book Now
                                    </a>
                                    <a
                                      class='btn btn-light'
                                      href='tour_detail.html'
                                    >
                                      View Detail
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tour
