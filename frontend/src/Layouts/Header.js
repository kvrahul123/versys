import React from 'react'
import $ from 'jquery';
import { Navigate, useNavigate } from "react-router-dom";
function Header() {



    const navigate = useNavigate();
    function redirectPage(val){
   
        navigate(val);
    }
function openSubMenu(type){




    if ($('.'+type).css('display') === 'block')
{
    $('.'+type).css('display','none');
}else{
    $('.'+type).css('display','block');
}
}



    $(function(){   

        $(document).on("click","ul",function(){

               var type=$(this).attr('data-type');
     
               $('.'+type).css('display','block');
           })

           

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





  return (
    <div className="header position-relative">
    <div className="header__shape header__shape--h2 d-lg-none d-xl-block">
        <img className="shape--img" src="../assets/images/shape/dot-line-shape.png" alt=""/>
    </div>
    <div className="header position-relative">
        <div className="header__shape header__shape--h2 d-lg-none d-xl-block">
            <img className="shape--img" src="../assets/images/shape/dot-line-shape.png" alt=""/>
        </div>
        <div className="container-fluid">
            <div className="header--box header--box--h2">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-12 col-md-8">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-8">
                                <div className="header--logo">
                                    <a  className="pointer"  onClick={()=>redirectPage("/")}><img src="../assets/images/service/Logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-4">
                                <div className="header--menu header--menu--h2 d-flex align-items-center">
                                    <div className="header--menu__main">
                                        <div className="mean-push"></div><nav id="mobile-menu">
                                            <ul>
                                                <li><a className="pointer" onClick={()=>redirectPage("/")}>Home</a>
                                         
                                                </li>
                                                {/* <li><a className="pointer" onClick={()=>redirectPage("/about-us")}>About Us</a></li> */}
                                      
                                                {/* <li className="drop"><a href="#">Services</a>
                                                    <ul className="submenu">
                                                        <li><a className="pointer" onClick={()=>redirectPage("/managed-it-services")}>Managed IT Services</a>
                                                        </li>
                                                        <li><a  className="pointer" onClick={()=>redirectPage("/cloud-it-services")}  >Cloud Management</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/amc-services")}>AMC Services</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/consulting-services")}>Consulting Services</a></li>
                                                    </ul>
                                                </li> */}

                                                <li className="drop"><a href="#">Offerings</a>
                                                <ul className="submenu productmenu">
                                                   <div class="row">
                                                       
                                                   <div class="col-12">
                                                        <li><a className="pointer" onClick={()=>redirectPage("/offerings/all-offerings")}>All Offerings</a>
                                                        </li>
                                                        <li><a  className="pointer"   >Unified Communications & Contact centres</a></li>
                                                        <li><a  className="pointer"  >Cyber Security</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/offerings/networking")}>Networking</a></li>
                                                        <li><a className="pointer" >Hybrid Cloud solutions</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/offerings/it-services")}>Managed IT Services</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/offerings/audio-video")}>Audio video</a></li>
                                                        {/* <li><a className="pointer" onClick={()=>redirectPage("/products/cables")}>Cables</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/products/infrastructure")} >Infrastructure</a> 
                                                        </li>*/}
                                                        </div>
                                                    {/* <div class="col-6">


                                                        <li><a  className="pointer" onClick={()=>redirectPage("/products/iot")}  >IoT</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/products/kvm")}>KVM</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/products/networking")}>Networking</a></li>
                                                
                                                        </div>*/}
                                                    </div> 
                                                    </ul>
                                                </li>


                                                <li className="drop"><a href="#">Partners</a>
                                                <ul className="submenu productmenu">
                                                <div class="container">
                                                   <div class="row">
                                                       
                                                   <div class="col-6">
                                                        <li><img src="../assets/images/partners/avaya.png" style={{"width":"50%"}}/>
                                                        </li>
                                                        <li><img src="../assets/images/partners/juniper-2.webp" style={{"width":"50%"}}/>
                                                        </li>
                                                        <li><img src="../assets/images/partners/fortinet.svg" style={{"width":"50%"}}/>
                                                        </li>
                                                        
                                                        <li><img src="../assets/images/partners/paloalto.png" style={{"width":"50%"}}/>
                                                        </li>
                                                        </div>
                                                    <div class="col-6">


                                                    <li><img src="../assets/images/partners/poly.webp" style={{"width":"50%"}}/>
                                                        </li>
                                                        <li><img src="../assets/images/partners/logitech.jpeg" style={{"width":"50%","margin-left": "-35px"}}/>
                                                        </li>
                                                        <li><img src="../assets/images/partners/lg.jpeg" style={{"width":"30%"}}/>
                                                        </li>
                                                        
                                                        <li><img src="../assets/images/partners/samsung.png" style={{"width":"50%","margin-top": "-10px"}}/>
                                                        </li>
                                                
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </ul>
                                                </li>


                                                <li><a className="pointer" onClick={()=>redirectPage("/contact-us")}>Contact Us</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-lang header-lang--h2">
                                        <ul>
                                            <li><a href="#"><img src="../assets/images/icon/flag.png" alt="" className="lang-flag"/></a></li>
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
                                    {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li> */}
                                    <li><a href="https://www.linkedin.com/company/versys-networks-pvt-ltd/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://maps.app.goo.gl/SEpxgAnW1KWCgdcDA" target="_blank"> <i className="fab fa-google"></i></a></li>
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
                        <div className="mobile-menu mean-container"><div className="mean-bar"><a href="#" className="meanmenu-reveal aaa" ><span></span><span></span><span></span></a><nav className="mean-nav">
                                            <ul style={{display: "none"}}>
                                                <li className="mean-last"><a onClick={()=>redirectPage("/")}>Home</a>
                                                </li>
                                                {/* <li><a onClick={()=>redirectPage("/about-us")}>About Us</a></li> */}
                                           
                                                {/* <li className="drop"><a href="#">Services</a>
                                                    <ul className="submenu services_menu" data-type="services_menu"  style={{display: "none"}}>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/managed-it-services")}>Managed IT Services</a>
                                                        </li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/cloud-it-services")}  >Cloud Management</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/amc-services")}>AMC Services</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/consulting-services")}>Consulting Services</a></li>
                                                    </ul>
                                                <a className="mean-expand bbb" href="#" onClick={()=>openSubMenu("services_menu")} >+</a></li> */}

                                                <li className="drop"><a href="#">Offerings</a>
                                                    <ul className="submenu pages_menu" data-type="pages_menu"  style={{display: "none"}}>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/offerings/all-offerings")}>All Offerings</a>
                                                        </li>
                                                        <li><a  className="pointer"   >Unified Communications & Contact centres</a></li>
                                                        <li><a  className="pointer"  >Cyber Security</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/offerings/networking")}>Networking</a></li>
                                                        <li><a className="pointer" >Hybrid Cloud solutions</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/offerings/it-services")}>Managed IT Services</a></li>
                                                        <li><a className="pointer" onClick={()=>redirectPage("/offerings/audio-video")}>Audio video</a></li>
                                                    </ul>


                                                    
                                                <a className="mean-expand bbb" href="#" onClick={()=>openSubMenu("pages_menu")} >+</a></li>



                                                <li className="mean-last"><a className="pointer" onClick={()=>redirectPage("/partners")}>Partners</a></li>
                                                

                                                


                                                <li className="mean-last"><a className="pointer" onClick={()=>redirectPage("/contact-us")}>Contact Us</a></li>
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