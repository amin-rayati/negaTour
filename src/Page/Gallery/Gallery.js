import React from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrump from '../../Component/BreadCrumb/BreadCrumb'

import a1 from '../../Assets/images/gallery/gallery_img_16.jpg'
import a2 from '../../Assets/images/gallery/gallery_img_17.jpg'
import a3 from '../../Assets/images/gallery/gallery_img_18.jpg'
import a4 from '../../Assets/images/gallery/gallery_img_19.jpg'
import a5 from '../../Assets/images/gallery/gallery_img_20.jpg'
import a6 from '../../Assets/images/gallery/gallery_img_21.jpg'
import a7 from '../../Assets/images/gallery/gallery_img_22.jpg'
import a8 from '../../Assets/images/gallery/gallery_img_23.jpg'
import a9 from '../../Assets/images/gallery/gallery_img_24.jpg'
import a10 from '../../Assets/images/gallery/gallery_img_25.jpg'
import a11 from '../../Assets/images/gallery/gallery_img_26.jpg'
import a12 from '../../Assets/images/gallery/gallery_img_27.jpg'
import a13 from '../../Assets/images/gallery/gallery_img_28.jpg'

const Gallery = () => {
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

      {/* <!--gallery Block Start --> */}
      <section class='gallery-area ptb-100'>
        <div id='portfolio'>
          <div class='container'>
            <div class='row no-gutters'>
              <div class='col-12'>
                <div class='heading-part text-center mb-30 mb-sm-20'>
                  <h2 class='main_title heading mb-15'>
                    Gallery <span>Masonry</span>{' '}
                  </h2>
                  <p class='heading-des'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class='text-center'>
              <div class='tab-bar mb-30'>
                <ul class='portfolio-filter'>
                  <li>
                    <a
                      class='btn active'
                      href='javascript:void(0)'
                      data-filter='*'
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      class='btn'
                      href='javascript:void(0)'
                      data-filter='.tours'
                    >
                      Tours
                    </a>
                  </li>
                  <li>
                    <a
                      class='btn'
                      href='javascript:void(0)'
                      data-filter='.cruises'
                    >
                      Cruises
                    </a>
                  </li>
                  <li>
                    <a
                      class='btn'
                      href='javascript:void(0)'
                      data-filter='.flights'
                    >
                      Flights
                    </a>
                  </li>
                  <li>
                    <a
                      class='btn'
                      href='javascript:void(0)'
                      data-filter='.hotels'
                    >
                      Hotels
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='grid'>
              <div class='row isotope'>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_16.jpg'
                      data-caption='Showing image 16'
                    >
                      <img alt='TravelRide' src={a1} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>Japan - Tokyo</h3>
                            <div class='gallery-card-subtitle'>
                              Honeymoon tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 tours'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_17.jpg'
                      data-caption='Showing image 17'
                    >
                      <img alt='TravelRide' src={a2} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>Singapore</h3>
                            <div class='gallery-card-subtitle'>
                              Mountain tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 cruises'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_18.jpg'
                      data-caption='Showing image 18'
                    >
                      <img alt='TravelRide' src={a3} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>
                              United Kingdom - London
                            </h3>
                            <div class='gallery-card-subtitle'>
                              london bridge
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 tours'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_19.jpg'
                      data-caption='Showing image 19'
                    >
                      <img alt='TravelRide' src={a4} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>Spain - Madrid</h3>
                            <div class='gallery-card-subtitle'>
                              Mountain tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 tours'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_20.jpg'
                      data-caption='Showing image 20'
                    >
                      <img alt='TravelRide' src={a5} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>Italy - Rome</h3>
                            <div class='gallery-card-subtitle'>Colosseum</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 tours'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_21.jpg'
                      data-caption='Showing image 21'
                    >
                      <img alt='TravelRide' src={a6} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>Spain - Madrid</h3>
                            <div class='gallery-card-subtitle'>
                              Mountain tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 cruises'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_22.jpg'
                      data-caption='Showing image 22'
                    >
                      <img alt='TravelRide' src={a7} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>Italy - Rome</h3>
                            <div class='gallery-card-subtitle'>Colosseum</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 flights'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_23.jpg'
                      data-caption='Showing image 23'
                    >
                      <img alt='TravelRide' src={a8} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>France - Paris</h3>
                            <div class='gallery-card-subtitle'>
                              Eiffel tower
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 flights'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_24.jpg'
                      data-caption='Showing image 24'
                    >
                      <img alt='TravelRide' src={a9} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>Kenya - Nairobi</h3>
                            <div class='gallery-card-subtitle'>
                              Safaris Park
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 flights'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_25.jpg'
                      data-caption='Showing image 25'
                    >
                      <img alt='TravelRide' src={a10} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>UAE - Abu Dhabi</h3>
                            <div class='gallery-card-subtitle'>Sea tours</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 hotels'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_26.jpg'
                      data-caption='Showing image 26'
                    >
                      <img alt='TravelRide' src={a11} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>Italy - Rome</h3>
                            <div class='gallery-card-subtitle'>Sea tours</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 hotels'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_27.jpg'
                      data-caption='Showing image 27'
                    >
                      <img alt='TravelRide' src={a12} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>Japan - Tokyo</h3>
                            <div class='gallery-card-subtitle'>
                              Honeymoon tours
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='col-lg-3 col-sm-6 col-12 grid-item mb-30 hotels'>
                  <div class='gallery-card'>
                    <a
                      class='d-block'
                      data-fancybox='gallery'
                      href='images/gallery/gallery_img_28.jpg'
                      data-caption='Showing image 28'
                    >
                      <img alt='TravelRide' src={a13} />
                      <div class='gallery-detail'>
                        <div class='gallery-detail-inner'>
                          <div class='inner-detail'>
                            <h3 class='gallery-card-title'>
                              India - New Delhi
                            </h3>
                            <div class='gallery-card-subtitle'>Taj Mahal</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--gallery Block End --> */}
    </>
  )
}

export default Gallery
