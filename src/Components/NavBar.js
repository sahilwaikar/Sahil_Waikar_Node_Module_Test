import React from "react";
import logo from '../utils/logo.png'
const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <div ><img src={logo} className="d-inline-flex " />
                            <h6 className="site_Name d-inline-flex ">ANIMAL SHELTER</h6></div>
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">

                        <ul class="navbar-nav ms-auto me-auto ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Contact us
                                </a>
                            </li>

                        </ul>
                        <ul class="navbar-nav ms-auto me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="bi bi-linkedin"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    <i class="bi bi-instagram"></i>
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;