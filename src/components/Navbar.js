import React from 'react'
import {Link} from "react-router-dom"
import '../css/Navbar.css'

function Navbar() {
    return (
        <div>
             <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">
          <i class="fas fa-file fa-2x"></i>
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon d-flex align-items-center justify-content-center">
          <i class="fas fa-bars color-white"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <div className="loginbtn">
            <Link to="/LogIn" className="btn ">Log in</Link>
            </div>
          </ul> 
        </div>
      </div>
    </nav>
        </div>
    )
}

export default Navbar