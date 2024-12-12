import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id='container'>
        <div id='header'>
          <img className='logo' src='/logo.jpg' alt='logo' />
          <div className='logoText'>
            <span>Job</span> Portal
          </div>
          <img className='signinIcon' src='/user.jpg' alt='signin' />
          <label className='signinText'>Sign In</label>
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
