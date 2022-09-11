import React,  {Component} from "react";
import NavbarHeader from "../navbar/navbarHeader";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './details.scss'
import { getDetailsAd ,clearAds,addComment,clearComments } from "../../actions";
import CommentForm from '../commentaire/commentaire'
import CommentBox from "../commentaire/commentBox";

class AnounceDetails extends Component{
  componentWillMount(){
    this.props.dispatch(getDetailsAd(this.props.match.params.id))
}
componentWillUnmount(){
  this.props.dispatch(clearAds())
  
}
componentDidMount() {
  window.scrollTo(0, 0)
}
renderAD = (ads) => (
  ads.adDetails ?
  <div className="containerDetails">
                    <div className="Informations">
                    <div className="containerImage">
                        <img src={ads.adDetails.image}/>
                    </div>
                      <div className="MainInformations">
                      <h1 className="welcomeWord">Welcome <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg> I hope you find what you are looking for</h1>
                    <h1 className="sellerName">Seller: <i>{ads.adDetails.name} {ads.adDetails.lastname}</i></h1>
                    <h2 className="FirstTitle">Qualifications</h2>
                           <p className="MainDetails">{ads.adDetails.description}
                           </p>
                           <h4 className="FirstTitle">Skills</h4>
                           <p className="MainDetails">{ads.adDetails.skills}
                           </p>
                           <h4 className="FirstTitle">Location</h4>
                           <p className="MainDetails">{ads.adDetails.location}</p>
                           <h4 className="FirstTitle">Price:</h4>
                           <p className="MainDetails">{ads.adDetails.price}</p>
                           
                           <p className="MainDetails Note"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                </svg> Note that the price mentioned is the lowest price and 
                           this price can increase depending on the displacement made,
                            the time needed to perform this task and of course its difficulty</p>
                      </div>
                      
                        
                      
                      
                    </div>
                    <div className="PreviousExperience">
                      <h2 className="FirstTitle previous">Previous Experience</h2>
                    <ul class="scroll">
                      <li class="list-item"><img className="previousImage" src={ads.adDetails.image}></img></li>
                      <li class="list-item"><img className="previousImage" src={ads.adDetails.image1}></img></li>
                      <li class="list-item"><img className="previousImage" src={ads.adDetails.image2}></img></li>
                      <li class="list-item" ><img className="previousImage" src={ads.adDetails.image3}></img></li>
                      <li class="list-item"><img className="previousImage" src={ads.adDetails.image4}></img></li>
                      <li class="list-item" ><img className="previousImage" src={ads.adDetails.image5}></img></li>
                      <li class="list-item"><img className="previousImage" src={ads.adDetails.image6}></img></li>
  
                    </ul>
                    </div>
                    <div className="CONTACT">
                    <div className="contactForm">
                      <h1 className="ContactMe">Don't hesitate to check my profile for more informations.</h1>
                      <h2 className="findContact">You will find my phone number and my email to contact me.</h2>
                      <div class="imgProfile">
                         <p><Link className="Profile" to={`/seller/${ads.userDetails[0]._id}`}>
                           Profile
                           </Link>
                         </p>
                        <div class="click-me">
                       <div class="wrap">
                          <i class="fa fa-hand-pointer-o" aria-hidden="true"></i>
                       <div class="click"></div>
                      </div>
                      </div>
                    </div>
                    <script src="https://use.fontawesome.com/1349abbc34.js"></script>
                      
                      </div>
                      </div>
                      <div className="comments">
                        <CommentBox ad={this.props.ads.adDetails} />
                        
                      </div>
   </div>
   :null
              
   )
    render(){
      let ads = this.props.ads;
      console.log(this.props.ads.userDetails);
      console.log(this.props.comments);
        return(
            <div>
             
                <NavbarHeader/>
                <div className="detailsBodyAnounce">
                {this.renderAD(ads)}
                </div>
                <Footer/>
            </div>
        )
    }
}
function mapStateToProps(state){
  return {
      ads: state.ads
  }
}

export default connect(mapStateToProps)(AnounceDetails)
