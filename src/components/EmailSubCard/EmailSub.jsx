import React from 'react'
import './EmailSub.scss'

const EmailSub = () => {
  return (
    <div className='emai-subcription'>
      <form>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className='email-form'>
          <input type='email' name='email' placeholder='Email Address' />
          <input type='button' value='Get Started' />
        </div>
      </form>
    </div>
  )
}

export default EmailSub