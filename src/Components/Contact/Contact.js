import React, { useRef } from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import './Contact.css'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o1iwhwp', 'template_jae4078', form.current, 'wqrGCgeBfCN4FPx1X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>harshish3498@gmail.com</h5>
            <a href='mailto:harshish3498@gmail.com'target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+918003141437</h5>
            <a href='https://api.whatsapp.com/send?phone=918003141437' target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
<input type="text" name="name" placeholder='Your Full Name' required />
<input type="email" name="email" placeholder="Your Email" required />
<textarea name='message' rows="7" placeholder="Your Message" ></textarea>
<button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact