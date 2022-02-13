import { React, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import { useProjectContext } from './Context/ProjectProvider'
import { Cookies, useCookies } from 'react-cookie'

import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Page/Home/Home'
import Gallery from './Page/Gallery/Gallery'
import About from './Page/About/About'
import Tour from './Page/Tour/Tour'
import ContactUs from './Page/ContactUs/ContactUs'
import Blog from './Page/Blog/Blog'
import Faq from './Page/Faq/Faq'
import Services from './Page/Services/Services'
import SingleTour from './Page/Tour/SingleTour'
import BookTour from './Page/Tour/BookTour'
import axios from 'axios'

function _ScrollToTop(props) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return props.children
}

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { userData, setUserData } = useProjectContext()
  window.onload = function () {
    if (cookies['user']) {
      getIndividualInfo()
    }
  }
  const getIndividualInfo = () => {
    axios
      .post(
        'https://negatrip.ir/admin/Customers/API/_getCustomerInfo?token=test',
        {
          mobile: cookies['user']['mobile'],
        },
        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        if (response.data.isDone) {
          setUserData(response.data.data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/tour' element={<Tour />} />
      </Routes>
      <Routes>
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Routes>
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Routes>
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <Routes>
        <Route path='/services' element={<Services />} />
      </Routes>
      <Routes>
        <Route path='/tour/single/:id' element={<SingleTour />} />
      </Routes>
      <Routes>
        <Route path='/tour/single/:id/book' element={<BookTour />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
