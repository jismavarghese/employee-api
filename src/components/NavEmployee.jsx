import React from 'react'
import { Link } from 'react-router-dom'

const NavEmployee = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">EMPLOYEE</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active text-white" to="/">Add</Link>
              
              <Link className="nav-link text-white" to="/view">view</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavEmployee