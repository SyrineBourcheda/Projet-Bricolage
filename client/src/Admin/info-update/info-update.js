import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser,updateUser } from '../../actions';
class InfoUpdate extends PureComponent {
    componentWillMount(){
        this.props.dispatch(getUser())
    }
 
  state ={
    formdata:{
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
  }
  handleInput = (event,name) => {
    const newFormdata = {
        ...this.state.formdata
    }
    newFormdata[name] = event.target.value

    this.setState({
        formdata:newFormdata
    })
}
 

onValueChange=(event)=> {
  this.setState({
    selectedOption: event.target.value
  })
}

submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(updateUser(this.state.formdata))
}
componentWillReceiveProps(nextProps){
    let user = nextProps.user.userProfile;
    this.setState({
        formdata:{
         _id:user._id,
         name:user.name,
        lastname:user.lastname,
        email:user.email,
        number:user.number,
        facebook:user.facebook,
        linkedin:user.linkedin,
        image:user.image,
        location:user.location,
        password:user.password,
        confirmPassword:user.confirmPassword,
        date:user.date,
        selectedOption:user.gender
       
        }
    })
    if(nextProps.user.updateUser){
      this.props.history.push(`/profile`)
      window.location.reload(false);
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
              value={this.state.formdata.name}
              onChange={(event)=>this.handleInput(event,'name')}
            required/>
          </div>
          <div className="input-box">
            <span className="detaills">Lastname</span>
            <input type="text" placeholder="Enter your lastname" 
              value={this.state.formdata.lastname}
              onChange={(event)=>this.handleInput(event,'lastname')}
            required/>
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-envelope" aria-hidden="true"></i> Email</span>
            <input type="text" placeholder="Enter your email"
              value={this.state.formdata.email}
              onChange={(event)=>this.handleInput(event,'email')}
             required/>
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-phone" aria-hidden="true"></i> Phone Number</span>
            <input type="text" placeholder="Enter you number" 
              value={this.state.formdata.number}
              onChange={(event)=>this.handleInput(event,'number')}
            required/>
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-lock" aria-hidden="true"></i>  Password</span>
            <input type="password" placeholder="Enter your password" 
              value={this.state.formdata.password}
              onChange={(event)=>this.handleInput(event,'password')}
            required/>
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-lock" aria-hidden="true"></i>  Confirm Password</span>
            <input type="password" placeholder="Confirm your password" 
              value={this.state.formdata.confirmPassword}
              onChange={(event)=>this.handleInput(event,'confirmPassword')}
            required/>
          </div>
          <div className="input-box">
          <span className="detaills"><i className='fa fa-map-marker'></i> Location</span>
            <input type="text" placeholder="Enter your location" 
             value={this.state.formdata.location}
             onChange={(event)=>this.handleInput(event,'location')}
            required/>
          </div>
         
          <div className="input-box">
            <span className="detaills"><i className="fa fa-calendar" aria-hidden="true"></i> Date of birth</span>
            <input type="date"  
              value={this.state.formdata.date}
              onChange={(event)=>this.handleInput(event,'date')}
            required/>

          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-facebook fa-border" aria-hidden="true"></i> Facebook link</span>
            <input type="url"  placeholder='entrer votre lien facebook'
             value={this.state.formdata.facebook}
             onChange={(event)=>this.handleInput(event,'facebook')}
            required/>
            
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-linkedin fa-border " aria-hidden="true"></i> LinkedIn link</span>
            <input type="url"  placeholder='entrer votre lien linkedIn'
             value={this.state.formdata.linkedin}
             onChange={(event)=>this.handleInput(event,'linkedin')}
          />
            
          </div>
          <p className="link1"><span>You can use this site to create links for your image: </span> <a href="https://postimages.org/?fbclid=IwAR2xg2P85kmJEBvtGBUpgvuOQVG0MlVlyTcyThbbUHb3XC00F4vRPswDt9c" target="_blank">Link</a></p>

              
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
                    <input type="url" required  value={this.state.formdata.image}
                       onChange={(event)=>this.handleInput(event,'image')}/>
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of an image of your Profile:</label>
                     
          </div>
        
             
                <div className="signup_link">
               Already have an account? <Link to="/login">Sign In</Link>
                </div>
        <div className="button">
        <input type="submit" value="Update" />
       

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

export default connect(mapStateToProps)(InfoUpdate)