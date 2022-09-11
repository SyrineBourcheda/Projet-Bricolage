import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/portfolio';
import Footer from '../Footer/footer';
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import icon1 from '../../assets/img/icon1.png'
import icon2 from '../../assets/img/icon2.png'
import video from '../../assets/img/video.mp4'
import './home.css'
import '../../assets/css/agency.min.css'


const Home = () => {
    return (
//home NavBar
<div className="App">
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
   <div className="container">
     <Link className="navbar-brand js-scroll-trigger" to="/">BeepService</Link>
     <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
       Menu
       <i className="fa fa-bars"></i>
     </button>
     <div className="collapse navbar-collapse containerItem" id="navbarResponsive">
       <ul className="navbar-nav text-uppercase ms-auto listItem">
        
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger Items ItemAbout " href="/home/#about"><i className="fa fa-info-circle" aria-hidden="true"></i>About</a>
        </li>
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger Items ItemCategory" href="/home/#portfolio"><i className="fa fa-tasks" aria-hidden="true"></i>Categories</a>
         </li>
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger Items ItemHow" href="/home/#How"><i class="fa fa-question" aria-hidden="true"></i>How</a>
         </li>
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger Items ItemRreview" href="/home/#Reviews"><i className="fa fa-comments" aria-hidden="true"></i>Reviews</a>
         </li>
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger Items ItemContact" href="/home/#contact"><i className="fa fa-phone" aria-hidden="true"></i>Contact</a>
         </li>
         < li className="nav-item " id="register">
         <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger buttonItem" to="/register">Join </Link>
       </li>
       </ul>
      </div>
   </div>
 </nav>

 
 
   
 <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Our Platform!</div>
        <div className="intro-heading text-uppercase">BeepService is the best way to exchange<br/> services </div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/login"  id="try">Try Now !</a>
      </div>
    </div>
  
  </header>
  





<section className="page-section" id="about">

   <div className="container " >
   <h2 className="section-heading text-uppercase text-center">About Us </h2>
  
  
     <p className='text-muted '>People often find difficulties in looking for a job and they look for a way to announce their services.
            Also employers need qualified profiles to recruit them. So we need a solution to facilitate this exchange. That's what our platform BeepService is for, so don't miss this opportunity.<br/> 
            With BeepService, we help you to find the work you want don't hesitate to publish your ad and you will receive many offers in less than 24 hours.
 
      </p>
    </div>
    <div className='row' id="content">
      <div className='col-md-6'>
      <img className="mx-auto 'col-md-6'" src={icon1} alt=""/>
        <h4>Publish your job application</h4>
        <p >You will be visible to recruiters by placing your profile on our plateform</p>
      </div>
      <div className='col-md-6'>
      <img className="mx-auto 'col-md-6'" src={icon2} alt=""/>
        <h4>Receive job offers made for you</h4>
        <p > The offers that correspond to your search criteria are sent directly to you  </p>
      </div>

     </div>
     
</section>






 <Portfolio />

 <section className="page-section" id="How">

   <div className="container " >
   <h2 className="section-heading text-uppercase text-center">How it works </h2>
   <div className="row">
      <div className='col-md-6'>
         <p className='text-muted '>
         <p className='text-muted '><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa-stack-1x fa-inverse">1 </i></span>
           Take a few seconds to register. Registration is completely free!</p>
          <p ><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa-stack-1x fa-inverse">2</i></span>
          Select the desired service from the the categories of work proposed</p>
          <p ><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa-stack-1x fa-inverse">3</i></span>
          Publish an ad for free on the site with as much information details </p>
          <p ><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa-stack-1x fa-inverse">4</i></span>
          Indicate the budget with reference to the price range </p>
          <p ><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa-stack-1x fa-inverse">5</i></span>
          you will receive offers in less than 24 h</p>
          <p ><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa-stack-1x fa-inverse">6</i></span>
          Select and contact a provider via the messaging tool  </p>
        
          </p>
      </div>

   <div className="col-md-6 VideoContainer" >
   <video controls    className='video'>

      <source src={video} type="video/mp4" />
      <source src="video.ogg" type="video/ogg"></source>
</video>
   </div>
  </div>
</div>
</section>



 







 
 <section className="bg-light page-section" id="Reviews">
   <div className="container">
     <div className="row">
       <div className="col-lg-12 text-center">
         <h2 className="section-heading text-uppercase">User Reviews</h2>
        
       </div>
     </div>
     <div className="row">
       <div className="col-sm-4">
         <div className="team-member">
           <img className="mx-auto rounded-circle" src={img3} alt=""/>
           <h4>Kay Garland</h4>
           <i class="fa fa-star" aria-hidden="true"></i>
           <i class="fa fa-star" aria-hidden="true"></i>
           <i class="fa fa-star" aria-hidden="true"></i>
           <i class="fa fa-star" aria-hidden="true"></i>
           <i class="fa fa-star" aria-hidden="true"></i>
           <p className="text-muted">BeepService is perfect for me. it's one of the best platform to find easily a job at home
            that matches perfectly with your location, your experience and your skills,if you haven't found yet a job in your field then don't hesitate to try it and you won't regret it</p>
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
       </div>
       <div className="col-sm-4">
         <div className="team-member">
           <img className="mx-auto rounded-circle" src={img2} alt=""/>
           <h4>Larry Parker</h4>
           <i class="fa fa-star" aria-hidden="true"></i>
           <i class="fa fa-star" aria-hidden="true"></i>
           <i class="fa fa-star" aria-hidden="true"></i>
           <i class="fa fa-star" aria-hidden="true"></i>
           <p className="text-muted">With BeepService I was able to find a job that suits my experience and skills as a beautician. I find this platform very flexible and easy to use.
            I recommend it to anyone who is looking for a job in good conditions and with a good salary.</p>
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
       </div>
       <div className="col-sm-4">
         <div className="team-member">
           <img className="mx-auto rounded-circle" src={img1} alt=""/>
           <h4>Diana Pertersen</h4>
           <i class="fa fa-star" aria-hidden="true"></i>
           <i class="fa fa-star" aria-hidden="true"></i>
           <i class="fa fa-star" aria-hidden="true"></i>
           <p className="text-muted"> I highly recommend BeepService to people who are looking for employees,
            this platform offers you competent and qualified profiles so you can easly recuit what you want ,
            personally I opted for it to look for a gardener and I have never regretted 
           </p>
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
       </div>
     </div>
     <div className="row">
       <div className="col-lg-8 mx-auto text-center">
         
       </div>
     </div>
   </div>
 </section>


 

 








 
<Footer/>


</div>
 );
};

export default Home;