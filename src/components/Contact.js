import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {

  const [result, showResult] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true)
  };

  setTimeout(() => {
    showResult(false)
  }, 4500);

  return (
    <section id="contact">
      <div className="flex flex-col justify-center items-center mx-auto text-center bg-slate-50">
        <h4 className="text-3xl font-Montserrat font-bold my-5">Contact</h4>
        <div>
          {result
            ?
            <motion.p
              initial={{ y: -60 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", bounce: 0.7 }}
              className="my-2 animate-fade">
              Your message has been successfully sent. I will contact you soon.
            </motion.p>
            :
            null
          }
        </div>
        <form className="w-3/4 flex flex-col lg:w-1/2" ref={form} onSubmit={sendEmail}>
          <div className="inline-block my-1">
            <input className="bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-theme-primary" id="inline-full-name" type="text" name="fullName" placeholder="Enter full name" autoComplete="off" required />
          </div>
          <div className="inline-block my-1">
            <input className="bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-theme-primary" id="inline-password" type="email" name="email" placeholder="Enter your email" autoComplete="off" required />
          </div>
          <div className="inline-block my-1">
            <textarea className="bg-slate-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-theme-primary" id="inline-password" type="email" name="message" placeholder="Enter your message..." required />
          </div>
          <div>
            <button className="w-fit px-4 py-2 my-3 bg-theme-primary hover:opacity-80 text-white text-sm font-medium">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
