import React from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrump from '../../Component/BreadCrumb/BreadCrumb'
const ContactUs = () => {
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

      {/* <!-- Map Start  --> */}
      <section class='ptb-100 contact-map'>
        <div class='container'>
          <div class='row'>
            <div class='col-12'>
              <div class='map'>
                <iframe
                  class='map-part'
                  src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319'
                  style={{ border: '0' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Map End  --> */}

      {/* <!-- Contact info block Start  --> */}
      <section class='pb-100  text-center'>
        <div class='container'>
          <div class='contact-info'>
            <div class='row  justify-content-center'>
              <div class='col-md-4 col-sm-6 mb-xs-30'>
                <div class='contact-box'>
                  <div class='card shadow border-0'>
                    <div class='card-body text-center p-30'>
                      <div class='contact-phone-icon mb-30'>
                        <div class='contact-icon icon1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='940 520 40 40'
                            fill='#0ab1e8'
                          >
                            <path d='M971.6 544.8a3.74 3.74 0 0 0-2.9-1.3c-1 0-2 .4-2.9 1.3l-2.7 2.7c-.2-.1-.4-.2-.7-.3-.3-.2-.6-.3-.8-.4-2.5-1.6-4.8-3.7-7-6.3-1.1-1.3-1.8-2.5-2.3-3.6.7-.6 1.3-1.3 2-1.9l.7-.7c1.8-1.8 1.8-4.1 0-5.8l-4.7-4.7c-.8-.8-1.8-1.2-2.8-1.2s-2 .4-2.9 1.2l-2.9 2.9c-1.1 1.1-1.7 2.4-1.8 3.9-.2 2.5.5 4.8 1.1 6.3 1.4 3.7 3.4 7.1 6.5 10.8a41.41 41.41 0 0 0 13.2 10.4c1.9.9 4.5 2 7.4 2.2h.5c2 0 3.6-.7 4.9-2.1.4-.5.9-1 1.5-1.5.4-.3.7-.7 1.1-1.1.8-.9 1.3-1.9 1.3-2.9a3.89 3.89 0 0 0-1.3-2.9l-4.5-5zm3.1 8.9c-.1 0-.1 0 0 0-.3.4-.7.7-1 1-.5.5-1.1 1.1-1.6 1.7-.9.9-1.9 1.3-3.2 1.3h-.4c-2.5-.2-4.8-1.1-6.6-2-4.8-2.3-9-5.6-12.5-9.8-2.9-3.5-4.8-6.7-6.1-10.1-.8-2.1-1.1-3.7-.9-5.3.1-1 .5-1.8 1.2-2.5l2.9-2.9c.4-.4.9-.6 1.3-.6.5 0 1 .3 1.2.6l4.6 4.6c.9.9.9 1.7 0 2.6l-2.8 2.8c-.7.7-.6 1.4-.4 1.9v.1c.6 1.5 1.4 2.8 2.7 4.4h0c2.3 2.9 4.8 5.1 7.5 6.8.3.2.7.4 1 .6s.6.3.8.4c0 0 .1 0 .1.1.3.1.6.2.8.2.7 0 1.1-.4 1.3-.6l2.9-2.9c.3-.3.7-.6 1.3-.6.5 0 1 .3 1.2.6l4.7 4.7c.8 1.1.8 2 0 2.9zm-13.1-24.2c2.2.4 4.2 1.4 5.8 3s2.6 3.6 3 5.8c.1.6.6.9 1.1.9h.2c.6-.1 1-.7.9-1.3-.5-2.7-1.7-5.1-3.7-7s-4.4-3.2-7.1-3.7c-.6-.1-1.2.3-1.3.9s.5 1.3 1.1 1.4zm18.4 8.1c-.8-4.4-2.8-8.4-6-11.6s-7.2-5.3-11.6-6c-.6-.1-1.2.3-1.3.9s.3 1.2.9 1.3c3.9.7 7.5 2.5 10.4 5.4a19.07 19.07 0 0 1 5.4 10.4c.1.6.6.9 1.1.9h.2c.6 0 1-.6.9-1.3z' />
                          </svg>
                        </div>
                      </div>
                      <h3 class='contact-title'>Phone numbers</h3>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>(+00) 458 877 4545</a>
                        </li>
                        <li class='mb-0'>
                          <a href='javascript:void(0)'>(+00) 998 8774 455</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-md-4 col-sm-6 mb-xs-30'>
                <div class='contact-box'>
                  <div class='card shadow border-0'>
                    <div class='card-body text-center p-30'>
                      <div class='contact-mail-icon mb-30'>
                        <div class='contact-icon icon2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='940 525.9 40 28.1'
                          >
                            <path d='M976.5 525.9h-33c-1.9 0-3.5 1.6-3.5 3.5v21.1c0 1.9 1.6 3.5 3.5 3.5h33c1.9 0 3.5-1.6 3.5-3.5v-21.1c0-1.9-1.6-3.5-3.5-3.5zm-.5 2.4l-13.5 13.4c-.7.7-1.5 1-2.5 1s-1.8-.4-2.5-1L944 528.3h32zm-33.7 21.8V530l10.1 10.1-10.1 10zm1.7 1.6l10.1-10.1 1.7 1.7c1.1 1.1 2.6 1.7 4.1 1.7s3-.6 4.1-1.7l1.7-1.7 10.1 10.1H944zm33.7-1.6L967.5 540l10.1-10.1v20.2z' />
                          </svg>
                        </div>
                      </div>
                      <h3 class='contact-title'>Email addresses</h3>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>info@example.com</a>
                        </li>
                        <li class='mb-0'>
                          <a href='javascript:void(0)'>info@example.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-md-4 col-sm-6'>
                <div class='contact-box'>
                  <div class='card shadow border-0'>
                    <div class='card-body text-center p-30'>
                      <div class='contact-open-icon mb-30'>
                        <div class='contact-icon icon3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='940 520 40 40'
                          >
                            <path d='M979.3 537.8l-3.4-3.2v-10.7c0-.7-.5-1.2-1.2-1.2h-8.1c-.6 0-1.2.6-1.2 1.2v.7l-4.1-3.9a1.93 1.93 0 0 0-2.8 0l-17.9 17.2c-.6.6-.8 1.5-.5 2.4.3.8 1.1 1.4 1.9 1.4h2.9v17.2c0 .7.5 1.2 1.2 1.2h9.8c.6 0 1.2-.6 1.2-1.2v-10.5h5.8v10.5c0 .7.5 1.2 1.2 1.2h9.8c.6 0 1.2-.6 1.2-1.2v-17.2h2.9c.9 0 1.6-.5 1.9-1.4.3-1 .1-1.9-.6-2.5zm-5.4 1.2c-.6 0-1.2.6-1.2 1.2v17.2h-7.5v-10.5c0-.7-.5-1.2-1.2-1.2h-8.1c-.6 0-1.2.6-1.2 1.2v10.5h-7.5v-17.2c0-.7-.5-1.2-1.2-1.2h-3.3l17.2-16.5 5.8 5.6c.3.3.8.4 1.3.2.4-.2.7-.6.7-1.1V525h5.8v10.1c0 .3.1.7.4.9l3.2 3.1h-3.2v-.1z' />
                          </svg>
                        </div>
                      </div>
                      <h3 class='contact-title'>Working hours</h3>
                      <ul>
                        <li>Mon - Fri: 10AM - 7PM</li>
                        <li>Sta: 11AM - 5PM</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact info block End  --> */}

      {/* <!-- Contact Us Start  --> */}
      <section class='pb-100'>
        <div class='container'>
          <div class='row no-gutters'>
            <div class='col-12'>
              <div class='heading-part text-center mb-30 mb-sm-20'>
                <h2 class='main_title heading mb-15'>
                  Leave a <span>message!</span>
                </h2>
              </div>
            </div>
          </div>
          <div class='main-form'>
            <form
              action='contact-form-handler.htm'
              method='POST'
              name='contactform'
            >
              <div class='row'>
                <div class='form-group col-md-6 mb-30'>
                  <div class='input-box'>
                    <input
                      class='form-control'
                      type='text'
                      required
                      placeholder='Name'
                      name='name'
                    />
                  </div>
                </div>
                <div class='form-group col-md-6 mb-30'>
                  <div class='input-box'>
                    <input
                      class='form-control'
                      type='email'
                      required
                      placeholder='Email'
                      name='email'
                    />
                  </div>
                </div>
                <div class='form-group col-md-6'>
                  <div class='input-box'>
                    <input
                      class='form-control'
                      type='text'
                      required
                      placeholder='Contact Number'
                      name='phone'
                    />
                  </div>
                </div>
                <div class='form-group col-md-6 mb-30'>
                  <div class='input-box'>
                    <input
                      class='form-control'
                      type='text'
                      required
                      placeholder='Website'
                      name='website'
                    />
                  </div>
                </div>
                <div class='form-group col-12 mb-30'>
                  <div class='input-box'>
                    <textarea
                      class='form-control'
                      required
                      placeholder='Message'
                      rows='3'
                      cols='30'
                      name='message'
                    ></textarea>
                  </div>
                </div>
                <div class='col-12'>
                  <div class='text-center'>
                    <button type='submit' name='submit' class='btn btn-color'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- Contact Us block End  --> */}
    </>
  )
}

export default ContactUs
