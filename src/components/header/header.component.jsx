import React from 'react';
import './header.style.css';


export const Header = props => {

  return <div className='header'>
    <div className='container'>
      <div className='row'>
        <div className='col-6 text-left'>Logo</div>
        <div className='col-6 text-right'>Logout</div>
      </div>
    </div>
  </div>
  };