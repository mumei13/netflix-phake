import React from 'react'
import Header from '../../components/Header/Header'
import backgroundSignIn from '../../assets/herobannerhome.jpg'
import './User.scss'

const SignIn = () => {
  return (
    <div className='background-sign-in'>
      <Header />
      <div className='sign-in-background'>
        <img src={backgroundSignIn} />
      </div>
      <div className='sign-in-card'>
        <div className='title'>
          <h1>Sign In</h1>
        </div>
        <div className='sign-in-form form'>
          <input className='input-out' type='email' placeholder='Email' />
          <input className='input-out' type='password' placeholder='Password' />
          <button className='button-sign-in'>Sign In</button>
          <div className='more'>
            <input type='checkbox' defaultChecked='checked' />
            <p>Remember me</p>
            <a className='sing-in-form right' href='https://www.netflix.com/vn-en/LoginHelp'><p>Need help?</p></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn