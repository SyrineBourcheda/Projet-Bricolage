import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profile from './images/avatar1.png';
import facebook from './images/facebook.png';
import google from './images/google.png';
import twitter from './images/twitter.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import  './login.css';


class Login extends Component {
    componentWillMount(){
    }
    state = {
        email:'',
        password:'',
        error:'',
        success:false
    }
    handleInputEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleInputPassword = (event) => {
        this.setState({password:event.target.value})
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.user.login.isAuth){
          this.props.history.push('/anounce')
      }
  }
    submitForm = (e) =>{
      e.preventDefault();
      this.props.dispatch(loginUser(this.state))
  }
  render() {
    let user = this.props.user;
    return (
       <div className='bod'>
        <div className='center'>
            <img src={profile} alt='img'/>
             <h3>Welcome</h3>
           <form onSubmit={this.submitForm}>
                <div className='txt-field'>
                    <input type="text" required value={this.state.email}
                             onChange={this.handleInputEmail}/>
                    <span></span>

                     <label><i className="fa fa-envelope" aria-hidden="true"></i> Email</label>
                     
                </div>
                <div className='txt-field'>
                    <input type="password" required value={this.state.password}
                            onChange={this.handleInputPassword}/>
                    <span></span>

                     <label><i className="fa fa-lock" aria-hidden="true"></i> Password</label>
                </div>
                <div className='pass'>Forgot Password? </div>
                <input type="submit" value="Login"  />
                <div className="signup_link">
                Don't have an account? <Link to="/register">Sign Up</Link>
                </div>
           </form>
           <div className="error">
                    {
                        user.login ? 
                            <div>{user.login.message}</div>
                        :null
                    }
                    </div>
           <p>Login with social media</p>
                 <ul className="sci">
                     <li><img src={facebook} alt="img1"/></li>
                     <li><img src={google} alt="img2"/></li>
                     <li><img src={twitter} className="twitter" alt="img3"/></li>
                 </ul>
        </div>

       </div>
    )
  }
}
function mapStateToProps(state){
  return {
      user:state.user
  }
}

export default connect(mapStateToProps)(Login)


  
