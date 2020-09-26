import React from 'react'
import {Form, Button,input, NavDropdown} from 'react-bootstrap';
import apli from '../assets/styles/app.css';
import apli2 from '../assets/styles/app.min.css';
import apli3 from '../assets/styles/font.css';



export default function Register() {
    return (
        <div>  



<div className="app" id="app">


<div className="center-block w-xxl w-auto-xs p-y-md">
    <div className="navbar">
      <div className="pull-center">
        

      <a class="navbar-brand">
		<span class="hidden-folded inline">NUEVO USUARIO</span>
</a>



      </div>
    </div>

    <div className="p-a-md box-color r box-shadow-z1 text-color m-a">
      <div className="m-b text-sm">
        Sign up to your IoT Account
      </div>



      <form method="post" target="register.php" name="form">
        <div className="md-form-group">
          <input name="email" type="email" className="md-input" required/>
          <label>Email</label>
        </div>
        <div className="md-form-group">
          <input name="password" type="password" className="md-input" required/>
          <label>Password</label>
        </div>
        <div className="md-form-group">
          <input name="password_r" type="password" className="md-input" required/>
          <label>Repeat Password</label>
        </div>
        <button type="submit" className="btn primary btn-block p-x-md">Sign up</button>
      </form>





    </div>

    <div className="p-v-lg text-center">
      <div>Already have an account? <a ui-sref="access.signin" href="login.php" className="text-primary _600">Sign in</a></div>
    </div>
  </div>



  </div>


         
</div>

        
    )
}
