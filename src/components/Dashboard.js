
import React, { Fragment } from 'react';  
import {Form, Button,input, NavDropdown} from 'react-bootstrap';
import apli from '../assets/styles/app.css';
import apli2 from '../assets/styles/app.min.css';
import apli3 from '../assets/styles/font.css';
import apli4 from '../assets/animate.css/animate.min.css';
import apli5 from '../assets/glyphicons/glyphicons.css';
import apli6 from '../assets/font-awesome/css/font-awesome.min.css';
import apli7 from '../assets/material-design-icons/material-design-icons.css';
import TablaDatos from '../components/TablaDatos';




export default function dashboard() {
    return (
        <div>  



<div className="app" id="app">

   
    <div id="aside" className="app-aside modal nav-dropdown">
   

      <div className="left navside dark dk" data-layout="column">
        <div className="navbar no-radius">
        

          <a className="navbar-brand">
            <div ui-include="'assets/images/logo.svg'"></div>
            
          
            <span className="hidden-folded inline">Inventarios</span>
          </a>
        
        </div>
        <div className="hide-scroll" data-flex>
          <nav className="scroll nav-light">

            <ul className="nav" ui-nav>
              <li className="nav-header hidden-folded">
                <small className="text-muted">PRINCIPAL</small>
              </li>

              <li>
                <a href="dashboard.php" >
                  <span className="nav-icon">
                    <i className="fa fa-building-o"></i>
                    
                  </span>
                  <span className="nav-text">Registro de Insumos</span>
                </a>
              </li>

              <li>
                <a href="devices.php" >
                  <span className="nav-icon">
                    <i className="fa fa-cogs"></i>
                  </span>
                  <span className="nav-text">Registro de Almacen</span>
                </a>
              </li>



            </ul>
          </nav>
        </div>
        <div className="b-t">
          <div className="nav-fold">
            <a href="profile.html">
              <span className="pull-left">
                <img src="assets/images/a0.jpg" alt="..." className="w-40 img-circle"/>
              </span>
              <span className="clear hidden-folded p-x">
                <span className="block _500">Jhon Paico</span>
                <small className="block text-muted"><i className="fa fa-circle text-success m-r-sm"></i>online</small>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  

    <div id="content" className="app-content box-shadow-z0" role="main">
      <div className="app-header white box-shadow">
        <div className="navbar navbar-toggleable-sm flex-row align-items-center">
         
          <a data-toggle="modal" data-target="#aside" className="hidden-lg-up mr-3">
            <i className="material-icons">&#xe5d2;</i>
          </a>
          

        
          <div className="mb-0 h5 no-wrap" ng-bind="$state.current.data.title" id="pageTitle"></div>

         
          <div className="collapse navbar-collapse" id="collapse">
        
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link" href data-toggle="dropdown">
                  <i className="fa fa-fw fa-plus text-muted"></i>
                  <span>New</span>
                </a>
                <div ui-include="'views/blocks/dropdown.new.html'"></div>
              </li>
            </ul>

            <div ui-include="'views/blocks/navbar.form.html'"></div>
           
          </div>
         
          <ul className="nav navbar-nav ml-auto flex-row">
           
          </ul>
        

        </div>
      </div>

      <Fragment >
            <TablaDatos />
        </Fragment>


    
      <div className="app-footer">
        <div className="p-2 text-xs">
          <div className="pull-right text-muted py-1">
            &copy; Copyright <strong>Sistema de Inventarios</strong> <span className="hidden-xs-down">-  v1.0.0</span>
            <a ui-scroll-to="content"><i className="fa fa-long-arrow-up p-x-sm"></i></a>
          </div>
          <div className="nav">
            <a className="nav-link" href="">About</a>
          </div>
        </div>
      </div>

      <div ui-view className="app-body" id="view">


        <div className="padding">

      </div>

    </div>
 
    </div>
    </div>
    </div>

         


        
    )
}
