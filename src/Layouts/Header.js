import React from 'react'
import $ from 'jquery';
import jQuery from 'jquery'
function Header() {





    $(function(){   
    $(document).unbind().on("click",".meanmenu-reveal",function(){


    if($('.meanmenu-reveal').hasClass("meanclose")){
        console.log('if');
        $('.meanclose').html('<span></span><span></span><span></span>');
        $('.meanclose').removeClass("meanclose");
        $('.mean-nav ul').css('display','none');
        $('.submenu').css('display','none');
    }else{
        console.log('else');
        $('.meanmenu-reveal').addClass("meanclose"); 
        $('.meanclose').html('X');
        $('.mean-nav ul').css('display','block');
        $('.submenu').css('display','none');
        
    }
})
});



$(document).unbind().on("click",".submenu.about_menu",function(){
 
    var type=$(this).attr('data-type');
    alert(type);
    console.log(type);
    $('.'+type).css('display','block');
})


  return (
    <div className="header position-relative">
    <div className="header__shape header__shape--h2 d-lg-none d-xl-block">
        <img className="shape--img" src="assets/images/shape/dot-line-shape.png" alt=""/>
    </div>
    <div className="header position-relative">
        <div className="header__shape header__shape--h2 d-lg-none d-xl-block">
            <img className="shape--img" src="assets/images/shape/dot-line-shape.png" alt=""/>
        </div>
        <div className="container-fluid">
            <div className="header--box header--box--h2">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-12 col-md-8">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-8">
                                <div className="header--logo">
                                    <a href="index.html"><img src="assets/images/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-4">
                                <div className="header--menu header--menu--h2 d-flex align-items-center">
                                    <div className="header--menu__main">
                                        <div className="mean-push"></div><nav id="mobile-menu"  style={{display: "none"}}>
                                            <ul>
                                                <li className="drop"><a href="index.html">Home</a>
                                                    <ul className="submenu">
                                                        <li><a href="index.html">Home One</a></li>
                                                        <li><a href="index-2.html">Home Two</a></li>
                                                        <li><a href="index-3.html">Home Three</a></li>
                                                        <li><a href="index-4.html">Home Four</a></li>
                                                        <li><a href="index-5.html">Home Five</a></li>
                                                    </ul>
                                                </li>
                                                <li className="drop"><a href="about-details.html">About</a>
                                                    <ul className="submenu">
                                                        <li><a href="about-details.html">About Details</a></li>
                                                        <li><a href="company-history.html">Company History</a></li>
                                                        <li><a href="why-choose-us.html">Why Choose Us</a></li>
                                                    </ul>
                                                </li>
                                                <li className="drop"><a href="javascript:void(0)">Services</a>
                                                    <ul className="submenu">
                                                        <li><a href="business-solutions.html">Business Solutions</a>
                                                        </li>
                                                        <li><a href="cyber-security.html">Cyber Security</a></li>
                                                        <li><a href="it-solutions.html">IT Solutions</a></li>
                                                        <li><a href="software-dev.html">Software Dev</a></li>
                                                    </ul>
                                                </li>
                                                <li className="drop"><a href="javascript:void(0)">Case Study</a>
                                                    <ul className="submenu">
                                                        <li><a href="case-study-01.html">Case Study One</a></li>
                                                        <li><a href="case-study-02.html">Case Study Two</a></li>
                                                        <li><a href="case-study-03.html">Case Study Three</a></li>
                                                        <li><a href="case-details.html">Case Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="drop"><a href="javascript:void(0)">Pages</a>
                                                    <ul className="submenu">
                                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                                        <li><a href="blog-standard.html">Blog Standard</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                        <li><a href="price.html">Pricing</a></li>
                                                        <li><a href="team.html">Team</a></li>
                                                        <li><a href="faq.html">FAQ</a></li>
                                                        <li><a href="careers.html">Careers</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contacts.html">Contacts</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-lang header-lang--h2">
                                        <ul>
                                            <li><a href="javascript:void(0)"><img src="assets/images/icon/flag.png" alt="" className="lang-flag"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 d-none d-xl-block">
                        <div className="header__right header__right--h2 d-flex align-items-center justify-content-end">
                            <div className="header--social d-none d-xl-block">
                                <ul>
                                    <li><a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="fab fa-google"></i></a></li>
                                </ul>
                            </div>
                            <div className="header--contacts header--contacts--h2 d-flex align-items-center ml-10">
                                <div className="header--contacts-icon">
                                    <i className="fal fa-phone"></i>
                                </div>
                                <div className="header--contacts-number pl-10">
                                    <h6>Phone Number</h6>
                                    <span className="fw-500 white-color">+812 (345) 6789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mobile-menu mean-container"><div className="mean-bar"><a href="#nav" className="meanmenu-reveal aaa" ><span></span><span></span><span></span></a><nav className="mean-nav">
                                            <ul style={{display: "none"}}>
                                                <li className="drop"><a href="index.html">Home</a>
                                                    <ul className="submenu home_menu" data-type="home_menu" style={{display: "none"}}>
                                                        <li><a href="index.html">Home One</a></li>
                                                        <li><a href="index-2.html">Home Two</a></li>
                                                        <li><a href="index-3.html">Home Three</a></li>
                                                        <li><a href="index-4.html">Home Four</a></li>
                                                        <li><a href="index-5.html">Home Five</a></li>
                                                    </ul>
                                                <a className="mean-expand bbb" href="javascript:void(0)" >+</a></li>
                                                <li className="drop"><a href="about-details.html">About</a>
                                                    <ul className="submenu about_menu" data-type="about_menu"  style={{display: "none"}}>
                                                        <li><a href="about-details.html">About Details</a></li>
                                                        <li><a href="company-history.html">Company History</a></li>
                                                        <li><a href="why-choose-us.html">Why Choose Us</a></li>
                                                    </ul>
                                                <a className="mean-expand bbb" href="javascript:void(0)" >+</a></li>
                                                <li className="drop"><a href="javascript:void(0)">Services</a>
                                                    <ul className="submenu services_menu" data-type="services_menu"  style={{display: "none"}}>
                                                        <li><a href="business-solutions.html">Business Solutions</a>
                                                        </li>
                                                        <li><a href="cyber-security.html">Cyber Security</a></li>
                                                        <li><a href="it-solutions.html">IT Solutions</a></li>
                                                        <li><a href="software-dev.html">Software Dev</a></li>
                                                    </ul>
                                                <a className="mean-expand bbb" href="javascript:void(0)" >+</a></li>
                                                <li className="drop"><a href="javascript:void(0)">Case Study</a>
                                                    <ul className="submenu case_menu" data-type="case_menu"  style={{display: "none"}}>
                                                        <li><a href="case-study-01.html">Case Study One</a></li>
                                                        <li><a href="case-study-02.html">Case Study Two</a></li>
                                                        <li><a href="case-study-03.html">Case Study Three</a></li>
                                                        <li><a href="case-details.html">Case Details</a></li>
                                                    </ul>
                                                <a className="mean-expand bbb" href="javascript:void(0)" >+</a></li>
                                                <li className="drop"><a href="javascript:void(0)">Pages</a>
                                                    <ul className="submenu pages_menu" data-type="pages_menu"  style={{display: "none"}}>
                                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                                        <li><a href="blog-standard.html">Blog Standard</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                        <li><a href="price.html">Pricing</a></li>
                                                        <li><a href="team.html">Team</a></li>
                                                        <li><a href="faq.html">FAQ</a></li>
                                                        <li><a href="careers.html">Careers</a></li>
                                                    </ul>
                                                <a className="mean-expand bbb" href="javascript:void(0)" >+</a></li>
                                                <li className="mean-last"><a href="contacts.html">Contacts</a></li>
                                            </ul>
                                        </nav></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header