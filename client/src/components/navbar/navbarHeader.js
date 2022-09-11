import React from "react";
import './navbar.css';
import Search from "./search";
import { Link } from "react-router-dom";



const NavbarHeader = () => {
  return(
      <div> 
      <header className= "navbar navbar-expand-lg  fixed-top">
      <div className="container-fluid">
      <Link className="navbar-brand" to='/'>BeepService</Link>
      <form className="d-flex">
          <Search/>
         
      </form>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-collapse-mynavbar " id="navbarSupportedContent">
      <ul className="navbar-nav myNavbarList me-auto mb-2 mb-lg-0">
        <li className=" nav-item ItemNavbar">
            <Link className="nav-link nav-link-myNav active" aria-current="page" to='/anounce'><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
          </li>
          <li className=" nav-item ItemNavbar">
           
            <Link className="nav-link nav-link-myNav active" aria-current="page" to='/Profile'><i class="fa fa-user" aria-hidden="true"></i> Profile</Link>
          </li>
          
          
          <li className=" nav-item ItemNavbar dropdown">
            <a className="nav-link nav-link-myNav active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-tasks" aria-hidden="true"></i> Categories
            </a>
            <ul className=" dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/anouncePage/#Gardening">Gardening</a> </li>
              <li><a className="dropdown-item" href="/anouncePage/#babysitter">Baby-sitter</a></li>
              <li><a className="dropdown-item" href="/anouncePage/#diy">DIY</a></li>
              <li><a className="dropdown-item" href="/anouncePage/#privateLesson">private lessons</a></li>
              <li><a className="dropdown-item" href="/anouncePage/#Housework">Houseworker</a></li>
              <li><a className="dropdown-item" href="/anouncePage/#Esthetician">Esthetician</a></li>
            </ul>
          </li>
          <li className=" nav-item ItemNavbar">
            <Link className="nav-link nav-link-myNav active" aria-current="page" to='/logout'><i class="fa fa-sign-out" aria-hidden="true"></i> Log Out</Link>
          </li>
        </ul>
        
      </div>
    </div>
    </header>
    
    </div>
     )
    
};

export default NavbarHeader