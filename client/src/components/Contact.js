import React from 'react';
import NavBar from './NavBar';
import '../styling/Contact.css';

const Contact =()=>{
  return(
    <>
      <NavBar/>
    <div className='contact_Container'>
      <form className ='Contact_Input'
      action="https://mailthis.to/contact@redsuppliers.com"
      method="POST" encType="multipart/form-data">
        <input 
        className='input'
        type='text'
        name={'Name'}
        placeholder={'Name'}
        
        />

        <input 
        className='input'
        type='email'
        name={'Email'}
        placeholder={'Email'}
        
        />
 
        <textarea 
        name="message" 
        placeholder="Enter your message here">

        </textarea>

      <button className='send'
      type='submit'
      > Send </button>
      </form>
    </div>
    </> 
  )
}




export default Contact;