import React, { Component } from 'react'
import './search.scss';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getUsers } from '../../actions';
var fullName;
var id;
var obj;
var image;
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      appName: 'React Search Bar',
      list: undefined,
    }
  }
  componentWillMount(){
    this.props.dispatch(getUsers())
  }
  renderUsers= (user) => (
    user.users ?  
        user.users.map( item => {
          fullName=item.name +' '+item.lastname
          id=item._id
          image=item.image
          obj={"Name":fullName,"id":id,"image":image}
          this.state.data.push(obj)
})
    :null
  )
  searchData(e) {
    var queryData = [];
    if(e.target.value != '') {
      this.state.data.forEach(function(person) {

          if(person.Name.toLowerCase().indexOf(e.target.value)!=-1) {
            if(queryData.length < 10) {
              queryData.push(person);
            }
          }
      });
    }
    this.setState({list: queryData});
  }
  render() {
    if (this.state.data.length===0){
      {this.renderUsers(this.props.user)}
    }
    return(
      <div>
        
        <SearchBar search={this.searchData.bind(this)} />
        {(this.state.list) ? <SearchResult data={this.state.list} /> : null  }
      </div>
    )
  }
}



class SearchBar extends React.Component {
  render() {
    return(
      <div className='InputContainer'>
        <input className='searchInput' onChange={this.props.search} placeholder="Search..."/><i class="fa fa-search" aria-hidden="true"></i>
      </div>
    )
  }
}

class SearchResult extends React.Component {

  render() {
    return (
      <div className='SearchContainer'>
        <ul className='searchList'>
          {this.props.data.map(function(value) {
              return <Item key={value} val={value} />
          })}
        </ul>
      </div>
    )

  }

}

class Item extends React.Component {
  render() {
    return(
      <li className='searchItem'>
        <div className='ImageContainerSearch'><img className='SearchImage' src={this.props.val.image}></img> 
        <Link to={`/seller/${this.props.val.id}`} className='SearchLinks'> {this.props.val.Name}</Link>
        </div>
      </li>
    )
  }

}




function mapStateToProps(state){
    return {
      
        user:state.user
    }
  }
  
  export default connect(mapStateToProps)(Search)