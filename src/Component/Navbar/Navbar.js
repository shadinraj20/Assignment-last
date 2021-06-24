import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import './Navbar.css';

const Navbar = () => {
  const[name,setName]=useState(null)
  useEffect(()=>{
    const userName = JSON.parse(localStorage.getItem('user'))
    if (userName) {
      setName(userName.name)
    }
   
},[])
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-5">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link active" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link active" to="/admin/book">Admin</Link>
              </li>
              <li className="nav-item me-5">
                <Link to="/login"><button className="btn btn-success">{name}</button></Link>
              </li>
                
               <li className="nav-item me-5">
                <Link to="/login"><button className="btn btn-success">Log in</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;