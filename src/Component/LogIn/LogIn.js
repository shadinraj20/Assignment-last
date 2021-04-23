import React from 'react';
import './LogIn.css';
import image from '../../image/download.png';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import { Link, useHistory } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
  const history= useHistory();

    const handleSignInGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const credential = result.credential;
    const user = result.user;
    console.log(user);
    history.push('/admin/book')

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    
  });

    }
    return (
        <div className='container mt-5 d-flex justify-content-center '>
            <div>
                <div className="card">
                    <div className="card-body justify-content-center">
                        <h5 className="card-title title">Log In</h5>
                        <button className="btn btn-light rounded-pill" onClick={handleSignInGoogle} type="submit">
                          <img className="image" src={image} alt="" width="40" className="pe-3"/>
                          Continue With Google
                          </button> 
  
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LogIn;