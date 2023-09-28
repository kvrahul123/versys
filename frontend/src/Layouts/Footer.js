import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {


    const navigate = useNavigate();


function redirectPage(val){

    navigate(val);
}
  return (
    <div>   <footer className="footer">
    <div className="footer__top pt-80 pb-40">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="footer__widget">
                        <img src="../assets/images/service/logo.png" alt="" className="footer--logo mb-20"/>
                        {/* <p className="footer--text mb-20">On the other hand, we denounce with righteous
                        indignation and dislike men who are so</p> */}
                        <h4>Contact Us</h4>
                        <div className="footer--contact d-flex">
                            <div className="footer--contact-icon mr-15">
                                <i className="fal fa-phone-rotary theme-color"></i>
                            </div>
                            <div className="footer--contact-text">
                                <span>Phone Number</span>
                                <h5 className="mb-0">+91 63836 26368</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-30">
                    <div className="footer__widget">
                        <div className="footer__title">
                            <h4>Company</h4>
                        </div>
                        <div className="footer__menu">
                            <ul>
                                <li><a className="pointer" onClick={()=>redirectPage("/offerings/all-offerings")}>All Offerings</a></li>
                                <li><a className="pointer" onClick={()=>redirectPage("/contact-us")}>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-30">
                    <div className="footer__widget">
                        {/* <div className="footer__title">
                            <h4>Newsletters</h4>
                        </div>
                        <div className="footer__newsletter">
                            <p>Hand we denounce with riteous
                            indignation an d dislike men</p>
                            <form action="#">
                                <input type="text" placeholder="Enter Email"/>
                                <button><i className="fal fa-long-arrow-right"></i></button>
                            </form>
                        </div> */}
                        <div className="footer__social">
                            <ul>
                                <li>Social</li>
                                {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li> */}
                                <li><a href="https://www.linkedin.com/company/versys-networks-pvt-ltd/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://maps.app.goo.gl/SEpxgAnW1KWCgdcDA" target="_blank"> <i className="fab fa-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer__bottom">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="footer__copyright text-center">
                        <p className="m-0">© Copyright 2023 <a className="theme-color pointer"  onClick={()=>redirectPage("/")}>Versys.</a> All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer></div>
  )
}

export default Footer