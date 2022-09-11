import React, { Component } from 'react';
import './announce-form.scss';
import { connect } from 'react-redux';
import { updateAd,getAdId } from '../../actions';

class FormUpdate extends Component {
 componentWillMount(){
  this.props.dispatch(getAdId(this.props.match.params.id))
  
 }
 componentDidMount(){
  this.props.dispatch(getAdId(this.props.match.params.id))
 }


  state={
    formdata:{

      name:"",
      lastname:"",
      email:"",
      number:"",
      description:"",
      skills:"",
      facebook:"",
      linkedin:"",
      image:"",
      image1:"",
      image2:"",
      image3:"",
      image4:"",
      image5:"",
      value:"",
      location:"",
      price:"",
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
 
  handleChange = (event) =>{
    this.setState({value: event.target.value});
  }
 
  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(updateAd(this.state.formdata))
}


componentWillReceiveProps(nextProps){
  let ad = nextProps.ads.upDate;
  this.setState({
      formdata:{
          _id:ad._id,
          name:ad.name,
          lastname:ad.lastname,
      email:ad.email,
      number:ad.number,
      description:ad.description,
      skills:ad.skills,
      facebook:ad.facebook,
      linkedin:ad.linkedin,
      image:ad.image,
      image1:ad.image1,
      image2:ad.image2,
      image3:ad.image3,
      image4:ad.image4,
      image5:ad.image5,
      value:ad.category,
      location:ad.location,
      price:ad.price,
      }
  })
  if(nextProps.ads.updateAd){
    this.props.history.push(`/details/${ad._id}`)
    window.location.reload(false);

}
}



  render() {
   
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
             value={this.state.formdata.name}
             onChange={(event)=>this.handleInput(event,'name')}
           />
          </div>
          <div className="input-box">
            <span className="detaills">Lastname</span>
            <input type="text" placeholder="Enter your lastname" 
            value={this.state.formdata.lastname}
            onChange={(event)=>this.handleInput(event,'lastname')}
           />
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-envelope" aria-hidden="true"></i> Email</span>
            <input type="text" placeholder="Enter your email"
             value={this.state.formdata.email}
             onChange={(event)=>this.handleInput(event,'email')}
             />
          </div>
         
          
          
          <div className="input-box">
            <span className="detaills"><i className="fa fa-phone" aria-hidden="true"></i> Phone Number</span>
            <input type="text" placeholder="Enter your number" 
             value={this.state.formdata.number}
             onChange={(event)=>this.handleInput(event,'number')}
            />
          </div>
          <div className="input-box">
            <span className="detaills"> Job description</span>
            <textarea id="w3review" name="w3review" rows="5" cols="33" placeholder='Enter a general description' value={this.state.formdata.description}
                            onChange={(event)=>this.handleInput(event,'descrription')}></textarea>
          </div>
          <div className="input-box">
            <span className="detaills"> Skills and Qualities</span>
            <textarea id="w3review" name="w3review" rows="5" cols="33" placeholder='Enter your skills'value={this.state.formdata.skills}
                            onChange={(event)=>this.handleInput(event,'skills')}></textarea>
           
          </div>
          <div className="input-box">
            <span className="detaills"><i className="fa fa-dollar"></i> Price</span>
            <input type="text" placeholder="Enter the price " 
             value={this.state.formdata.price}
             onChange={(event)=>this.handleInput(event,'price')}
            />
          </div>
          <div className="input-box">
            <span className="detaills"><i className='fa fa-map-marker'></i> Location</span>
            <input type="text" placeholder="Enter your location" 
            value={this.state.formdata.location}
            onChange={(event)=>this.handleInput(event,'location')}
           />
          </div>
          <div className="input-box">
            <span className="detaills"><i className='fa fa-facebook fa-border'></i> Facebook link</span>
            <input type="text" placeholder="Enter your link facebook" 
             value={this.state.formdata.facebook}
             onChange={(event)=>this.handleInput(event,'facebook')}
            />
          </div>
          <div className="input-box">
            <span className="detaills"><i className='fa fa-linkedin fa-border'></i> LinkedIn link</span>
            <input type="text" placeholder="Enter your link linkedin" 
             value={this.state.formdata.linkedin}
             onChange={(event)=>this.handleInput(event,'linkedin')}
           />
          </div>
          <p className="link1"><span>You can use this site to create links for your image: </span> <a href="https://postimages.org/?fbclid=IwAR2xg2P85kmJEBvtGBUpgvuOQVG0MlVlyTcyThbbUHb3XC00F4vRPswDt9c">Link</a></p>
          <div className='txt-field Photo'>
                    <input type="url" required  value={this.state.formdata.image}
                       onChange={(event)=>this.handleInput(event,'image')}/>
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of your achievement:</label>
                     
          </div>
          <div className='txt-field Photo'>
                    <input type="url"   value={this.state.formdata.image1}
                       onChange={(event)=>this.handleInput(event,'image1')}/>
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of your achievement:</label>
                     
          </div>
                <div className='txt-field Photo'>
                    <input type="url"  value={this.state.formdata.image2}
                            onChange={(event)=>this.handleInput(event,'image2')} />
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of an image of your achievements:</label>
                     
                </div>
                <div className='txt-field Photo'>
                    <input type="url" value={this.state.formdata.image3}
                            onChange={(event)=>this.handleInput(event,'image3')} />
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of an image of your achievements:</label>
                     
                </div>
                <div className='txt-field Photo'>
                    <input type="url" value={this.state.formdata.image4}
                            onChange={(event)=>this.handleInput(event,'image4')} />
                    <span className='bar'></span>

                     <label><i className='fa fa-image'></i> Enter url of an image of your achievements:</label>
                     
                </div>
                <div className='txt-field Photo'>
                    <input type="url"  value={this.state.formdata.image5}
                            onChange={(event)=>this.handleInput(event,'image5')} />
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
      ads:state.ads
  }
}

export default connect(mapStateToProps)(FormUpdate)