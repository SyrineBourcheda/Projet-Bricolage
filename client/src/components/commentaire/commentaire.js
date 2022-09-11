import React,  {Component} from "react";
import { connect } from 'react-redux';
import { addComment,getUser} from "../../actions";

class CommentForm extends React.Component {

    state={
      name:'',
      body:'',
      adId:'',
      error:''
    }
    componentWillMount(){
      this.props.dispatch(getUser())
    }
    
    handleInputName = (event) => {
      this.setState({name:event.target.value})
    } 
    handleInputBody = (event) => {
      this.setState({body:event.target.value})
      } 
      componentWillReceiveProps(nextProps){
        if(nextProps.comments.success === false){
            this.setState({error:'Error,try again'})
        } else{
            this.setState({
                name:'',
                body:''
            })
        }
    }
      submitForm = (e) => {
        e.preventDefault();
        this.setState({
          error:""
        })
        this.props.dispatch(addComment({
          name:this.props.user.login.name,
          lastname:this.props.user.login.lastname,
          body:this.state.body,
          adId:this.props.ad._id,
          image:this.props.user.userProfile.image
      }))
    }
    renderComment=(user)=>(
      user.userProfile ?
      <div>
         <div className="comment-form-fields">
          <div className='ImageContainerSearch imageComment'><img className='SearchImage' src={this.props.user.userProfile.image} ></img>
          <h3 className="CommentWritter">{this.props.user.login.name} {this.props.user.login.lastname}</h3></div>
            
              <div className="Border"></div>
          <textarea placeholder="Comment" rows="4" required value={this.state.body} onChange={this.handleInputBody} ></textarea>
          </div>
        </div>
      :null 
    )
    render() {
     
      return (
        <form className="comment-form" onSubmit={this.submitForm}>
         {this.renderComment(this.props.user)}
          <div className="comment-form-actions">
            <button className="buttonComment" type="submit" onClick={() => window.location.reload(false)}>Post Comment</button>
          </div>
        </form>
      );
    } // end render
    
  
  } // end CommentForm component
  function mapStateToProps(state){
    return {
      
        comments:state.comments,
        user:state.user
    }
  }
  
  export default connect(mapStateToProps)(CommentForm)
  