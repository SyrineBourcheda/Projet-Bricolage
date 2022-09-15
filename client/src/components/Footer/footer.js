import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Footer = () => {

const sendEmail =(e)=> {
    e.preventDefault();

    emailjs.sendForm('service_9dabs17', 'template_cgzouz7', e.target, 'axvRMKjUvTWdMZES1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setTimeout(function () { window.location.reload(); }, 10)
    
  };
 
  
  
    return (
        <div>
          <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Don't hesitate to leave us your comments.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={sendEmail} >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." name="name"/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." name="email"/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."name="number"/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."name="msg"></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase Homebutton" type="submit" >Send Message</button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
            <footer className="footer">
   <div className="container">
     <div className="row align-items-center">
       <div className="col-md-4">
         <span className="copyright">Copyright &copy; BeepService 2022</span>
       </div>
       <div className="col-md-4">
         <ul className="list-inline social-buttons">
           <li className="list-inline-item">
             <a href="#something">
               <i className="fa fa-twitter"></i>
             </a>
           </li>
           <li className="list-inline-item">
             <a href="#something">
               <i className="fa fa-facebook-f"></i>
             </a>
           </li>
           <li className="list-inline-item">
             <a href="#something">
               <i className="fa fa-linkedin"></i>
             </a>
           </li>
         </ul>
       </div>
       <div className="col-md-4">
         <ul className="list-inline quicklinks">
           <li className="list-inline-item">
             <a href="#something">Privacy Policy</a>
           </li>
           <li className="list-inline-item">
             <a href="#something">Terms of Use</a>
           </li>
         </ul>
       </div>
     </div>
   </div>
 </footer>
        </div>
    );
};

export default Footer;