import { React, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrump from '../../Component/BreadCrumb/BreadCrumb'
import pac1 from '../../Assets/images/packages_img_3.jpg'
import payment from '../../Assets/images/payment.png'
import paypal from '../../Assets/images/paypal.png'
import payoneer from '../../Assets/images/payoneer.png'
import {
  AiFillEdit,
  AiFillCalendar,
  AiFillClockCircle,
  AiFillPhone,
} from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
const BookTour = () => {
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
      <section class='ptb-100 booking-detail'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-4 order-lg-2'>
              <div class='sidebar-block sidebar-block-1 mb-md-30'>
                <div class='box-shadow radius-5px p-25 p-xs-15'>
                  <div class='sidebar-box listing-box'>
                    <span class='opener plus'></span>
                    <div class='sidebar-title'>
                      <h3>
                        <span>Booking Details</span>
                      </h3>
                    </div>
                    <div class='sidebar-contant pt-4'>
                      <div class='main-form booking-detail-form'>
                        <div class='booking-img'>
                          <a href='tour_detail.html'>
                            <img alt='TravelRide' src={pac1} />
                          </a>
                        </div>
                        <div class='packages-details packages-booking-detail pt-25'>
                          <div class='d-flex justify-content-between'>
                            <div class='mb-2'>
                              <h4 class='mb-0'>
                                <span class='title'>Tower of London</span>
                              </h4>
                              <p class='tour-meta m-0'>
                                London EC3N 4AB, United Kingdom
                              </p>
                            </div>
                            <div class='edit'>
                              <a href='tour_detail.html' class='' title='Edit'>
                                <AiFillEdit />
                              </a>
                            </div>
                          </div>
                          <div class='rating-summary-block'>
                            <span class='label-review'>10 Reviews</span>
                          </div>
                          <div class='list-items mt-20'>
                            <ul>
                              <li class=''>
                                <div class='w-auto d-block mb-n1'>
                                  <span class='icon'>
                                    <AiFillCalendar />
                                  </span>
                                  <span class='list-title'>Check in</span>
                                </div>
                                12 May 2022 7:40am
                              </li>
                              <li class=''>
                                <div class='w-auto d-block mb-n1'>
                                  <span class='icon'>
                                    <AiFillCalendar />
                                  </span>
                                  <span class='list-title'>Check out</span>
                                </div>
                                17 May 2022 7:40am
                              </li>
                              <li class=''>
                                <div class='w-auto d-block mb-n1'>
                                  <span class='icon'>
                                    <AiFillClockCircle />
                                  </span>
                                  <span class='list-title'>Duration</span>
                                </div>
                                5 Days, 4 Nights
                              </li>
                              <li class=''>
                                <div class='w-auto d-block mb-n1'>
                                  <span class='icon'>
                                    <FaMapMarkerAlt />
                                  </span>
                                  <span class='list-title'>Location</span>
                                </div>
                                London EC3N 4AB, United Kingdom
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class='order-details mt-30 mt-xs-15'>
                          <h4 class='title'>Order Details</h4>
                          <div class='Tour-total-table commun-table'>
                            <div class='table-responsive'>
                              <table class='table'>
                                <tbody>
                                  <tr>
                                    <td class='px-0'>Tour</td>
                                    <td>
                                      <span class='days'>5 Days</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class='px-0'>Extra Benefits</td>
                                    <td>
                                      <span class='benefits'>No</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class='px-0'>Travellers</td>
                                    <td>
                                      <span class='person'>5 person</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class='px-0'>Tour Subtotal</td>
                                    <td>
                                      <span class='price'>$520.00</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class='px-0'>Tax</td>
                                    <td>
                                      <span class='price'>$5.50</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class='px-0'>
                                      <b>Amount Payable</b>
                                    </td>
                                    <td>
                                      <span class='price'>
                                        <b>$525.00</b>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan='2' class='text-success px-0'>
                                      You will save $95 on this Tour
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='sidebar-box'>
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
            <div class='col-lg-8 order-lg-1'>
              <form action='tour_booking.html#' class='main-form full'>
                <div class='row mb-20'>
                  <div class='col-12 mb-30 mb-sm-20'>
                    <div class='heading-part mb-3'>
                      <h3 class='sub-heading'>Your Personal Information</h3>
                    </div>
                    <hr />
                  </div>
                  <div class='form-group col-md-6'>
                    <div class='input-box'>
                      <label>First Name</label>
                      <input
                        class='form-control'
                        type='text'
                        required
                        placeholder='First Name'
                      />
                    </div>
                  </div>
                  <div class='form-group col-md-6'>
                    <div class='input-box'>
                      <label>Last Name</label>
                      <input
                        class='form-control'
                        type='text'
                        required
                        placeholder='Last Name'
                      />
                    </div>
                  </div>
                  <div class='form-group col-md-6'>
                    <div class='input-box'>
                      <label>Your Email</label>
                      <input
                        class='form-control'
                        type='email'
                        required
                        placeholder='Email Address'
                      />
                    </div>
                  </div>
                  <div class='form-group col-md-6'>
                    <div class='input-box'>
                      <label>Contact Number</label>
                      <input
                        class='form-control'
                        type='text'
                        required
                        placeholder='Contact Number'
                      />
                    </div>
                  </div>
                  <div class='form-group col-md-12'>
                    <div class='input-box'>
                      <label>Address</label>
                      <input
                        class='form-control'
                        type='text'
                        required
                        placeholder='Address'
                      />
                    </div>
                  </div>
                  <div class='form-group col-md-6'>
                    <div class='input-inner'>
                      <div class='input-box'>
                        <label>Country</label>
                        <fieldset>
                          <select
                            name='CountryId'
                            class='select'
                            id='countryid'
                          >
                            <option selected='' value=''>
                              Select Country
                            </option>
                            <option value='AX'>Aland Islands</option>
                            <option value='AF'>Afghanistan</option>
                            <option value='AL'>Albania</option>
                            <option value='DZ'>Algeria</option>
                          </select>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div class='form-group col-md-6'>
                    <div class='input-inner'>
                      <div class='input-box'>
                        <label>State</label>
                        <fieldset>
                          <select name='stateid' class='select' id='stateid'>
                            <option selected='' value=''>
                              Select Country
                            </option>
                            <option value='AX'>Aland Islands</option>
                            <option value='AF'>Afghanistan</option>
                          </select>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div class='form-group col-md-6'>
                    <div class='input-box'>
                      <input
                        class='form-control'
                        type='text'
                        required
                        placeholder='City'
                      />
                    </div>
                  </div>
                  <div class='form-group col-md-6'>
                    <div class='input-box'>
                      <input
                        class='form-control'
                        type='text'
                        required
                        placeholder='Postcode/zip'
                      />
                    </div>
                  </div>
                  <div class='col-12'>
                    <div class='check-box'>
                      <span>
                        <input
                          id='receivepromo'
                          type='checkbox'
                          name='receivepromo'
                          class='checkbox'
                        />
                        <label for='receivepromo'>
                          I want to receive TravelRide's promotional offers in
                          the future
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
              <div class='payment-method check-mark-tab mt-60'>
                <div class='row'>
                  <div class='col-12 mb-30 mb-sm-20'>
                    <div class='heading-part mb-3'>
                      <h3 class='sub-heading'>Select Payment Method</h3>
                    </div>
                    <hr />
                  </div>
                </div>
                <ul
                  class='nav nav-tabs justify-content-center text-center mb-30 mb-xs-15'
                  id='tab'
                  role='tablist'
                >
                  <li class='nav-item'>
                    <a
                      class='nav-link  active'
                      id='description_tab'
                      data-toggle='tab'
                      href='tour_booking.html#description'
                      role='tab'
                      aria-controls='description'
                      aria-selected='true'
                    >
                      <div class='check'>
                        <BsCheckLg />
                      </div>
                      <img alt='TravelRide' src={payment} />
                      <span class='d-block pt-2'>Payment with credit card</span>
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a
                      class='nav-link'
                      id='itinerary_tab'
                      data-toggle='tab'
                      href='tour_booking.html#itinerary'
                      role='tab'
                      aria-controls='itinerary'
                      aria-selected='false'
                    >
                      <div class='check'>
                        <BsCheckLg />
                      </div>
                      <img alt='TravelRide' src={paypal} />
                      <span class='d-block pt-2'>Payment with PayPal</span>
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a
                      class='nav-link'
                      id='companyinfo_tab'
                      data-toggle='tab'
                      href='tour_booking.html#companyinfo'
                      role='tab'
                      aria-controls='companyinfo'
                      aria-selected='false'
                    >
                      <div class='check'>
                        <BsCheckLg />
                      </div>
                      <img alt='TravelRide' src={payoneer} />
                      <span class='d-block pt-2'>Payment with payoneer</span>
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
                    <div class='card-body card-bg'>
                      <div class='card-wrapper'></div>
                      <form class='card-form main-form row mt-30'>
                        <div class='form-group col-md-6'>
                          <div class='input-box'>
                            <label>First Name</label>
                            <input
                              class='form-control'
                              type='text'
                              name='first-name'
                              required
                              placeholder='First Name'
                            />
                          </div>
                        </div>
                        <div class='form-group col-md-6'>
                          <div class='input-box'>
                            <label>Surname</label>
                            <input
                              class='form-control'
                              type='text'
                              name='last-name'
                              required
                              placeholder='Surname'
                            />
                          </div>
                        </div>
                        <div class='form-group col-xl-12'>
                          <div class='input-box'>
                            <label>Card Number</label>
                            <input
                              class='form-control'
                              type='text'
                              name='number'
                              required
                              placeholder='Card Number'
                            />
                          </div>
                        </div>
                        <div class='form-group col-sm-6'>
                          <div class='input-box'>
                            <label>MM / YY</label>
                            <input
                              class='form-control'
                              type='text'
                              name='expiry'
                              required
                              placeholder='MM / YY'
                            />
                          </div>
                        </div>
                        <div class='form-group col-sm-6'>
                          <div class='input-box'>
                            <label>CCV</label>
                            <input
                              class='form-control'
                              type='text'
                              name='cvc'
                              required
                              placeholder='CCV'
                            />
                          </div>
                        </div>
                        <div class='col-12 '>
                          <div class='Submit-btn text-center'>
                            <button
                              name='submit'
                              type='submit'
                              class='btn btn-color'
                            >
                              <span>Confirm Booking</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    class='tab-pane fade'
                    id='itinerary'
                    role='tabpanel'
                    aria-labelledby='itinerary_tab'
                  >
                    <div class='card-body card-bg'>
                      <p class='m-0'>
                        <span class='font-weight-bold'>PayPal </span> - the
                        safer, easier way to pay
                      </p>
                      <form class='row mt-30  main-form'>
                        <div class='form-group col-md-6'>
                          <div class='input-box'>
                            <label>Email Address</label>
                            <input
                              id='paypal-email'
                              class='form-control'
                              type='email'
                              required
                              placeholder='Email Address'
                            />
                          </div>
                        </div>
                        <div class='form-group col-md-6'>
                          <div class='input-box'>
                            <label>Password</label>
                            <input
                              id='paypal-pass'
                              class='form-control'
                              type='password'
                              required
                              placeholder='Password'
                            />
                          </div>
                        </div>
                        <div class='col-12'>
                          <div class='d-flex justify-content-between align-items-center'>
                            <div class='Submit-btn'>
                              <button
                                name='submit'
                                type='submit'
                                class='btn btn-color'
                              >
                                <span>Login</span>
                              </button>
                            </div>
                            <a
                              title='Forgot Password'
                              class='forgot-password '
                              href='javascript:void(0)'
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    class='tab-pane fade'
                    id='companyinfo'
                    role='tabpanel'
                    aria-labelledby='companyinfo_tab'
                  >
                    <div class='card-body card-bg'>
                      <p class='m-0'>
                        Payment with
                        <span class='font-weight-bold'>payoneer</span>
                      </p>
                      <form class='row mt-30 main-form'>
                        <div class='form-group col-md-6'>
                          <div class='input-box'>
                            <label>Email Address</label>
                            <input
                              id='payoneer-email'
                              class='form-control'
                              type='email'
                              required
                              placeholder='Email Address'
                            />
                          </div>
                        </div>
                        <div class='form-group col-md-6'>
                          <div class='input-box'>
                            <label>Password</label>
                            <input
                              id='payoneer-pass'
                              class='form-control'
                              type='password'
                              required
                              placeholder='Password'
                            />
                          </div>
                        </div>
                        <div class='col-12'>
                          <div class='d-flex justify-content-between align-items-center'>
                            <div class='Submit-btn'>
                              <button
                                name='submit'
                                type='submit'
                                class='btn btn-color'
                              >
                                <span>Login</span>
                              </button>
                            </div>
                            <a
                              title='Forgot Password'
                              class='forgot-password '
                              href='javascript:void(0)'
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
                      </form>
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

export default BookTour
