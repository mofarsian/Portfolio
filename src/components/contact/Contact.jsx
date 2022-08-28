import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  return (
    <section id='contact'>
      <h5>با من در تماس باشید</h5>
      <h2>راه های ارتباطی</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>ایمیل</h4>
            <h5>mofarsian.designs@gmail.com</h5>
            <a href='mailto:mofarsian.designs@gmail.com' target="_blank">ایمیل بفرستید</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>واتساپ</h4>
            <h5>+989192971464</h5>
            <a href='https://api.whatsapp.com/send?phone+989192971464' target="_blank">پیام بفرستید</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='نام و نام خانوادگی' required />
          <input type="email" name='email' placeholder='آدرس ایمیل' required />
          <textarea name="message" rows="7" placeholder="پیام شما" required />
          <button type='submit' className='btn btn-primary'>ارسال</button>
        </form>
      </div>
    </section>
  )
}

export default Contact