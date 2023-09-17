import React from 'react'

function Footer() {
  return (
    <div>   <footer className="footer">
    <div className="footer__top pt-80 pb-40">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="footer__widget">
                        <img src="assets/images/service/logo.png" alt="" className="footer--logo mb-20"/>
                        <p className="footer--text mb-20">On the other hand, we denounce with righteous
                        indignation and dislike men who are so</p>
                        <h4>Conatct Us</h4>
                        <div className="footer--contact d-flex">
                            <div className="footer--contact-icon mr-15">
                                <i className="fal fa-phone-rotary theme-color"></i>
                            </div>
                            <div className="footer--contact-text">
                                <span>Phone Number</span>
                                <h5 className="mb-0">+0123 (456) 789</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-30">
                    <div className="footer__widget">
                        <div className="footer__title">
                            <h4>Comapny</h4>
                        </div>
                        <div className="footer__menu">
                            <ul>
                                <li><a href="why-choose-us.html">Our Services</a></li>
                                <li><a href="about-details.html">Latest News</a></li>
                                <li><a href="team.html">Meet Consultant</a></li>
                                <li><a href="company-history.html">Company History</a></li>
                                <li><a href="it-solutions.html">IT Consultant</a></li>
                                <li><a href="about-details.html">Succeess Story</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-30">
                    <div className="footer__widget">
                        <div className="footer__title">
                            <h4>Quick Link</h4>
                        </div>
                        <div className="footer__menu">
                            <ul>
                                <li><a href="careers.html">Needs A Jobs ?</a></li>
                                <li><a href="about-details.html">Setting & Privacy</a></li>
                                <li><a href="team.html">Join Out Team</a></li>
                                <li><a href="team.html">Free Consultations</a></li>
                                <li><a href="contacts.html">Subscribe News</a></li>
                                <li><a href="about-details.html">Succeess Goals</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-30">
                    <div className="footer__widget">
                        <div className="footer__title">
                            <h4>Newsletters</h4>
                        </div>
                        <div className="footer__newsletter">
                            <p>Hand we denounce with riteous
                            indignation an d dislike men</p>
                            <form action="#">
                                <input type="text" placeholder="Enter Email"/>
                                <button><i className="fal fa-long-arrow-right"></i></button>
                            </form>
                        </div>
                        <div className="footer__social">
                            <ul>
                                <li>Social</li>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-google"></i></a></li>
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
                        <p className="m-0">© Copyright 2023 <a className="theme-color" href="index.html">Versys.</a> All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer></div>
  )
}

export default Footer