import React from 'react'
import footlogo from '../utils/logo.png'
const Footer = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h4><img src={footlogo} />ANIMAL SHELTER</h4>
                    <p>One of the best animal shelter places in India. We’re recognized by the government. Please take a pledge to take care of these lovely pets !</p>
                    <button type="button" class="btn btn-danger">Adopt <i class="bi bi-arrow-right"></i></button>
                </div>
                <div className='col-md-4'>
                    <h4>GET IN TOUCH</h4>
                    <p><i class="bi bi-geo-alt"></i>llesfnee cnu efoin eoifn oewifnewo inf sdc
                        csdcneno ie woiwemfwokm fwe
                        w ecen cloenwo we - 355233</p>

                    <h4>FOLLOW US</h4>
                    <p></p>
                    <p><i class="bi bi-envelope"></i>cisubdcusb@gmail.com</p>
                    <p><i class="bi bi-twitter"></i><i class="bi bi-facebook"></i><i class="bi bi-linkedin"></i></p>
                </div>
                <div className='col-md-4'>
                    <h4>QUICK LINKS</h4>
                    <a class="nav-link active" aria-current="page" href="#">
                        Home
                    </a>
                    <a class="nav-link active" aria-current="page" href="#">
                        Contact Us
                    </a>
                </div>

            </div>
            <div className='row'>
                <div className='col-6'>
                    <p>Copyright ©2023. Animal Shelter</p>
                </div>
                <div className='col-6'>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms of Service</a>
                    <a href='#'>Cookies Settings</a>
                </div>
            </div>
        </div>
    )
}

export default Footer