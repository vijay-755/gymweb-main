import React from 'react';
import './style.css'
function Navbar() {
  return (
    <nav className="navbar p-3 navbar-expand-lg navbar-light bg-white  shadow-sm fixed-top">
      <div className="containers">
        <a className="navbar-brand" href="#">
          <strong>GymFluencer</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav me-auto mb-2  mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Features
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dietPlanDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Diet Plan
              </a>
              <ul className="dropdown-menu" aria-labelledby="dietPlanDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Low Carb
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Keto
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Vegan
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="workoutPlanDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Workout Plans
              </a>
              <ul className="dropdown-menu" aria-labelledby="workoutPlanDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Beginner
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Intermediate
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Advanced
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="d-flex buttt">
            <a href="#" className="btn btn-success me-3">
              Get Started
            </a>
            <a href="#" className="btn  btn-success me">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
