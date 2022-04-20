import React from 'react'
import heroBanner from '../../assets/herobannerhome.jpg'
import planMobile from '../../assets/home_plan_mobile.jpg'
import { Collapse } from 'antd';
import './Home.scss'
import EmailSub from '../../components/EmailSubCard/EmailSub';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const linkPlanMobile = 'https://play.google.com/store/apps/details?id=com.netflix.mediaclient'

const Home = () => {
  const { Panel } = Collapse;
  return (
    <div className='home'>
      <Header />
      {/* Hero banner */}
      <div className='hero-banner'>
        <div className='hero-banner-card layer-dark'>
          <img className='image' src={heroBanner} alt='hero-banner-home' />
        </div>
        <div className='text-hero-banner'>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <EmailSub />
        </div>
      </div>

      {/* Mobile plan */}
      <div className='mobile-plan'>
        <div className='plan-left'>
          <h1>Have an android phone? Get our new plan!</h1>
          <h2>What a selection of new movies and TV shows without adding any payment details!</h2>
          <a href={linkPlanMobile}>Get the app</a>
        </div>
        <div className='plan-right'>
          <img src={planMobile} alt='plan-android' />
        </div>
      </div>

      {/* FAQ */}
      <div className='faq'>
        <div className='frequently-asked-questions'>
          <h1>Frequently Asked Questions</h1>
        </div>
        <Collapse className='faq-list'>
          <Panel className='faq-list-item item-1' header='What is Netflix?'>
            <p className='answer-hidden'>
              Paragrah to show answer
            </p>
          </Panel>
          <Panel className='faq-list-item item-2' header='How much does Netflix cost?'>
            <p className='answer-hidden'>
              Paragrah to show answer
            </p>
          </Panel>
          <Panel className='faq-list-item item-3' header='Where can I watch?'>
            <p className='answer-hidden'>
              Paragrah to show answer
            </p>
          </Panel>
          <Panel className='faq-list-item item-4' header='How do I cancel?'>
            <p className='answer-hidden'>
              Paragrah to show answer
            </p>
          </Panel>
          <Panel className='faq-list-item item-5' header='What can I watch on Netflix?'>
            <p className='answer-hidden'>
              Paragrah to show answer
            </p>
          </Panel>
          <Panel className='faq-list-item item-6' header='Is Netflix good for kids?'>
            <p className='answer-hidden'>
              Paragrah to show answer
            </p>
          </Panel>
        </Collapse>
        <EmailSub />
      </div>

      <Footer />

    </div >
  )
}

export default Home