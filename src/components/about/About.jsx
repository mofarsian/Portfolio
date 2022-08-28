import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>About</h5>
      <h2>در مورد من</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>تجربه</h5>
              <small>سه سال</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>پروژه ها</h5>
              <small>+80</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>مشتریان</h5>
              <small>+200</small>
            </article>
          </div>
          <p>
            با انتخاب من پشیمان نخواهید شد از آنجا که من تمام صد درصد وجودم رو برای کار خرج میکنم و به هیچ وجه برای مشتری کم نمیزارم.
            با اخلاق کاری قوی و برخورد مناسب با مشتریان. موفق شده ام که در جای پای خودم رو در حوزه فریلنسینگ محکم کنم و گزینه ای مطمئن و حرفه ای برای مشتریان باشم. هر کسب و کاری چه مجازی باشد چه غیر مجازی.
          </p>

          <a href='#contact' className='btn btn-primary'>ارتباط با من</a>
        </div>
      </div>
    </section>
  )
}

export default About