import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='content-footer'>
        <div className='footer-top'>
          <a href='https://help.netflix.com/en/contactus'>Question? Contact Us.</a>
        </div>

        <div className='footer-middle main-footer'>
          <ul className='list-items'>
            <li><a href='https://help.netflix.com/en/node/412'>FAQ</a></li>
            <li><a href='https://ir.netflix.net/ir-overview/profile/default.aspx'>Investor Relations</a></li>
            <li><a href='https://help.netflix.com/legal/privacy'>Privacy</a></li>
            <li><a href='https://fast.com/'>Speed Test</a></li>
            <li><a href='https://help.netflix.com/en/'>Help Center</a></li>
            <li><a href='https://jobs.netflix.com/jobs'>Jobs</a></li>
            <li><a href='https://www.netflix.com/vn-en/'>Cookie Preferents</a></li>
            <li><a href='https://help.netflix.com/legal/notices'>Legal Notices</a></li>
            <li><a href='https://www.netflix.com/vn-en/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount'>Account</a></li>
            <li><a href='https://devices.netflix.com/en/'>Ways to Watch</a></li>
            <li><a href='https://help.netflix.com/legal/corpinfo'>Corporate Information</a></li>
            <li><a href='https://www.netflix.com/vn-en/browse/genre/839338'>Only on Netflix</a></li>
            <li><a href='https://media.netflix.com/en/'>Media Center</a></li>
            <li><a href='https://help.netflix.com/legal/termsofuse'>Terms of Use</a></li>
            <li><a href='https://help.netflix.com/en/contactus'>Contact Us</a></li>
          </ul>
        </div>

        <div className='footer-bottom'>
          <p className='location-netflix-phake'>Netflix Phake</p>
        </div>
      </div>
    </div>
  )
}

export default Footer