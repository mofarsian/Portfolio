import React from 'react'
import './footer.css'
import {BsWhatsapp} from 'react-icons/bs';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>محمد فارسیان</a>

      <ul className='permalinks'>
        <li><a href='#'>خانه</a></li>
        <li><a href='#about'>در مورد من</a></li>
        <li><a href='#experience'>تجربه کاری</a></li>
        <li><a href='#services'>خدمات من</a></li>
        <li><a href='#portfolio'>نمونه کار</a></li>
        <li><a href='#testimonials'>رضایت مشتری</a></li>
        <li><a href='#contact'>راه های ارتباطی</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://whatsapp.com"><BsWhatsapp/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;تمام حق و حقوق این سایت متعلق به صاحب آن است</small>
      </div>
    </footer>
  )
}

export default Footer