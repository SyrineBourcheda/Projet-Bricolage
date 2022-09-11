import React,{Component} from "react";
import './profile.scss';
import { connect } from 'react-redux';
import NavbarHeader from "../navbar/navbarHeader";
import Footer from "../Footer/footer";
import { Link } from 'react-router-dom';
import { getUser,getUserAds } from "../../actions";


class userProfile extends React.Component{
  componentWillMount(){
    this.props.dispatch(getUser());
    this.props.dispatch(getUserAds());
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  renderUser = (user) => (
    user.userProfile ?
    <div>
         <NavbarHeader/>
           <div>
              <div className="UserPresentation">
                  <img src={user.userProfile.image} alt="John Doe" className="profile-image"/>
                  <h1 className="tag name">{user.userProfile.name} {user.userProfile.lastname}</h1>
                  
                </div>
              <main className="MainDescription">
                <div className="Bio">
                  <h2>About</h2>
                  <ul className="AboutList">
                    <li className="AboutListItems"><i class="fa fa-map-marker" aria-hidden="true"></i> Location:{user.userProfile.location}
                    </li>
                    <li className="AboutListItems"><i class="fa fa-phone" aria-hidden="true"></i><a href="tel:0000000"> Phone Number:{user.userProfile.number}</a> 
                    </li>
                    <li className="AboutListItems"><i class="fa fa-calendar" aria-hidden="true"></i> date of birth:{user.userProfile.date}
                    </li>
                    <li className="AboutListItems"><i class="fa fa-venus-mars" aria-hidden="true"></i> Gender:{user.userProfile.gender}
                    </li>
                    <li className="AboutListItems"><i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:syrine.dkhil@ensi-uma.tn">email:{user.userProfile.email}</a>
                    </li>
                    <li className="AboutListItems"><i class="fa fa-facebook-official" aria-hidden="true"></i><a href={user.userProfile.facebook}>  facebook</a>
                    </li>
                    <li className="AboutListItems"><i class="fa fa-linkedin-square" aria-hidden="true"></i><a href={user.userProfile.linkedin}>  linkedIn</a>
                    </li>
                  </ul>
                  <Link to="/userUpdate"> <button className=" UpdateBio" >Edit Information</button></Link>
                </div> 
               
                </main>
               
              
            </div>
            
    </div>
    :null
  )

  renderUserAd = (ads) => (
    ads.userads ?
    ads.userads.map( item => (
      <li class="card-01">
      <figure class="card-container">
       <div class="bg"></div>
         <span class="card"><h3 tabindex="0">{item.category}</h3></span>
         <div className="anounce-image">
           <img src={item.image}></img>
           <Link className="Details ButtonDetails" to={`/details/${item._id}`}>show more</Link><br/>
         
          <Link to={`/delete/${item._id}`}> <button className=" delete" >Delete</button></Link>
          
           <Link  to={`/form/${item._id}`}><button className=" update">Update</button></Link>

         </div>
         
      </figure>
   </li>
  ))
    :null
  )

    render(){
      
      let ads=this.props.ads
      let user = this.props.user
        return(
          <div>
          <div className="MainProfile">{this.renderUser(user)}       
           <div className="Publication">
                <div class="section section-cards" data-anim-scroll-group="cards">
	                <div class="section-content">
                  <div className='button-announcement'>
                      <Link to='/form' className='Annonce ProfileAnounce'>Add an announcement</Link>
                   </div>
		                <h2 class="headline">My anouncements:</h2>
		                <div class="cards-wrapper">
			                 <ul>
					              {this.renderUserAd(ads)}
                       
			                  </ul>
		                </div>
	                </div>
                </div>

                </div>
               
          </div>
           <Footer/>
           </div>
          
        )
    }
}
function mapStateToProps(state){
  return{
      user:state.user,
      ads:state.ads
  }
}

export default connect(mapStateToProps)(userProfile)