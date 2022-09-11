import React,  {Component} from "react";
import NavbarHeader from "../navbar/navbarHeader";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getAdComments ,clearComments } from "../../actions";
import CommentForm from './commentaire'

class CommentBox extends React.Component {
    
      
  constructor() {
    super();
    
    this.state = {
      showComments: false,
      Comments: []
    };
  }
   
   
    componentWillMount(){
        this.props.dispatch(getAdComments(this.props.ad._id))
    }
    
    renderItems = (comments) => (
      comments.adComment ?  
    
           comments.adComment.map( item => (
            
           this.state.Comments.push(item)
           
          ))
      :null
    )
   
   
    
    render () {
      console.log(this.state.Comments)
      if (this.state.Comments.length===0){
        {this.renderItems(this.props.comments)}
      }
      
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
      
      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
        <div className="comment-box">
          <h2>Join the Discussion!</h2>
          <CommentForm ad={this.props.ad} com={this.props.commentaire}/>
          <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>
          <h3>Comments</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>  
      );
    } // end render
    
    
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments() {    
      return this.state.Comments.map((comment) => { 
        return (
          <Comment 
            name={comment.name} 
            lastname={comment.lastname}
            body={comment.body} 
            image={comment.image}
            key={comment.id} />
        ); 
      });
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comments`;
      }
    }
  } // end CommentBox component
  
  
  
  class Comment extends React.Component {
    render () {
      return(
        <div className="comment">
          
          <div className="commentImageProfil">
          <img className='SearchImage SearchImageComment' src={this.props.image} ></img>
          <p className="comment-header">{this.props.name} {this.props.lastname}</p>
          </div>
          <p className="comment-body">- {this.props.body}</p>
          
        </div>
      );
    }
    
  }
function mapStateToProps(state){
    return {
      
        comments:state.comments
    }
  }
  
  export default connect(mapStateToProps)(CommentBox)