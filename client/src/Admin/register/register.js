import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import './register.scss';
import { addUser } from '../../actions';
import { connect } from 'react-redux';

class Register extends PureComponent {
  state ={
    name:'',
    lastname:'',
    email:'',
    password:'',
    confirmPassword:'',
    location:'',
    date:'',
    number:'',
    facebook:'',
    linkedin:'',
    image:'',  
    selectedOption:'',
    error:''
  }
  handleInputName = (event) => {
  this.setState({name:event.target.value})
  } 
  handleInputLastname = (event) => {
  this.setState({lastname:event.target.value})
  } 
  handleInputEmail = (event) => {
  this.setState({email:event.target.value})
  } 
  handleInputPassword = (event) => {
  this.setState({password:event.target.value})
  } 
  handleInputconfirm = (event) => {  
   
      
      this.setState({confirmPassword: event.target.value})
   

}
  handleInputLocation = (event) => {
  this.setState({location:event.target.value})
  } 
  handleInputDate = (event) => {
  this.setState({date:event.target.value})
  } 
  handleInputNumber = (event) => {
  this.setState({number:event.target.value})
  } 
  handleInputFacebook = (event) => {
    this.setState({facebook:event.target.value})
    } 
  handleInputLinkedIn = (event) => {
      this.setState({linkedin:event.target.value})
  } 
  handleInputImage = (event) => {
    this.setState({image:event.target.value})
} 

onValueChange=(event)=> {
  this.setState({
    selectedOption: event.target.value
  });
}
componentWillReceiveProps(nextProps){
  if(nextProps.user.register === false){
      this.setState({error:'Error,try again'})
  } else{
    this.props.history.push('/anounce')
  }
}
  submitForm = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    
    if (password !== confirmPassword) {
        this.setState({
          error:"Passwords do not match!"
        })


    } 
    else if (password.length < 6){
      this.setState({
        error:"Minimum password length must be 6 !"
      })
    }
    else {
      this.setState({
        error:""
      })
      
      
      this.props.dispatch(addUser({
        email:this.state.email,
        password:this.state.password,
        confirmPassword:this.state.confirmPassword,
        name:this.state.name,
        lastname:this.state.lastname,
        location:this.state.location,
        date:this.state.date,
        number:this.state.number,
        facebook:this.state.facebook,
        linkedin:this.state.linkedin,
        image:this.state.image,
        gender:this.state.selectedOption


    }))

    }
}

  render() {
  
    
    return (
       <div className='body'>
           <div className="form-container">
    <div className="titre">Registration</div>
    <div className="contentt">
      <form className='form' onSubmit={this.submitForm}>
        <div className="user-details">
          <div className="input-box">
            <span className="detaills"> Name</span>
            <input type="text" placeholder="Enter your name" 
              value={this.state.name}
              onChange={this.handleInputName}
            required/>
          </div>
          <div className="input-box">
            <span className="detaills">Lastname</span>
            <input type="text" placeholder="Enter your lastname" 
             value={this.state.lastname}
             onChange={this.handleInputLastname}
            required/>
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-envelope" aria-hidden="true"></i> Email</span>
            <input type="text" placeholder="Enter your email"
             value={this.state.email}
             onChange={this.handleInputEmail}
             required/>
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-phone" aria-hidden="true"></i> Phone Number</span>
            <input type="text" placeholder="Enter you number" 
             value={this.state.number}
             onChange={this.handleInputNumber}
            required/>
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-lock" aria-hidden="true"></i>  Password</span>
            <input type="password" placeholder="Enter your password" 
             value={this.state.password}
             onChange={this.handleInputPassword}
            required/>
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-lock" aria-hidden="true"></i>  Confirm Password</span>
            <input type="password" placeholder="Confirm your password" 
             value={this.state.confirmPassword}
             onChange={this.handleInputconfirm}
            required/>
          </div>
          <div className="input-box">
          <span className="detaills"><i className='fa fa-map-marker'></i> Location</span>
            <input type="text" placeholder="Enter your location" 
             value={this.state.location}
             onChange={this.handleInputLocation}
            required/>
          </div>
         
          <div className="input-box">
            <span className="detaills"><i className="fa fa-calendar" aria-hidden="true"></i> Date of birth</span>
            <input type="date"  
             value={this.state.date}
             onChange={this.handleInputDate}
            required/>

          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-facebook fa-border" aria-hidden="true"></i> Facebook link</span>
            <input type="url"  placeholder='entrer votre lien facebook'
             value={this.state.facebook}
             onChange={this.handleInputFacebook}
            required/>
            
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-linkedin fa-border " aria-hidden="true"></i> LinkedIn link</span>
            <input type="url"  placeholder='entrer votre lien linkedIn'
             value={this.state.linkedin}
             onChange={this.handleInputLinkedIn}
          />
            
          </div>
          
              
        </div>
        <div className="error">
        
       {this.state.error}
        
                    
         </div>
        
        
        <div className="gender-details"  >
          <input type="radio" value="Male" onChange={this.onValueChange}checked={this.state.selectedOption === 'Male'} id="dot-1"/>
          <input type="radio" value="Female" onChange={this.onValueChange}checked={this.state.selectedOption === 'Female'} id="dot-2"/>
          <input type="radio" value="Prefer not to say" onChange={this.onValueChange}checked={this.state.selectedOption === 'Prefer not to say'}id="dot-3"/>
          <span className="gender-title"><i className="fa fa-venus-mars" aria-hidden="true"></i> Gender</span>
          <div className="category">
            <label  htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
            </label>
            <label  htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
            </label>
            <label  htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <p className="link1"><span>You can use this site to create links for your image: </span> <a href="https://postimages.org/?fbclid=IwAR2xg2P85kmJEBvtGBUpgvuOQVG0MlVlyTcyThbbUHb3XC00F4vRPswDt9c" target="_blank">Link</a></p>
        <div className='txt-field Photo'>
                    <input type="url" required value={this.state.image} onChange={this.handleInputImage} />
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of an image of your achievements:</label>
                     
          </div>
        
             
                <div className="signup_link">
               Already have an account? <Link to="/login">Sign In</Link>
                </div>
        <div className="button">
          <input type="submit" value="Register" />
       

        </div>
      </form>
    </div>
  </div>
  

       </div>

    )
  }
}

function mapStateToProps(state){
  return{
      user:state.user
  }
}

export default connect(mapStateToProps)(Register)