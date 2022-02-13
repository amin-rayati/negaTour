import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrump from '../../Component/BreadCrumb/BreadCrumb'
import { FaMapMarkerAlt, FaCalendar, FaUserAlt } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import { BiPlus } from 'react-icons/bi'
import axios from 'axios'
import SingleFaq from './SingleFaq'

const Faq = () => {
  const { pathname } = useLocation()
  const path = pathname.split('/')[1]
  const [questions, setQuestions] = useState('')

  const getQuestions = async () => {
    axios
      .post('https://negaclub.ir/admin/Questions/API/_Questions?token=test', {
        questionCategoryId: '3',
      })
      .then((response) => {
        if (response.data.isDone) {
          setQuestions(response.data.data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getQuestions()
  }, [])
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

      {/* <!-- FAQ section strat --> */}
      <section id='faq-part' class='faq-part ptb-100'>
        <div class='container'>
          <div class='row no-gutters'>
            <div class='col-12'>
              <div class='heading-part text-center mb-30 mb-sm-20'>
                <h2 class='main_title heading mb-15'>
                  سوالات <span>متداول</span>
                </h2>
                <p class='heading-des'>
                  تعدادی از سوالات متداولی که ممکن است برایتان پیش بیاید
                </p>
              </div>
            </div>
          </div>
          <div class='row  justify-content-center'>
            <div class='col-xl-8 col-lg-10 col-md-8 '>
              <div id='accordion' class='accordion '>
                <div class='card mb-0'>
                  {questions &&
                    questions.map((e) => {
                      return <SingleFaq data={e} />
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- FAQ section end --> */}
    </>
  )
}

export default Faq
