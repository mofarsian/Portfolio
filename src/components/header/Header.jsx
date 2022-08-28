import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='header__container'>
        <h5>سلام</h5>
        <h1>محمد فارسیان</h1>
        <h5 className="text-light">توسعه دهنده ی فول استک</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='me' className='me2'/>
        </div>

        <a href='#contact' className='scroll__down'>برید پایین</a>
      </div>
    </header>
  )
}

export default Header