import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header className="main_menu home_menu">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <p className="navbar-brand" > <img src="img/logo.png" alt="logo" /> </p>
             <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse main-menu-item justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to="/dingo" className="nav-link" >Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/dingo/chefs" className="nav-link" >Chefs</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/dingo/clients" className="nav-link" >Clients</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/dingo/dishes" className="nav-link" >Dishes</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/dingo/addchef" className="nav-link" >AddChef</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/dingo/addclient" className="nav-link" >AddClient</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/dingo/adddish" className="nav-link" >AddDish</NavLink>
                </li>
              </ul>
            </div>
            <div className="menu_btn">
              <a href="#Reservation" className="btn_1 d-none d-sm-block">book a tabel</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}
