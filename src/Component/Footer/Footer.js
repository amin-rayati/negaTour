import React from 'react'
import sub from '../../Assets/images/subscribe_icon.svg'
import footer from '../../Assets/images/footer-logo.png'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRssSquare,
  FaPinterest,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      {/* footer-start */}
      <div class='newsletter-bg'>
        <div class='container'>
          <div class='newsletter'>
            <div class='newsletter-inner text-center text-lg-left'>
              <div class='row justify-content-center align-items-center'>
                <div class=' col-xl-10 col-12'>
                  <div class='row align-items-center'>
                    <div class='col-xl-6 col-lg-6'>
                      <div class='d-lg-flex align-items-center'>
                        <div class='newsletter-icon'>
                          <img src={sub} alt='TravelRide' />
                        </div>
                        <div class='newsletter-title color-white'>
                          <h2 class='main_title mb-0'>Get Updates & More</h2>
                          <p class='m-0'>Thoughtful thoughts to your inbox</p>
                        </div>
                      </div>
                    </div>
                    <div class='col-xl-6 col-lg-6'>
                      <form>
                        <div class='newsletter-box'>
                          <input type='email' placeholder='Email Here...' />
                          <button title='Subscribe' className='btn btn-color'>
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='footer color-white'>
        <div class='container'>
          <div class='footer-inner'>
            <div class='footer-middle'>
              <div class='row'>
                <div class='col-lg-3 col-md-6 f-col'>
                  <div class='footer-static-block'>
                    <div class='f-logo mb-30 mb-sm-15'>
                      <a href='index.html' class=''>
                        <img src={footer} alt='TravelRide' />
                      </a>
                    </div>
                    <div class='footer-about mb-sm-30'>
                      <p>
                        Lorem khaled ipsum is a major key to success. It’s on
                        you how you want to live your life. Always remember in
                        the jungle there’s a lot of they in.
                      </p>
                      <ul class='social-icon'>
                        <li>
                          <FaFacebookF style={{ color: '#ef6c00' }} />
                        </li>
                        <li>
                          <FaTwitter style={{ color: '#ef6c00' }} />
                        </li>
                        <li>
                          <FaLinkedinIn style={{ color: '#ef6c00' }} />
                        </li>
                        <li>
                          <FaRssSquare style={{ color: '#ef6c00' }} />
                        </li>
                        <li>
                          <FaPinterest style={{ color: '#ef6c00' }} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='col-lg-3 col-md-6 f-col'>
                  <div class='footer-static-block'>
                    {' '}
                    <span class='opener plus'></span>
                    <h3 class='title'>
                      Our Services<span></span>
                    </h3>
                    <ul class='footer-block-contant link'>
                      <li>
                        <a href='index-tour.html#'>Home</a>
                      </li>
                      <li>
                        <a href='index-tour.html#'>Services</a>
                      </li>
                      <li>
                        <a href='index-tour.html#'>Privacy Policy</a>
                      </li>
                      <li>
                        <a href='index-tour.html#'>Support Forum</a>
                      </li>
                      <li>
                        <a href='index-tour.html#'>Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='col-lg-3 col-md-6 f-col'>
                  <div class='footer-static-block'>
                    {' '}
                    <span class='opener plus'></span>
                    <h3 class='title'>
                      Tags<span></span>
                    </h3>
                    <div class='footer-block-contant'>
                      <ul class='tagcloud'>
                        <li>
                          <a href='javascript:void(0)'>Flights</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Traveling</a>
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
                          <a href='javascript:void(0)'>Tours</a>
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
                </div>
                <div class='col-lg-3 col-md-6 f-col'>
                  <div class='footer-static-block'>
                    {' '}
                    <span class='opener plus'></span>
                    <h3 class='title'>
                      Contact Info<span></span>
                    </h3>
                    <div class=' footer-block-contant '>
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
                          <p class='address'>
                            150-A Appolo aprtment, opp. Hopewell Junction, Allen
                            st Road, new york-405001.
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
                          <a href='index-tour.html#'>+0 123-456-7890</a>
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
                          <a href='index-tour.html#'>info@example.com</a>
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
                          <a href='index-tour.html#'>travelrideworld.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='footer-bottom text-center'>
              <div class='copy-right-bg'>
                <div class='container'>
                  <div class='row text-center'>
                    <div class='col-12'>
                      <div class='copy-right '>
                        © 2021 All Rights Reserved. Design By{' '}
                        <a href='javascript:void(0)'>TravelRide</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='site-link pb-30'>
                <ul>
                  <li>
                    <a href='javascript:void(0)'>About Us</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Contact Us</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Customer</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Service</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Privacy</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Policy</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Accessibility</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>Directory</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer-End */}
    </>
  )
}

export default Footer
