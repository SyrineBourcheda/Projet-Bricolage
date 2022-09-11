import React, { PureComponent } from 'react';
import './announce-form.scss';
import { connect } from 'react-redux';
import { addAD } from '../../actions';

class Form extends PureComponent {
  state ={
    name:'',
    lastname:'',
    email:'',
    number:'',
    description:'',
    skills:'',
    facebook:'',
    linkedin:'',
    photo:'',
    image1:'',
    image2:'',
    image3:'',
    image4:'',
    image5:'',
    value:'',
    location:'',
    price:'',
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
  handleInputNumber = (event) => {
  this.setState({number:event.target.value})
  } 
 
  handleInputDescription = (event) => {
  this.setState({description:event.target.value})
  } 
  handleInputSkills = (event) => {
  this.setState({skills:event.target.value})
  } 
  handleInputFacebook = (event) => {
  this.setState({facebook:event.target.value})
  } 
  handleInputLinkedin = (event) => {
    this.setState({linkedin:event.target.value})
  } 
  handleInputPhoto = (event) => {
    this.setState({photo:event.target.value})
  } 
  handleInputImage1 = (event) => {
    this.setState({image1:event.target.value})
  } 
  handleInputImage2 = (event) => {
    this.setState({image2:event.target.value})
  } 
  handleInputImage3 = (event) => {
    this.setState({image3:event.target.value})
  } 
  handleInputImage4 = (event) => {
    this.setState({image4:event.target.value})
  } 
  handleInputImage5 = (event) => {
    this.setState({image5:event.target.value})
  } 
  handleInputPrice = (event) => {
    this.setState({price:event.target.value})
  } 
  handleInputLocation = (event) => {
    this.setState({location:event.target.value})
  } 
  handleChange = (event) =>{
    this.setState({value: event.target.value});
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.ads.ad === false){
        this.setState({error:'Error,try again'})
    } else{
      this.props.history.push('/anounce')
    }
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({error:''});

    this.props.dispatch(addAD({
            email:this.state.email,
            number:this.state.number,
            name:this.state.name,
            lastname:this.state.lastname,
            description:this.state.description,
            skills:this.state.skills,
           facebook:this.state.facebook,
           linkedin:this.state.linkedin,
           category:this.state.value,
           image:this.state.photo,
           image1:this.state.image1,
           image2:this.state.image2,
           image3:this.state.image3,
           image4:this.state.image4,
           image5:this.state.image5,
           price:this.state.price,
           location:this.state.location

        }))
 
}

  render() {
   console.log(this.state.value)
    
    return (
    <div className='body'>
       <div className="form-container">
    <div className="titre"> Your announcement</div>
    <div className="contenttt">
      <form className='form' onSubmit={this.submitForm}>
        <div className="user-details">
          <div className="input-box">
            <span className="detaills">Name</span>
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
            <input type="text" placeholder="Enter your number" 
             value={this.state.number}
             onChange={this.handleInputNumber}
            required/>
          </div>
          <div className="input-box">
            <span className="detaills"> Job description</span>
            <textarea id="w3review" name="w3review" rows="5" cols="33" placeholder='Enter a general description' value={this.state.description}
             onChange={this.handleInputDescription}></textarea>
          </div>
          <div className="input-box">
            <span className="detaills"> Skills and Qualities</span>
            <textarea id="w3review" name="w3review" rows="5" cols="33" placeholder='Enter your skills' value={this.state.skills}
             onChange={this.handleInputSkills}></textarea>
           
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-dollar"></i> Price</span>
            <input type="text" placeholder="Enter the price " 
             value={this.state.price}
             onChange={this.handleInputPrice}
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
            <span className="detaills"><i className='fa fa-facebook fa-border'></i> Facebook link</span>
            <input type="text" placeholder="Enter your link facebook" 
             value={this.state.facebook}
             onChange={this.handleInputFacebook}
            required/>
          </div>
          <div className="input-box">
            <span className="detaills"><i className='fa fa-linkedin fa-border'></i> LinkedIn link</span>
            <input type="text" placeholder="Enter your link linkedin" 
             value={this.state.linkedin}
             onChange={this.handleInputLinkedin}
           />
          </div>
          
          <p className="link1"><span>You can use this site to create links for your images: </span> <a href="https://postimages.org/?fbclid=IwAR2xg2P85kmJEBvtGBUpgvuOQVG0MlVlyTcyThbbUHb3XC00F4vRPswDt9c">Link</a></p>
          
          <div className='txt-field Photo'>
            <input type="url" required  value={this.state.photo} onChange={this.handleInputPhoto} />
              <span className='bar'></span>
              <label><i className='fa fa-image'></i> Enter url of an image of your achievements:</label>
        </div>
          <div className='txt-field Photo'>
                    <input type="url"  value={this.state.image1} onChange={this.handleInputImage1} />
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of an image of your achievements:</label>
                     
                </div>
                <div className='txt-field Photo'>
                    <input type="url"  value={this.state.image2} onChange={this.handleInputImage2} />
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of an image of your achievements:</label>
                     
                </div>
                <div className='txt-field Photo'>
                    <input type="url"  value={this.state.image3} onChange={this.handleInputImage3} />
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of an image of your achievements:</label>
                     
                </div>
                <div className='txt-field Photo'>
                    <input type="url"  value={this.state.image4} onChange={this.handleInputImage4} />
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of an image of your achievements:</label>
                     
                </div>
                <div className='txt-field Photo'>
                    <input type="url"  value={this.state.image5} onChange={this.handleInputImage5} />
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of an image of your achievements:</label>
                     
                </div>
          
          
        </div>
        

      
        
         

<div className="work-select" >
Choose one category:
  <select value={this.state.value} onChange={this.handleChange} id="selected">
  
    <option value="">--------</option>
    <option value="Gardening">Gardening</option>
    <option value="Diy">Diy</option>
    <option value="Baby Sitter">Baby-Sitter</option>
    <option value="Private lessons">Private Lessons</option>
    <option value="Houseworker">Houseworker</option>
    <option value="Esthetician">Esthetic</option>
    
  </select>
</div>
       <div className="button">
          <input type="submit" value="Publish" />
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
      ads:state.ads
  }
}

export default connect(mapStateToProps)(Form)