import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  showSignin(){
    let popup=document.getElementById('popup');
    popup.style.display='block';
  }
  closeSignin(event){
    if(event.target.id==='popup')
    {
      let popup=document.getElementById('popup');
      popup.style.display='none';
    }
  }
  render() {
    return (
      <div id='container'>
        <div id='popup' onClick={this.closeSignin}>
          <div id='popupwindow'>
            <div id='popupheader'>Login</div>
            <div id='signin'>
              <label className='usernameLabel'> User Name*</label>
              <input type='text' id='username' />
              <label className='passwordLabel'>Password*</label>
              <input type='password' id='password' />
              <div className='forgotPassword'>Forgot <label>Password</label></div>
              <button className='signinbutton'>SignIn</button>
              <div className='div1'></div>
              <div className='div2'>
                Don't have an account? <label>Sign Up Now</label>
              </div>
            </div>
          </div>
          </div>
        <div id='header'>
          <img className='logo' src='/logo.jpg' alt='logo' />
          <div className='logoText'>
            <span>Job</span> Portal
          </div>
          <img className='signinIcon' src='/user.jpg' alt='signin'  onClick={this.showSignin}/>
          <label className='signinText' onClick={this.showSignin}>Sign In</label>
        </div>
        <div id='content'>
          <div className='text1'>INDIA'S #1 JOB PLATFORM</div>
          <div className='text2'>Your job search ends here</div>
          <div className='text3'>Discover career opportunities</div>
          <div className='searchbar'>
              <input type='text'  className='searchText' placeholder='Search by skill' /> 
              <input type='text'  className='searchLocation' placeholder='Job Location' />
              <button className='searchButton'>Search jobs</button>
          </div>
        </div>
        <div id='footer'>
          <label className='copyrightText'>Copyright @ 2025. All rights reserved.</label>
          <img className='socialmediIcon' src='/facebook.jpg' alt='facebook' />
          <img className='socialmediIcon' src='/twiter.png' alt='twitter' />
          <img className='socialmediIcon' src='/linkedin.png' alt='linkedin' />

        </div>

      </div>
    );
  }
}
