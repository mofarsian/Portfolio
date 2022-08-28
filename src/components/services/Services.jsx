import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Services</h5>
      <h2>خدمات من</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>طراحی رابط کاربری و تجربه کاربری سایت از صفر</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>اعمال تغییرات گوشزد شده در سریع ترین زمان ممکن</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>طراحی خلاقانه و زیبا</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>قیمت تمام شده ی به صرفه تر</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>گزارش مرحله به مرحله ی کار</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ارتباط لحظه به لحظه با شما</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ایده پردازی سایت از صفر</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>اعمال تغییرات گوشزد شده در سریع ترین زمان ممکن</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>اعمال ایده های خلاقانه و زیبا</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>قیمت تمام شده ی به صرفه تر</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>گزارش مرحله به مرحله ی کار</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>تولید محتوا</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>تولید محتوای با کیفیت و اختصاصی</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ارتباط لحظه به لحظه با شما</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>اعمال تغییرات گوشزد شده در سریع ترین زمان ممکن</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>تحقیق بسیار و جمع آوری نمونه های مشابه برای طراحی بهینه پروژه</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>قیمت تمام شده ی به صرفه تر</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>گزارش مرحله به مرحله ی کار</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services