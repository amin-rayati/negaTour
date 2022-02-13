import React from 'react'
import BreadCrumb from '../../Component/BreadCrumb/BreadCrumb'
import { useLocation } from 'react-router-dom'
import AboutSlider from '../../Component/Sliders/AboutSlider/AboutSlider'
import AboutAdviserSlider from '../../Component/Sliders/AboutSlider/AboutAdviserSlider'
import about4 from '../../Assets/images/about-sub-4.jpg'
import about2 from '../../Assets/images/about-sub-2.jpg'

import brand1 from '../../Assets/images/brand1.png'
import brand2 from '../../Assets/images/brand2.png'
import brand3 from '../../Assets/images/brand3.png'
import brand4 from '../../Assets/images/brand4.png'
import brand5 from '../../Assets/images/brand5.png'
import brand6 from '../../Assets/images/brand6.png'
import brand7 from '../../Assets/images/brand7.png'
import brand8 from '../../Assets/images/brand8.png'

import logo from '../../Assets/images/owner-logo.png'
const About = () => {
  const { pathname } = useLocation()
  const path = pathname.split('/')[1]
  return (
    <>
      {/* breadcrumb */}
      <section className='bread bread-banner'>
        <div className='container'>
          <div className='bread-detail text-center d-md-flex align-items-center justify-content-between'>
            <div className='bread-crumb'>
              <BreadCrumb path={path} />
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}

      {/* <!-- about-part Start --> */}
      <section id='about' class='ptb-100'>
        <div class='container'>
          <div class='container'>
            <div class='row'>
              <div class='col-xl-6 col-12'>
                <div class='about-detail'>
                  <div class='row'>
                    <div class='col-12'>
                      <div class='heading-part mb-30 mb-sm-20'>
                        <h2 class='main_title heading'>
                          What <span>We Do</span>
                        </h2>
                      </div>
                    </div>
                    <div class='col-12 mb-30'>
                      <div class='heading-part-desc'>
                        <h3 class='heading'>
                          Nullam vel sollicitudin diam proin congue lacinia
                          tortor vel vulputate morbi et mauris nec risus id at
                          odio.
                        </h3>
                      </div>
                      <p class='m-0'>
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos nunc cursus purus
                        sed elit aliquet aliquet luctus pulvinar tortor, cras
                        malesuada mi gravida, vehiculaue vitae, congue erat,
                        aenean ullamcorper nibh nec sem interdum
                      </p>
                    </div>
                    <div class='col-12'>
                      <div class='image-part center-xs'>
                        {' '}
                        <img alt='TravelRide' src={about4} />{' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-12 mt-30'>
                    <h3 class='heading-h3'>
                      What's the secret of the TravelRide ?
                    </h3>
                    <p class='m-0'>
                      Lorem ipsum dolor sit amet,Lorem ipsum Lorem ipsum dolor
                      sit amet, cor sit amet, consectetur adipiscing elit. etiam
                      nec suscipi adipiscing elit. etiam nec suscipit arcu,
                      feugiat fermentum ex cras nec scelerisque magna, eu
                      dignissim ante. mauris ullamcorper neque sed dapibus
                      scelerisque, vestibulum et auctor odio. Fusce dapibus
                      tortor vel quam venenatis rutrum fusce sagittis mauris
                      nisi, eu vulputate nisl lacinia faucibus.
                    </p>
                  </div>
                </div>
              </div>
              <div class='col-xl-6 col-12'>
                <div class='responsive-part mt-lg-30'>
                  <div class='row'>
                    <div class='col-sm-12 partner-detail-main'>
                      <div class='heading-part mb-30 mb-sm-20'>
                        <h2 class='main_title heading'>
                          Our <span>Partners</span>
                        </h2>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet,Lorem ipsum Lorem ipsum dolor
                        sit amet, cor sit amet, consectetur adipiscing elit.
                        etiam nec suscipi adipiscing elit. etiam nec suscipit
                        arcu, feugiat fermentum ex cras nec scelerisque magna,
                        eu dignissim ante. mauris ullamcorper neque sed dapibus
                        scelerisque, vestibulum et auctor odio. Fusce dapibus
                        tortor vel quam venenatis rutrum fusce sagittis mauris
                        nisi, eu vulputate nisl lacinia faucibus.
                      </p>
                    </div>
                    <div class='col-sm-12'>
                      <div class='partner-block partner-style2 light-gray-bg'>
                        <ul>
                          <li>
                            <a href='javascript:void(0)'>
                              <span>
                                <img src={brand1} alt='TravelRide' />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <span>
                                <img src={brand2} alt='TravelRide' />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <span>
                                <img src={brand3} alt='TravelRide' />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <span>
                                <img src={brand4} alt='TravelRide' />
                              </span>
                            </a>
                          </li>
                          <li class='owner-logo '>
                            <a href='javascript:void(0)'>
                              <span>
                                <img src={logo} alt='TravelRide' />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <span>
                                <img src={brand5} alt='TravelRide' />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <span>
                                <img src={brand6} alt='TravelRide' />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <span>
                                <img src={brand7} alt='TravelRide' />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <span>
                                <img src={brand8} alt='TravelRide' />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about-part End --> */}

      {/* <!-- about-part-2 Start --> */}
      <section class=' bg-pattern2 dark-bg ptb-100'>
        <div class='container'>
          <div class='about-part-2'>
            <div class='row  align-items-center'>
              <div class='col-lg-6 offset-lg-1 order-lg-2'>
                <div class='image-part mb-md-30'>
                  <img alt='TravelRide' src={about2} />
                  <div class='video-bg'>
                    <div class='video-delail text-center'>
                      <div class='video-block'>
                        <a
                          class='popup-youtube'
                          href='https://vimeo.com/63502573'
                        >
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-5 order-lg-1'>
                <div class=''>
                  <div class='heading-part mb-30 mb-sm-20'>
                    <h2 class='main_title heading'>
                      Our <span>Mission</span>
                    </h2>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here..
                  </p>

                  <p class='m-0'>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about-part-2 End --> */}

      {/* <!--Testimonial style-01 Block Start --> */}
      <section class='style-01'>
        <div class='client-bg '>
          <div class='ptb-100'>
            <div class='container'>
              <div class='client-main testimonial-slider'>
                <div class='client-inner text-center'>
                  <div id='client' class='client-slider owl-carousel'>
                    <AboutSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Testimonial style-01 Block End -->  */}

      {/* <!--team-part Start --> */}

      <section id='team' class='ptb-100'>
        <div class='container'>
          <div class='team-part'>
            <div class='row no-gutters'>
              <div class='col-12'>
                <div class='heading-part text-center mb-30 mb-sm-20'>
                  <h2 class='main_title heading mb-15'>
                    Professional <span>Advisor</span>
                  </h2>
                  <p class='heading-des'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class='owl-slider team-slider'>
              <div class='row'>
                <div class='owl-carousel  our-team '>
                  <AboutAdviserSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--team-part End --> */}
    </>
  )
}

export default About
