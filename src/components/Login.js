import React from 'react'
import {Form, Button,input, NavDropdown} from 'react-bootstrap';
import apli from '../assets/styles/app.css';
import apli2 from '../assets/styles/app.min.css'
import apli3 from '../assets/styles/font.css'



export default function Login() {
    return (
        <div>  



<div className="center-block w-xxl w-auto-xs p-y-md">
    <div className="navbar">
      <div className="pull-center">
        

      <a class="navbar-brand">
		<span class="hidden-folded inline">INGRESO USUARIO</span>
</a>

     
      </div>
    </div>
    <div className="p-a-md box-color r box-shadow-z1 text-color m-a">
      <div className="m-b text-sm">
        Ingrese sus Datos
      </div>



      <form name="form">
        <div className="md-form-group float-label">
          <input name="email" type="email" className="md-input" ng-model="user.email" required />
          <label>Email</label>
        </div>
        <div  className="md-form-group float-label">
          <input name="password" type="password" className="md-input" ng-model="user.password" required />
          <label>Password</label>
        </div>
        <button type="submit" className="btn primary btn-block p-x-md">Sign in</button>
      </form>

     





    </div>

    <div className="p-v-lg text-center">
      <div className="m-b"><a ui-sref="access.forgot-password" href="forgot-password.html" className="text-primary _600">Forgot password?</a></div>
      <div>Do not have an account? <a ui-sref="access.signup" href="register.php" className="text-primary _600">Sign up</a></div>
    </div>
  </div>
 


         
</div>

        
    )
}
