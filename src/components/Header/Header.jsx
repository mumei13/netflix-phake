import React from 'react'
import logo from '../../assets/logo.png'
import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { domainURL } from '../consts/consts'

const Header = () => {
  const navigate = useNavigate();
  const navigateSignIn = () => {
    navigate('/sign-in', { replace: true })
  }
  const navigateHome = () => {
    navigate('/', { replace: true })
  }

  return (
    <div id='header'>
      <div className='container'>
        <div className='logo left'>
          <button onClick={navigateHome}><img src={logo} alt='logo-netflix' /></button>
        </div>
        <div className='right signin-button'>
          <button onClick={navigateSignIn} className='btn button-sign-in'>Sign In</button>
        </div>
      </div>
    </div >
  )
}

export default Header



