import * as React from 'react'
import Logo from '../../Assets/images/logo.png'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import { useProjectContext } from '../../Context/ProjectProvider'
import LoginRegister from '../LoginRegister/LoginRegister'
import { Cookies, useCookies } from 'react-cookie'
import Swal from 'sweetalert2'

import {
  Navbar,
  Nav,
  Tooltip,
  OverlayTrigger,
  NavDropdown,
} from 'react-bootstrap'
const Header = () => {
  const { loginModal, loginModalShow, userData, setUserData } =
    useProjectContext()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const logOut = () => {
    Swal.fire({
      text: 'آیا میخواهید از سیات خارج شوید؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'red',
      cancelButtonText: 'خیر',
      confirmButtonText: 'بله',
    }).then((result) => {
      if (result.isConfirmed) {
        removeCookie('user')
        setUserData(null)
      }
    })
  }

  return (
    <>
      <header className='navbar navbar-custom header' id='header'>
        <div className='navbar-expand'>
          <div className='header-top'>
            <div className='container'>
              <div className='top-line'>
                <div className='row align-items-center '>
                  <div className='col-sm-6 col-12'>
                    <div className='top-right-link float-sm-right d-none d-sm-block'>
                      <ul>
                        {!userData ? (
                          <>
                            <li
                              className='login-icon content'
                              onClick={loginModalShow}
                            >
                              <a title='Login'>
                                <span>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                  >
                                    <path
                                      d='M14.74 15.57h-2.49a.36.36 0 0 1-.36-.36v-1.19a.36.36 0 0 1 .36-.36h2.49a.95.95 0 0 0 .95-.95V7.04a.95.95 0 0 0-.95-.95h-2.49a.36.36 0 0 1-.36-.36V4.55a.36.36 0 0 1 .36-.36h2.49a2.85 2.85 0 0 1 2.85 2.85v5.69c0 1.57-1.28 2.84-2.85 2.84zm-1.39-5.96L8.37 4.63a.72.72 0 0 0-1.22.51v2.85H3.12c-.39 0-.71.32-.71.71v2.85c0 .39.32.71.71.71h4.03v2.85c0 .64.77.95 1.22.5l4.98-4.98c.27-.29.27-.74 0-1.02z'
                                      fill='#fff'
                                    />
                                  </svg>
                                </span>
                                ورود و ثبت نام
                              </a>
                            </li>
                          </>
                        ) : (
                          <NavDropdown
                            title={userData['fname'] + ' ' + userData['lame']}
                            id='collasible-nav-dropdown '
                            style={{
                              right: '0px',
                              borderRadius: '20px',
                              width: 'fit-content',
                            }}
                          >
                            <NavDropdown.Item style={{ textAlign: 'right' }}>
                              داشبورد
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => logOut()}
                              style={{ textAlign: 'right' }}
                            >
                              خروج
                            </NavDropdown.Item>
                          </NavDropdown>
                        )}

                        {loginModal ? <LoginRegister /> : null}

                        {/* <li className='gift-icon'>
                          <a href='index-tour.html#' title='Gift card'>
                            <span>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                              >
                                <path
                                  d='M17.01 16H7.48v-5.85l1.08 1.63c.15.22.45.29.69.14a.5.5 0 0 0 .14-.69l-.8-1.2c.1.02.2.05.31.05.66 0 1.25-.4 1.47-1.07h8.13v5.5c0 .82-.67 1.49-1.49 1.49zm-1-5h-4.05c-.28 0-.5.22-.5.5s.22.5.5.5h4.05c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0 2h-4.05c-.28 0-.5.22-.5.5s.22.5.5.5h4.05c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zM9.47 8.5c0 .46-.51.73-.88.47l-.71-.47.71-.48a.57.57 0 0 1 .79.17.56.56 0 0 1 .09.31zM8.03 7.19l-.55.38V4h9.53c.82 0 1.49.67 1.49 1.5V8h-8.13c-.26-.81-1.14-1.26-1.95-1-.14.05-.27.11-.39.19zM1.5 14.5V9h2.08a1.56 1.56 0 0 0 1.48 1.07 1.06 1.06 0 0 0 .31-.05l-.8 1.2c-.15.23-.09.54.14.7a.5.5 0 0 0 .69-.14l1.08-1.63V16H2.99c-.82 0-1.49-.67-1.49-1.5zm3.87-6.48l.71.48-.71.47c-.38.26-.88-.02-.88-.47 0-.46.5-.73.88-.48zM3.58 8H1.5V5.5c0-.83.67-1.5 1.49-1.5h3.49v3.57l-.56-.38c-.84-.56-2-.19-2.34.81z'
                                  fill-rule='evenodd'
                                  fill='#fff'
                                />
                              </svg>
                            </span>{' '}
                            Gift card
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='header-middle'>
            <div className='container'>
              <div className='row no-gutters align-items-center'>
                <div className='col-lg-9 col-6'>
                  <div className='header-middle-left'>
                    <div className='row no-gutters align-items-center'>
                      <div className='col-lg-2 col-12'>
                        <div className='logo navbar-header float-none-sm'>
                          <a
                            className='navbar-brand page-scroll'
                            href='index.html'
                          >
                            <img alt='TravelRide' src={Logo} />
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-10 col-0'>
                        <div className='overlay'></div>
                        <div
                          id='menu'
                          className='navbar-collapse collapse justify-content-center'
                        >
                          <div className='top-right-link  mobile-link d-block d-sm-none'>
                            <ul>
                              <li className='login-icon content'>
                                <a href='login.html' title='Login'>
                                  <span>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                    >
                                      <path
                                        d='M14.74 15.57h-2.49a.36.36 0 0 1-.36-.36v-1.19a.36.36 0 0 1 .36-.36h2.49a.95.95 0 0 0 .95-.95V7.04a.95.95 0 0 0-.95-.95h-2.49a.36.36 0 0 1-.36-.36V4.55a.36.36 0 0 1 .36-.36h2.49a2.85 2.85 0 0 1 2.85 2.85v5.69c0 1.57-1.28 2.84-2.85 2.84zm-1.39-5.96L8.37 4.63a.72.72 0 0 0-1.22.51v2.85H3.12c-.39 0-.71.32-.71.71v2.85c0 .39.32.71.71.71h4.03v2.85c0 .64.77.95 1.22.5l4.98-4.98c.27-.29.27-.74 0-1.02z'
                                        fill='#fff'
                                      />
                                    </svg>
                                  </span>{' '}
                                  Login
                                </a>
                              </li>
                              <li className='register-icon'>
                                <a href='index-tour.html' title='Register'>
                                  <span>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                    >
                                      <path
                                        d='M9.69 10.46c2.17 0 3.94-1.76 3.94-3.94s-1.76-3.94-3.94-3.94-3.94 1.77-3.94 3.94 1.76 3.94 3.94 3.94zm3.5.87h-1.51a4.75 4.75 0 0 1-1.99.44 4.75 4.75 0 0 1-1.99-.44H6.19c-1.93 0-3.5 1.57-3.5 3.5v.44c0 .72.59 1.31 1.31 1.31h11.38c.72 0 1.31-.59 1.31-1.31v-.44c0-1.93-1.57-3.5-3.5-3.5z'
                                        fill='#fff'
                                      />
                                    </svg>
                                  </span>{' '}
                                  Register
                                </a>
                              </li>
                              {/* <li className='gift-icon'>
                                <a href='index-tour.html#' title='Gift card'>
                                  <span>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                    >
                                      <path
                                        d='M17.01 16H7.48v-5.85l1.08 1.63c.15.22.45.29.69.14a.5.5 0 0 0 .14-.69l-.8-1.2c.1.02.2.05.31.05.66 0 1.25-.4 1.47-1.07h8.13v5.5c0 .82-.67 1.49-1.49 1.49zm-1-5h-4.05c-.28 0-.5.22-.5.5s.22.5.5.5h4.05c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0 2h-4.05c-.28 0-.5.22-.5.5s.22.5.5.5h4.05c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zM9.47 8.5c0 .46-.51.73-.88.47l-.71-.47.71-.48a.57.57 0 0 1 .79.17.56.56 0 0 1 .09.31zM8.03 7.19l-.55.38V4h9.53c.82 0 1.49.67 1.49 1.5V8h-8.13c-.26-.81-1.14-1.26-1.95-1-.14.05-.27.11-.39.19zM1.5 14.5V9h2.08a1.56 1.56 0 0 0 1.48 1.07 1.06 1.06 0 0 0 .31-.05l-.8 1.2c-.15.23-.09.54.14.7a.5.5 0 0 0 .69-.14l1.08-1.63V16H2.99c-.82 0-1.49-.67-1.49-1.5zm3.87-6.48l.71.48-.71.47c-.38.26-.88-.02-.88-.47 0-.46.5-.73.88-.48zM3.58 8H1.5V5.5c0-.83.67-1.5 1.49-1.5h3.49v3.57l-.56-.38c-.84-.56-2-.19-2.34.81z'
                                        fill-rule='evenodd'
                                        fill='#fff'
                                      />
                                    </svg>
                                  </span>{' '}
                                  Gift card
                                </a>
                              </li> */}
                            </ul>
                          </div>
                          <ul id='menu-main' className='nav navbar-nav'>
                            <li className='level'>
                              <NavLink
                                style={(navData) =>
                                  navData.isActive ? { fontSize: '15px' } : null
                                }
                                to='/'
                              >
                                صفحه اصلی
                              </NavLink>
                            </li>
                            <li className='level dropdown'>
                              <span className='opener plus'></span>
                              <NavLink
                                style={(navData) =>
                                  navData.isActive ? { fontSize: '15px' } : null
                                }
                                to='/tour'
                              >
                                تورها
                              </NavLink>
                              {/* <div className='megamenu mobile-sub-menu'>
                                <div className='megamenu-inner-top'>
                                  <ul className='sub-menu-level1'>
                                    <li className='dropdown right-side-dropdown'>
                                      <a href='index-tour.html#'>
                                        <span></span>تورها
                                      </a>
                                      <span className='opener plus'></span>
                                      <div className='megamenu second-sub-menu'>
                                        <ul className='sub-menu-level2'>
                                          <li>
                                            <a href='index-tour.html'>
                                              <span></span>تور های داخلی
                                            </a>
                                          </li>
                                          <li>
                                            <a href='tour_grid.html'>
                                              <span></span>تور های خارجی
                                            </a>
                                          </li>
                                          <li>
                                            <a href='tour_list.html'>
                                              <span></span>لیست تورها
                                            </a>
                                          </li>
                                          <li>
                                            <a href='tour_grid_2.html'>
                                              <span></span>تور های ارزان
                                            </a>
                                          </li>
                                          <li>
                                            <a href='tour_grid_sticky.html'>
                                              <span></span>تور های تفریحی
                                            </a>
                                          </li>
                                          <li>
                                            <a href='tour_full_width.html'>
                                              <span></span>تور های زیارتی
                                            </a>
                                          </li>
                                          <li>
                                            <a href='tour_detail.html'>
                                              <span></span>تور های شمال
                                            </a>
                                          </li>
                                          <li>
                                            <a href='tour_booking.html'>
                                              <span></span>تور های جنوب
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className='dropdown right-side-dropdown'>
                                      <a href='index-tour.html#'>
                                        <span></span>هتل ها
                                      </a>
                                      <span className='opener plus'></span>
                                      <div className='megamenu second-sub-menu'>
                                        <ul className='sub-menu-level2'>
                                          <li>
                                            <a href='index-hotel.html'>
                                              <span></span>هتل های ایران
                                            </a>
                                          </li>
                                          <li>
                                            <a href='hotel_grid.html'>
                                              <span></span>هتل های خارج
                                            </a>
                                          </li>
                                          <li>
                                            <a href='hotel_list.html'>
                                              <span></span>لیست هتل ها
                                            </a>
                                          </li>
                                          <li>
                                            <a href='hotel_grid_2.html'>
                                              <span></span>هتل های پنج ستاره
                                            </a>
                                          </li>
                                          <li>
                                            <a href='hotel_grid_sticky.html'>
                                              <span></span>هتل های ارزان
                                            </a>
                                          </li>
                                          <li>
                                            <a href='hotel_full_width.html'>
                                              <span></span>هتل های بزرگ
                                            </a>
                                          </li>
                                          <li>
                                            <a href='hotel_detail.html'>
                                              <span></span>هتل های شمال
                                            </a>
                                          </li>
                                          <li>
                                            <a href='hotel_booking.html'>
                                              <span></span>هتل های جنوب
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div> */}
                            </li>
                            <li className='level'>
                              <NavLink
                                style={(navData) =>
                                  navData.isActive ? { fontSize: '15px' } : null
                                }
                                to='/about'
                              >
                                درباره ما
                              </NavLink>
                            </li>

                            <li className='level dropdown'>
                              {' '}
                              <span className='opener plus'></span>
                              <NavLink
                                style={(navData) =>
                                  navData.isActive ? { fontSize: '15px' } : null
                                }
                                to='/gallery'
                              >
                                گالری
                              </NavLink>
                              {/* <div className='megamenu mobile-sub-menu'>
                                <div className='megamenu-inner-top'>
                                  <ul className='sub-menu-level1'>
                                    <li>
                                      <a href='gallery.html'>
                                        <span></span>Gallery Grid
                                      </a>
                                    </li>
                                    <li>
                                      <a href='gallery_grid_tab.html'>
                                        <span></span>Gallery Grid Tab
                                      </a>
                                    </li>
                                    <li>
                                      <a href='gallery_masonry.html'>
                                        <span></span>gallery Masonry
                                      </a>
                                    </li>
                                    <li>
                                      <a href='gallery_masonry_tab.html'>
                                        <span></span>gallery Masonry Tab
                                      </a>
                                    </li>
                                    <li>
                                      <a href='gallery_no_spacing.html'>
                                        <span></span>gallery No Spacing
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div> */}
                            </li>
                            <li className='level dropdown'>
                              {' '}
                              <span className='opener plus'></span>{' '}
                              <span className='opener plus'></span>
                              <NavLink
                                style={(navData) =>
                                  navData.isActive ? { fontSize: '15px' } : null
                                }
                                to='/services'
                              >
                                خدمات
                              </NavLink>
                              {/* <div className='megamenu mobile-sub-menu'>
                                <div className='megamenu-inner-top'>
                                  <ul className='sub-menu-level1'>
                                    <li>
                                      <a href='services.html'>
                                        <span></span>Services
                                      </a>
                                    </li>
                                    <li>
                                      <a href='services_2.html'>
                                        <span></span>Services 2
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div> */}
                            </li>
                            <li className='level dropdown'>
                              {' '}
                              <span className='opener plus'></span>
                              <NavLink
                                style={(navData) =>
                                  navData.isActive ? { fontSize: '15px' } : null
                                }
                                to='/blog'
                              >
                                مجله
                              </NavLink>
                              {/* <div className='megamenu mobile-sub-menu'>
                                <div className='megamenu-inner-top'>
                                  <ul className='sub-menu-level1'>
                                    <li>
                                      <a href='contact.html'>
                                        <span></span>Contact
                                      </a>
                                    </li>
                                    <li className='dropdown'>
                                      <a href='index-tour.html#'>
                                        <span></span>Blog
                                      </a>
                                      <span className='opener plus'></span>
                                      <div className='megamenu second-sub-menu'>
                                        <ul className='sub-menu-level2'>
                                          <li>
                                            <a href='blog.html'>
                                              <span></span>Blog
                                            </a>
                                          </li>
                                          <li>
                                            <a href='blog_full_width.html'>
                                              <span></span>Blog Full Width
                                            </a>
                                          </li>
                                          <li>
                                            <a href='blog_sticky.html'>
                                              <span></span>Blog Sticky Sidebar
                                            </a>
                                          </li>
                                          <li>
                                            <a href='single_blog.html'>
                                              <span></span>Single Blog
                                            </a>
                                          </li>
                                          <li>
                                            <a href='single_blog_sticky.html'>
                                              <span></span>Single Blog Sticky
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li>
                                      <a href='faq.html'>
                                        <span></span>FAQ
                                      </a>
                                    </li>
                                    <li>
                                      <a href='login.html'>
                                        <span></span>Login
                                      </a>
                                    </li>
                                    <li>
                                      <a href='register.html'>
                                        <span></span>Register
                                      </a>
                                    </li>
                                    <li>
                                      <a href='password_recover.html'>
                                        <span></span>recover password
                                      </a>
                                    </li>
                                    <li>
                                      <a href='404_error.html'>
                                        <span></span>404 Error
                                      </a>
                                    </li>
                                    <li>
                                      <a href='coming_soon.html'>
                                        <span></span>Coming Soon
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div> */}
                            </li>
                            <li className='level dropdown'>
                              <span className='opener plus'></span>
                              <NavLink
                                style={(navData) =>
                                  navData.isActive ? { fontSize: '15px' } : null
                                }
                                to='/faq'
                              >
                                سوالات متداول
                              </NavLink>
                            </li>
                            <li className='level'>
                              <NavLink
                                style={(navData) =>
                                  navData.isActive ? { fontSize: '15px' } : null
                                }
                                to='/contact'
                              >
                                تماس با ما
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-6'>
                  <div className='header-middle-right'>
                    <div className='header-contact-info d-none d-lg-block'>
                      <span>
                        <BsFillTelephoneFill />
                      </span>
                      <h3>02632280410</h3>
                      <p className='m-0'>پشتیبانی 24 ساعته</p>
                    </div>
                    <div className='right-side header-right-link'>
                      <ul>
                        <li className='side-toggle'>
                          <button
                            data-target='.navbar-collapse'
                            data-toggle='collapse'
                            className='navbar-toggle'
                            type='button'
                          >
                            <i className='fas fa-bars'></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
