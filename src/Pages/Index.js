import React from 'react'
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import Slider from 'react-slick/lib/slider';
import $ from 'jquery';
function Index() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      }; 

    


     
           

  

  return (
      <>
      <Header/>
    <main className="main--wrapper">

    <section className="hero position-relative grey-bg fix">
        <div className="hero__shape--h2 d-none d-xl-block">
            <img src="assets/images/shape/hero-shape-h2.png" alt=""/>
        </div>
        <img src="assets/images/shape/h2-hero-shape1.png" alt="" className="hero__shape--h2--squre hero__shape--h2--1"/>
        <img src="assets/images/shape/h2-hero-shape2.png" alt="" className="hero__shape--h2--squre hero__shape--h2--2"/>
        <img src="assets/images/shape/h2-hero-shape3.png" alt="" className="hero__shape--h2--squre hero__shape--h2--3"/>
        <img src="assets/images/shape/h2-hero-shape4.png" alt="" className="hero__shape--h2--squre hero__shape--h2--4"/>
        <div className="hero--active">
            <div className="hero-single hero__padding hero__padding--h2">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7 header_banner">
                            <div className="hero__caption hero__caption--h2">
                                <h1 className="hero--big-title theme-color fw-700" data-animation="fadeInDown" data-delay=".4s">At the forefront of Digital and Cybersecurity Transformation</h1>
                                <p>Versys Technologies is one of India’s leading firms that has helped transform the IT Infrastructure for hundreds of clients.</p>
                                <a href="contacts.html" className="btn btn--blue btn--icon white-color" data-animation="fadeInLeft" data-delay=".6s">contact us</a>
                                <a href="about-details.html" className="btn btn--blue btn--icon btn--border--round white-color" data-animation="fadeInLeft" data-delay=".6s">Get started</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="hero__thumb">
                                
                                <img src="assets/images/service/abstract-creative-website-hosting-illustration-removebg-preview.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="feature--area pt-130 pb-100 fix">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="theme text-center">
                        <span className="theme__small--title fw-700 text-uppercase"><span></span>core features<span></span></span>
                        <h2 className="theme__big--title fw-700 mb-80">We’ve got you covered end-to-end for you digital infrastructure needs.</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="feature__block">
                        <div className="icon">
                            <i className="fal fa-laptop-code"></i>
                        </div>
                        <div className="text">
                            <h5>Cloud</h5>
                   
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="feature__block">
                        <div className="icon">
                            <i className="fal fa-layer-group"></i>
                        </div>
                        <div className="text">
                            <h5>Cyber Security</h5>
                    
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="feature__block">
                        <div className="icon">
                            <i className="fal fa-lock-open-alt"></i>
                        </div>
                        <div className="text">
                            <h5>Enterprise Networking</h5>
                 
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="feature__block">
                        <div className="icon">
                            <i className="fal fa-chart-bar"></i>
                        </div>
                        <div className="text">
                            <h5>Hybrid IT</h5>
              
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="feature__block">
                        <div className="icon">
                            <i className="fal fa-dharmachakra"></i>
                        </div>
                        <div className="text">
                            <h5>Managed IT Services</h5>
                         
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="feature__block">
                        <div className="icon">
                            <i className="fal fa-draw-square"></i>
                        </div>
                        <div className="text">
                            <h5>Software</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="wwa theme-bg pt-130 pb-100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-30">
                    <div className="wwa__thumb">
                        <img src="assets/images/img/wwa.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 mb-30">
                    <div className="theme">
                        <span className="theme__small--title theme__small--title-left fw-700 text-uppercase white-color"><span className="white-line"></span>who we are</span>
                        <h2 className="theme__big--title white-color fw-700 mb-30">Innovative solution for digital solutions</h2>
                    </div>
                    <div className="wwa__content">
                        <h4 className="fw-400 mb-15">Versys® is a trusted IT solutions provider delivering cutting-edge technology solutions </h4>
                        <p>The breadth of our global reach and depth of our expertise accelerate customer success by bringing people, ideas, and technology together to solve real-world business problems.</p>
                        <ul>
                            <li>Our IT infrastructure solutions, services, and products enable secure, flawless connectivity and meaningful collaboration for businesses in every major market sector on six continents</li>
                        </ul>
                        <a href="contacts.html" className="btn btn--icon btn--white theme-color">send message</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service grey-bg position-relative fix pt-125 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="theme text-center">
                        <span className="theme__small--title fw-700 text-uppercase"><span></span>Our Products<span></span></span>
                        <h2 className="theme__big--title fw-700 mb-80">Drive Innovation Through Human-Centric Technology Solutions</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="service__block--h2 position-relative">
                        <div className="service__thumb--h2 fix">
                            <img src="assets/images/service/services-thumb-h2-1.jpeg" alt=""/>
                        </div>
                        <div className="service__content--h2">
                            <span className="flaticon-presentation white-color"></span>
                            <h4 className="white-color hover-color-light"><a href="case-details.html">Audio Video</a></h4>
                            <p>When must explain to you how this</p>
                            <a href="case-details.html"><i className="fal fa-long-arrow-right white-color"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="service__block--h2 position-relative">
                        <div className="service__thumb--h2 fix">
                            <img src="assets/images/service/services-thumb-h2-2.jpeg" alt=""/>
                        </div>
                        <div className="service__content--h2">
                            <span className="flaticon-server white-color"></span>
                            <h4 className="white-color hover-color-light"><a href="case-details.html">Cables</a></h4>
                            <p>When must explain to you how this</p>
                            <a href="case-details.html"><i className="fal fa-long-arrow-right white-color"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="service__block--h2 position-relative">
                        <div className="service__thumb--h2 fix">
                            <img src="assets/images/service/services-thumb-h2-3.jpeg" alt=""/>
                        </div>
                        <div className="service__content--h2">
                            <span className="flaticon-speaker white-color"></span>
                            <h4 className="white-color hover-color-light"><a href="case-details.html">Infrastructure</a></h4>
                            <p>When must explain to you how this</p>
                            <a href="case-details.html"><i className="fal fa-long-arrow-right white-color"></i></a>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="service__block--h2 position-relative">
                        <div className="service__thumb--h2 fix">
                            <img src="assets/images/service/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative.jpeg" alt=""/>
                        </div>
                        <div className="service__content--h2">
                            <span className="flaticon-speaker white-color"></span>
                            <h4 className="white-color hover-color-light"><a href="case-details.html">IOT</a></h4>
                            <p>When must explain to you how this</p>
                            <a href="case-details.html"><i className="fal fa-long-arrow-right white-color"></i></a>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="service__block--h2 position-relative">
                        <div className="service__thumb--h2 fix">
                            <img src="assets/images/service/technology-elements-background.jpeg" alt=""/>
                        </div>
                        <div className="service__content--h2">
                            <span className="flaticon-speaker white-color"></span>
                            <h4 className="white-color hover-color-light"><a href="case-details.html">KVM</a></h4>
                            <p>When must explain to you how this</p>
                            <a href="case-details.html"><i className="fal fa-long-arrow-right white-color"></i></a>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 col-md-6 mb-30">
                    <div className="service__block--h2 position-relative">
                        <div className="service__thumb--h2 fix">
                            <img src="assets/images/service/futuristic-smart-city-with-5g-global-network-technology.jpeg" alt=""/>
                        </div>
                        <div className="service__content--h2">
                            <span className="flaticon-speaker white-color"></span>
                            <h4 className="white-color hover-color-light"><a href="case-details.html">Networking</a></h4>
                            <p>When must explain to you how this</p>
                            <a href="case-details.html"><i className="fal fa-long-arrow-right white-color"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="statistics--area pt-125 pb-90">
        <div className="container">
            <div className="row">
                <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                    <div className="theme text-center">
                        <span className="theme__small--title fw-700 text-uppercase"><span></span>company statistics<span></span></span>
                        <h2 className="theme__big--title fw-700 mb-80">We are establish it consulting & digital solutions company</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-lg-2 col-md-6 mb-30">
                    <div className="statistics__block statistics__block--h2">
                        <span className="fw-600 theme-color">
                            <i className="fal fa-dharmachakra theme-color d-block"></i>
                        </span>
                        <p><span className="counter">7895</span> <sup><i className="fal fa-plus"></i></sup></p>
                        <h5 className="mb-10 primary-color">Project Complate</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-30">
                    <div className="statistics__block statistics__block--h2">
                        <span className="fw-600 theme-color">
                            <i className="fal fa-crown theme-color d-block"></i>
                        </span>
                        <p><span className="counter">895</span> <sup><i className="fal fa-plus"></i></sup></p>
                        <h5 className="mb-10 primary-color">Winning Awards</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-30">
                    <div className="statistics__block statistics__block--h2">
                        <span className="fw-600 theme-color">
                            <i className="fal fa-heart theme-color d-block"></i>
                        </span>
                        <p><span className="counter">9862</span> <sup><i className="fal fa-plus"></i></sup></p>
                        <h5 className="mb-10 primary-color">Satisfied Clients</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-30">
                    <div className="statistics__block statistics__block--h2">
                        <span className="fw-600 theme-color">
                            <i className="fal fa-head-side-headphones theme-color d-block"></i>
                        </span>
                        <p><span className="counter">523</span> <sup><i className="fal fa-plus"></i></sup></p>
                        <h5 className="mb-10 primary-color">Expert Consulatant</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <section className="contacts--area position-relative grey-bg" data-background="assets/images/shape/contacts_shape_bg.png">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row align-items-center">
                        <div className="col-lg-6 position-relative">
                            <img className="contacts__help--bg" src="assets/images/shape/help-ma-bg.png" alt=""/>
                            <div className="contacts__mcp contacts__mcp--h2 aos-init aos-animate" data-aos="fade-right">
                                <img src="assets/images/img/help-thumb-1.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="theme text-right position-relative">
                                <span className="theme__small--title fw-700 text-uppercase text-right theme__small--title-right">need
                                    helps<span></span></span>
                                <h2 className="theme__big--title fw-700 mb-25">Start it consulting agency meet with our advisors</h2>
                                <p className="mb-35 contacts__text--h2">But I must explain to you how all this mistaken idea of denouncing ple
                                asure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings
                                of the great</p>
                                <a href="about-details.html" className="btn btn--blue btn--icon white-color aos-init aos-animate" data-aos="fade-up">Get
                                    started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    <section className="team-area pt-125 pb-95">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-8 mb-30">
                    <div className="theme">
                        <span className="theme__small--title theme__small--title-left fw-700 text-uppercase"><span></span>team member</span>
                        <h2 className="theme__big--title fw-700 mb-25">Meet our exclusive team member that provides consulting</h2>
                        <p className="mb-40">But I must explain to you how all this mistaken idea of denounc ing pleasure and praising pain was born and I will give yomplete acount of the system, and expound the actua</p>
                        <a href="about-details.html" className="btn btn--blue btn--icon white-color aos-init aos-animate" data-aos="fade-up">Get started</a>
                    </div>
                </div>
                <div className="col-xl-6 offset-xl-1">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 text-center team__col1">
                            <div className="team team--h2 mb-30">
                                <div className="team__thumb--h2 mb-25 position-relative">
                                    <img className="img" src="assets/images/team/team-thumb-h2-1.jpg" alt=""/>
                                    <div className="team__social team__social--h2">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team__content team__content--h2">
                                    <h3 className="fw-700">Daniel B. Mitchell</h3>
                                    <h6 className="primary-color text-uppercase fw-400 mb-0">IT consultant</h6>
                                </div>
                            </div>
                            <div className="team team--h2 mb-30">
                                <div className="team__thumb--h2 mb-25 position-relative">
                                    <img className="img" src="assets/images/team/team-thumb-h2-3.jpg" alt=""/>
                                    <div className="team__social team__social--h2">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team__content team__content--h2">
                                    <h3 className="fw-700">Michael K. Tripp</h3>
                                    <h6 className="primary-color text-uppercase fw-400 mb-0">developer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 text-center team__col2">
                            <div className="team team--h2 mb-30">
                                <div className="team__thumb--h2 mb-25 position-relative">
                                    <img className="img" src="assets/images/team/team-thumb-h2-2.jpg" alt=""/>
                                    <div className="team__social team__social--h2">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team__content team__content--h2">
                                    <h3 className="fw-700">James B. Osborne</h3>
                                    <h6 className="primary-color text-uppercase fw-400 mb-0">apps designer</h6>
                                </div>
                            </div>
                            <div className="team team--h2 mb-30">
                                <div className="team__thumb--h2 mb-25 position-relative">
                                    <img className="img" src="assets/images/team/team-thumb-h2-4.jpg" alt=""/>
                                    <div className="team__social team__social--h2">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team__content team__content--h2">
                                    <h3 className="fw-700">Raymond J. Moore</h3>
                                    <h6 className="primary-color text-uppercase fw-400 mb-0">IT consultant</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <section className="video" data-background="assets/images/img/video-bg.jpg" data-overlay="theme" data-opacity="8">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="video__caption text-center">
                        <a className="popup-video" href="#"><i className="fas fa-play"></i></a>
                        <div className="theme text-center">
                            <span className="theme__small--title white-color fw-700 text-uppercase"><span className="white-line"></span>wtach videos<span className="white-line"></span></span>
                            <h2 className="theme__big--title white-color fw-700">Watch our latest videos</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    <section className="review--area pt-125 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mb-70">
                    <div className="theme">
                        <span className="theme__small--title fw-700 text-uppercase theme__small--title-left"><span></span>testimonials</span>
                        <h2 className="theme__big--title fw-700">What’s our satisfied clients about our solutions</h2>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-sm-12 ">
            
                <Slider {...settings}>
                    <div className='review__wrapper'>
                        <div key='1' className=' review--header review--header--h2 position-relative d-flex align-items-center'>
                                <div className='review--header--img position-relative'>
                                    <img src='assets/images/review/review-thumb-h2-3.jpg' alt='' className="img" />
                                </div>
                                
                                <div className='review__header--text pl-30'>
                                    <h4>Leon D. Jones</h4>
                                </div>
                        </div>
                            <div className="review__content position-relative">
                                    <p className="mb-25">On the other hand we denounce with rigtes indignation adislike
                                        men are so beguiled and demoralized by the charms of pleasure of the moment
                                        blinded by desire that they </p>
                                    <i className="review__quote review__quote--h2 fas fa-quote-right"></i>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                            </div>
                    </div>

                    <div className='review__wrapper'>
                        <div key='2' className=' review--header review--header--h2 position-relative d-flex align-items-center'>
                                <div className='review--header--img position-relative'>
                                    <img src='assets/images/review/review-thumb-h2-3.jpg' alt='' className="img" />
                                </div>
                                
                                <div className='review__header--text pl-30'>
                                    <h4>Leon D. Jones</h4>
                                </div>
                        </div>
                            <div className="review__content position-relative">
                                    <p className="mb-25">On the other hand we denounce with rigtes indignation adislike
                                        men are so beguiled and demoralized by the charms of pleasure of the moment
                                        blinded by desire that they </p>
                                    <i className="review__quote review__quote--h2 fas fa-quote-right"></i>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                            </div>
                    </div>

                    <div className='review__wrapper'>
                        <div key='3' className=' review--header review--header--h2 position-relative d-flex align-items-center'>
                                <div className='review--header--img position-relative'>
                                    <img src='assets/images/review/review-thumb-h2-3.jpg' alt='' className="img" />
                                </div>
                                
                                <div className='review__header--text pl-30'>
                                    <h4>Leon D. Jones</h4>
                                </div>
                        </div>
                            <div className="review__content position-relative">
                                    <p className="mb-25">On the other hand we denounce with rigtes indignation adislike
                                        men are so beguiled and demoralized by the charms of pleasure of the moment
                                        blinded by desire that they </p>
                                    <i className="review__quote review__quote--h2 fas fa-quote-right"></i>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                            </div>
                    </div>



                    <div className='review__wrapper'>
                        <div key='4' className=' review--header review--header--h2 position-relative d-flex align-items-center'>
                                <div className='review--header--img position-relative'>
                                    <img src='assets/images/review/review-thumb-h2-3.jpg' alt='' className="img" />
                                </div>
                                
                                <div className='review__header--text pl-30'>
                                    <h4>Leon D. Jones</h4>
                                </div>
                        </div>
                            <div className="review__content position-relative">
                                    <p className="mb-25">On the other hand we denounce with rigtes indignation adislike
                                        men are so beguiled and demoralized by the charms of pleasure of the moment
                                        blinded by desire that they </p>
                                    <i className="review__quote review__quote--h2 fas fa-quote-right"></i>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                            </div>
                    </div>



                    <div className='review__wrapper'>
                        <div key='5' className=' review--header review--header--h2 position-relative d-flex align-items-center'>
                                <div className='review--header--img position-relative'>
                                    <img src='assets/images/review/review-thumb-h2-3.jpg' alt='' className="img" />
                                </div>
                                
                                <div className='review__header--text pl-30'>
                                    <h4>Leon D. Jones</h4>
                                </div>
                        </div>
                            <div className="review__content position-relative">
                                    <p className="mb-25">On the other hand we denounce with rigtes indignation adislike
                                        men are so beguiled and demoralized by the charms of pleasure of the moment
                                        blinded by desire that they </p>
                                    <i className="review__quote review__quote--h2 fas fa-quote-right"></i>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                            </div>
                    </div>


                    <div className='review__wrapper'>
                        <div key='6' className=' review--header review--header--h2 position-relative d-flex align-items-center'>
                                <div className='review--header--img position-relative'>
                                    <img src='assets/images/review/review-thumb-h2-3.jpg' alt='' className="img" />
                                </div>
                                
                                <div className='review__header--text pl-30'>
                                    <h4>Leon D. Jones</h4>
                                </div>
                        </div>
                            <div className="review__content position-relative">
                                    <p className="mb-25">On the other hand we denounce with rigtes indignation adislike
                                        men are so beguiled and demoralized by the charms of pleasure of the moment
                                        blinded by desire that they </p>
                                    <i className="review__quote review__quote--h2 fas fa-quote-right"></i>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                            </div>
                    </div>
          
        </Slider>

                <div>
           
      </div>
                </div>
            </div>
        </div>
    </section>

    <section className="consult">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="consult__bg pt-70 pb-80" data-background="assets/images/img/consult-bg.jpg"
                        data-overlay="theme" data-opacity="6">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="theme text-center">
                                    <span className="theme__small--title white-color fw-700 text-uppercase"><span
                                            className="white-line"></span>get consultation<span className="white-line"></span></span>
                                    <h2 className="theme__big--title white-color fw-700 mb-40">Need free consultation about Versys solutions ?</h2>
                                    <a href="contacts.html" className="btn btn--icon btn--white theme-color">send message</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <div className="sponsor-area pt-100 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="sponsor-active">
                        <div className="sponsor__single">
                            <img src="assets/images/sponsor/sponsor1.png" alt=""/>
                        </div>
                        <div className="sponsor__single">
                            <img src="assets/images/sponsor/sponsor2.png" alt=""/>
                        </div>
                        <div className="sponsor__single">
                            <img src="assets/images/sponsor/sponsor3.png" alt=""/>
                        </div>
                        <div className="sponsor__single">
                            <img src="assets/images/sponsor/sponsor4.png" alt=""/>
                        </div>
                        <div className="sponsor__single">
                            <img src="assets/images/sponsor/sponsor5.png" alt=""/>
                        </div>
                        <div className="sponsor__single">
                            <img src="assets/images/sponsor/sponsor6.png" alt=""/>
                        </div>
                        <div className="sponsor__single">
                            <img src="assets/images/sponsor/sponsor3.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

    <div className="contacts mt-5">
        <div className="contacts--bg position-relative pt-125 pb-100" data-background="assets/images/img/contact-bg.jpg" data-overlay="theme" data-opacity="95">
            <div className="container">
                <div className="row align-items-end justify-content-end">
                    <div className="col-xl-6 col-lg-8 mb-70">
                        <div className="theme">
                            <h2 className="theme__big--title white-color fw-700">Don't hesitate to contact with us or say hello</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 mb-70 d-none d-md-block">
                        <div className="theme text-right position-relative">
                            <span className="add-btn"><i className="fal fa-plus"></i></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <form className="contacts__form" action="#">
                            <div className="row">
                                <div className="col-lg-4 mb-30">
                                    <div className="contacts__input position-relative">
                                        <input type="text" placeholder="Full Name Here"/>
                                        <i className="fal fa-user"></i>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-30">
                                    <div className="contacts__input position-relative">
                                        <input type="text" placeholder="Enter Your Email"/>
                                        <i className="fal fa-envelope-open"></i>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-30">
                                    <div className="contacts__input position-relative">
                                        <input type="text" placeholder="Phone Number"/>
                                        <i className="fal fa-phone"></i>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-30">
                                    <div className="contacts__input position-relative">
                                        <select>
                                            <option value="1">I Would To Like Discussed</option>
                                            <option value="2">I Would To Like Discussed</option>
                                            <option value="3">I Would To Like Discussed</option>
                                            <option value="4">I Would To Like Discussed</option>
                                        </select>
                                        <i className="fal fa-angle-down"></i>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-50">
                                    <div className="contacts__input position-relative">
                                        <textarea placeholder="Write Here"></textarea>
                          
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-30">
                                    <div className="contacts__input position-relative text-center">
                                        <button className="btn btn--icon">send message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>
<Footer/>
</>
  )
}

export default Index