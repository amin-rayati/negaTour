import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, NavLink } from 'react-router-dom'

const Breadcrump = ({ path }) => {
  return (
    <Breadcrumb
      className='bread'
      style={{ direction: 'rtl', cursor: 'pointer' }}
    >
      <NavLink to={`/`}>
        <p className='text-dark mx-2'>صفحه اصلی</p>
      </NavLink>
      <IoIosArrowBack className='mt-1 h5' />
      <NavLink to={`/`}>
        <p className='text-dark mx-2'>{path}</p>
      </NavLink>
      <IoIosArrowBack className='mt-1 h5' />
    </Breadcrumb>
  )
}

export default Breadcrump
