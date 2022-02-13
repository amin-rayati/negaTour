import { React, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'
import Breadcrump from '../../Component/BreadCrumb/BreadCrumb'
import ServiceSlider from '../../Component/Sliders/ServiceSlider/ServiceSlider'

import counterIcon1 from '../../Assets/images/counter_icon_1.png'
import counterIcon2 from '../../Assets/images/counter_icon_2.png'
import counterIcon3 from '../../Assets/images/counter_icon_3.png'
import counterIcon4 from '../../Assets/images/counter_icon_4.png'

import why from '../../Assets/images/why_choose.jpg'
import why1 from '../../Assets/images/why_choose_icon1.png'
import why2 from '../../Assets/images/why_choose_icon2.png'
import why3 from '../../Assets/images/why_choose_icon3.png'
const Services = () => {
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

      {/* <!--Our Services Start --> */}
      <section id='services-section '>
        <div class='ptb-100'>
          <div class='container'>
            <div class='product-listing'>
              <div class='row no-gutters'>
                <div class='col-12'>
                  <div class='heading-part text-center mb-30 mb-sm-20'>
                    <h2 class='main_title heading mb-15'>
                      خدمات <span>ما</span>
                    </h2>
                    <p class='heading-des'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-12'>
                  <div class='service-part services-part_2'>
                    <div class='row'>
                      <div id='service-part' class='owl-carousel '>
                        <ServiceSlider />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Our Services End --> */}

      {/* <!-- counter Start --> */}
      <section class='pb-100'>
        <div class='counter-area number-counters ptb-100'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-3 col-md-6 col-12 mb-md-30 text-center'>
                <div class='counters-item'>
                  <div class='counter-icon clients'>
                    <img alt='TravelRide' src={counterIcon1} />
                  </div>
                  <div class='count-text'>
                    <span class='counter'>13323</span>
                    <span>+</span>
                  </div>
                  <div class='info-text'>Happy Clients</div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-12 mb-md-30 text-center'>
                <div class='counters-item'>
                  <div class='counter-icon project'>
                    <img alt='TravelRide' src={counterIcon2} />
                  </div>
                  <div class='count-text'>
                    <span class='counter'>14520</span>
                    <span>+</span>
                  </div>
                  <div class='info-text'>Amazing Tours</div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-12 mb-sm-30 text-center'>
                <div class='counters-item'>
                  <div class='counter-icon advisors'>
                    <img alt='TravelRide' src={counterIcon3} />
                  </div>
                  <div class='count-text'>
                    <span class='counter'>11450</span>
                    <span>+</span>
                  </div>
                  <div class='info-text'>Customer Review</div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-12 text-center'>
                <div class='counters-item'>
                  <div class='counter-icon achived'>
                    <img alt='TravelRide' src={counterIcon4} />
                  </div>
                  <div class='count-text'>
                    <span class='counter'>15250</span>
                    <span>+</span>
                  </div>
                  <div class='info-text'>Tour Booking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- counter End --> */}

      {/* <!-- Why Choose Us section start --> */}
      <section class='why-choose pb-100'>
        <div class='container'>
          <div class='why-choose-part'>
            <div class='row align-items-center'>
              <div class='col-xl-5 col-lg-6 col-sm-10'>
                <div class='why-choose-img text-center  mb-md-30'>
                  <img class='radius-5px' src={why} alt='TravelRide' />
                </div>
              </div>
              <div class='col-xl-6 col-lg-6 col-12 offset-xl-1 offset-lg-0 offset-sm-1'>
                <div class='row no-gutters'>
                  <div class='col-12'>
                    <div class='heading-part mb-30 mb-sm-20'>
                      <h2 class='main_title heading mb-15'>
                        Why Choose <span>TravelRide</span>{' '}
                      </h2>
                      <p class='heading-des'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>
                    <div class='services-box why-choose-box mb-md-30'>
                      <div class='app-inner-box '>
                        <div class='why-choose-icon services-icon icon1'>
                          <img alt='TravelRide' src={why1} />
                        </div>
                        <div class='why-choose-details'>
                          <h3 class='why-choose-title'>Safe & Secure</h3>
                          <p class='app-des m-0'>
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as
                            using 'Content here.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class='services-box why-choose-box mb-md-30'>
                      <div class='app-inner-box '>
                        <div class='why-choose-icon services-icon icon2'>
                          <img alt='TravelRide' src={why2} />
                        </div>
                        <div class='why-choose-details'>
                          <h3 class='why-choose-title'>Passionate Approach</h3>
                          <p class='app-des m-0'>
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as
                            using 'Content here.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class='services-box why-choose-box mb-0'>
                      <div class='app-inner-box '>
                        <div class='why-choose-icon services-icon icon3'>
                          <img alt='TravelRide' src={why3} />
                        </div>
                        <div class='why-choose-details'>
                          <h3 class='why-choose-title'>In bussines</h3>
                          <p class='app-des m-0'>
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as
                            using 'Content here.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Why Choose Us section end --> */}
    </>
  )
}

export default Services
