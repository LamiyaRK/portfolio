import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l6a17fe', 'template_r0yorms', form.current, {
        publicKey: '6PrsHVZZChvRQ2YLL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <div className='flex flex-col w-full p-10 bg-black/10 backdrop-blur-xs rounded-2xl '>
             <form ref={form} onSubmit={sendEmail}>
        <label className="label mb-2 ">Name</label><br/>
  <input type="text" className="input w-full mb-4" placeholder="Name" /><br/>
       <label className="label mb-2">Email</label><br/>
  <input type="email" className="input w-full mb-4" placeholder="Email" /><br/>
      <label className="label mb-2">Message</label><br/>
      <textarea className="textarea w-full mb-5" placeholder="Message" name='message' /><br/>
      
   
<button value='submit' className='send'>
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>

    </form>
        </div>
    );
};

export default ContactForm;