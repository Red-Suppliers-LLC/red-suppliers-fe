import React from 'react';
import NavBar from './NavBar';
import '../styling/Contact.css';

const Contact =()=>{
  return(
    <div className='Contact_Contain'>
      <NavBar/>
      <div className ='Contact_Input'>
        <input 
        className='input'
        name={'Name'}
        placeholder={'Name'}
        
        />
        <input 
        className='input'
        name={'Company'}
        placeholder={'Company'}
        
        />
        <input 
        className='input'
        name={'Email'}
        placeholder={'Email'}
        
        />
 
        <input 
        className='input'
        name={'Message'}
        placeholder={'Message'}

        />
      <button className='send'> Send </button>
      </div>
    </div>
  )
}




export default Contact;