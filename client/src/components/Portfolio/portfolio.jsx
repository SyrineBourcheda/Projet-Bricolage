import React from 'react';

import img1 from './imgg/img1.jpg';
import img2 from './imgg/img2.jpg';
import img3 from './imgg/img3.jpg';
import img4 from './imgg/img4.webp';
import img5 from './imgg/img5.webp';
import img6 from './imgg/img6.jpg'



const Portfolio = ()=>{
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center ">
              <h2 className="section-heading text-uppercase">Categories</h2>
              <h3 className="section-subheading text-muted">With SmartJob, you benefit from a great flexibilty and a large choice of home works </h3>
            </div>
          </div>
          <div className="row">
            
               
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="/login">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={img1 } alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Gardening</h4>
                            
                        </div>
                    
                    </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="/login">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={img2} alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Baby-Sitter</h4>
                        
                        </div>
                    
                    </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="/login">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={img3} alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>DIY</h4>
                           
                        </div>
                    
                    </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="/login">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={img4} alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Houseworker</h4>
                            
                        </div>
                    
                    </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="/login">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={img5} alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Private Lessons</h4>
                            
                        </div>
                    
                    </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="/login">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={img6} alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Esthetician</h4>
                            
                        </div>
                    
                    </div>






        </div>
    </div>        
        
      </section>
     
    )
}
export default Portfolio