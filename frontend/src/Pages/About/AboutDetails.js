import React from 'react'
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import NewsLetters from '../NewsLetters'
import Slider from 'react-slick/lib/slider';
import ImageSettings from '../ImageSettings'
function AboutDetails() {
  return (
   <>
   <Header/>
     <main className="main--wrapper">




<section className="feature feature-area pt-125 pb-100 fix">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 mb-30">
                <div className="about-ex theme">
                    <span className="theme__small--title theme__small--title-left fw-700 text-uppercase"><span></span>about company</span>
                    <h2 className="theme-color fw-700 mb-30">The customer-friendly company helping businesses accelerate growth
                    </h2>
                    <p className="mb-20">Versys is a leading global IT services provider, transforming client’s businesses through innovative and advanced technology solutions. Our unique approach to ‘Choosing The Right Technology’ helps clients create competitive advantage through organizational agility and lower total cost of design.</p>
                </div>
            </div>

        </div>
    </div>
</section>

<section className="service position-relative fix pb-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 mb-30 text-center">
                <div className="about-service position-relative white-bg">
                    <img src="assets/images/img/about-service1.jpg" alt=""/>
                    <div className="about-service--content">
                        <h4 className="service__title fw-600">Comapny History</h4>
                        <p className="mb-20">On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms pleasure</p>
                        <a href="software-dev.html" className="service__link--h4 text-uppercase fw-700"><i className="far fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 text-center">
                <div className="about-service position-relative white-bg">
                    <img src="assets/images/img/about-service2.jpg" alt=""/>
                    <div className="about-service--content">
                        <h4 className="service__title fw-600">Mission  Vision</h4>
                        <p className="mb-20">On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms pleasure</p>
                        <a href="business-solutions.html" className="service__link--h4 text-uppercase fw-700"><i className="far fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 text-center">
                <div className="about-service position-relative white-bg">
                    <img src="assets/images/img/about-service3.jpg" alt=""/>
                    <div className="about-service--content">
                        <h4 className="service__title fw-600">Online Support</h4>
                        <p className="mb-20">On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms pleasure</p>
                        <a href="software-dev.html" className="service__link--h4 text-uppercase fw-700"><i className="far fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="consult consult__bg consult__bg--h5">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="position-relative consult-box--ex">
                    <img src="assets/images/shape/consult-shape1.png" alt=""
                        className="consult__shape consult__shape1"/>
                    <img src="assets/images/shape/consult-shape2.png" alt=""
                        className="consult__shape consult__shape2"/>
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="theme">
                                <span className="theme__small--title theme__small--title-left fw-700 text-uppercase"><span></span>get
                                    consultation</span>
                                <h2 className="theme__big--title fw-700 mb-35">Need consultation about Versys solutions ? </h2>
                                <div className="consult-button ">
                                    <a href="about-details.html"
                                        className="btn btn--blue btn--icon white-color aos-init aos-animate"
                                        data-aos="fade-up">Get started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-5 d-none d-lg-block">
                            <div className="consult__thumb">
                                <img src="assets/images/service/Consulting-rafiki.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="feature feature-area pt-130 pb-100 fix">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 position-relative mb-30">
                <div className="feature__img position-relative">
                    <div className="feature__img--dot-shape">
                        <img className="aos-init aos-animate " data-aos="fade-down" src="assets/images/shape/feature-dot-shape.png" alt=""/>
                    </div>
                    <img className="feature-img js-tilt aos-init aos-animate " data-aos="fade-right" src="assets/images/img/feature-img-1.png" alt="Features Image"/>
                    <div className="feature__img--caption text-center aos-init aos-animate " data-aos="fade-left">
                        <div className="feature__img--caption--shadow js-tilt">
                            <span className="fw-700 theme-color">35<sup>+</sup></span>
                            <p className="fw-700 theme-color">Years</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-30">
                <div className="feature__content--ex theme">
                    <span className="theme__small--title theme__small--title-left fw-700 text-uppercase"><span></span>what we do</span>
                    <h2 className="theme-color fw-700 mb-30">Powerful solutions for every IT systems</h2>
                    <div className="feature__list d-flex">
                        <div className="feature__list--icon">
                            <i className="fal fa-check"></i>
                        </div>
                        <div className="feature__list--content">
                            <h5 className="fw-700 mb-10">Best For IT Consulting</h5>
                            <p>Sedut perspiciatis unde omnis iste natus error sitlup accusant doloremque laudantium totam remap eriaeaque ipsa</p>
                        </div>
                    </div>
                    <div className="feature__list d-flex">
                        <div className="feature__list--icon">
                            <i className="fal fa-check"></i>
                        </div>
                        <div className="feature__list--content">
                            <h5 className="fw-700 mb-10">Cyber Security Systems</h5>
                            <p>Sedut perspiciatis unde omnis iste natus error sitlup accusant doloremque laudantium totam remap eriaeaque ipsa</p>
                        </div>
                    </div>
                    <div className="feature__list d-flex">
                        <div className="feature__list--icon">
                            <i className="fal fa-check"></i>
                        </div>
                        <div className="feature__list--content">
                            <h5 className="fw-700 mb-10">Versys Solutions Agency</h5>
                            <p>Sedut perspiciatis unde omnis iste natus error sitlup accusant doloremque laudantium totam remap eriaeaque ipsa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <section className="statistics--area pb-90">
    <div className="container">
        <div className="row">
            <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <div className="theme text-center">
                    <span className="theme__small--title fw-700 text-uppercase"><span></span>company
                        statistics<span></span></span>
                    <h2 className="theme__big--title fw-700 mb-80">We are establish it consulting & Versys
                        solutions company</h2>
                </div>
            </div>
        </div>
        <div className="row justify-content-between">
            <div className="col-lg-2 col-md-6 mb-30">
                <div className="statistics__block statistics__block--h2">
                    <span className="fw-600 theme-color">
                        <i className="fal fa-dharmachakra theme-color d-block"></i>
                    </span>
                    <p className="counter">7895 <sup><i className="fal fa-plus"></i></sup></p>
                    <h5 className="mb-10 primary-color">Project Complate</h5>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-30">
                <div className="statistics__block statistics__block--h2">
                    <span className="fw-600 theme-color">
                        <i className="fal fa-crown theme-color d-block"></i>
                    </span>
                    <p className="counter">7895 <sup><i className="fal fa-plus"></i></sup></p>
                    <h5 className="mb-10 primary-color">Winning Awards</h5>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-30">
                <div className="statistics__block statistics__block--h2">
                    <span className="fw-600 theme-color">
                        <i className="fal fa-heart theme-color d-block"></i>
                    </span>
                    <p className="counter">7895 <sup><i className="fal fa-plus"></i></sup></p>
                    <h5 className="mb-10 primary-color">Satisfied Clients</h5>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-30">
                <div className="statistics__block statistics__block--h2">
                    <span className="fw-600 theme-color">
                        <i className="fal fa-head-side-headphones theme-color d-block"></i>
                    </span>
                    <p className="counter">7895 <sup><i className="fal fa-plus"></i></sup></p>
                    <h5 className="mb-10 primary-color">Expert Consulatant</h5>
                </div>
            </div>
        </div>
    </div>
</section> */}

{/* <section className="review--area pt-125 position-relative">
    <img src="assets/images/icon/h4-quotes-icon.png" alt="" className="review__quotes--icon"/>
    <img src="assets/images/shape/rev-shape-ex.png" alt="Shape" className="review-shape--line aos-init aos-animate"
        data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="9000"/>
    <div className="review__shape review__shape--ex"></div>
    <div className="container">
        <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                <div className="theme text-center">
                    <span className="theme__small--title fw-700 text-uppercase color-text-2"><span className="white-line"></span>our testimonails<span className="white-line"></span></span>
                    <h2 className="theme__big--title fw-700 mb-80 white-color">What’s our customer say
                        about our agency</h2>
                </div>
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col-sm-12">
          
            <Slider {...ImageSettings}>
            <div className='review__wrapper-about'>
                            <div key='1' className="review__wrapper review__wrapper--h4 white-bg">
                                <div className="review__content review__content--h4 position-relative">
                                    <h5 className="mb-20 primary-color fw-400"><i className="fal fa-quote-left"></i>Sedut perspiciatis unde om iste natus error sit voluptate cusum doloremque laudantiu totam reme aperiam eaque ipsa quae.</h5>
                                    <h5 className="fw-400 mb-30">Accusum doloremqudantiues totam reme aperiam eaque system</h5>
                                </div>
                                <div className="review--header--h2 position-relative d-flex align-items-center">
                                    <div className="review--author--img position-relative">
                                        <img src="assets/images/review/review-h4-thumb-1.png" alt=""/>
                                    </div>
                                    <div className="review__header--text pl-15">
                                        <h4>Gabriel E. Burris</h4>
                                        <h6 className="primary-color fw-400 text-uppercase mb-0">software engineer</h6>
                                    </div>
                                </div>
                            </div>
                </div>

                <div className='review__wrapper-about'>
                            <div key='2' className="review__wrapper review__wrapper--h4 white-bg">
                                <div className="review__content review__content--h4 position-relative">
                                    <h5 className="mb-20 primary-color fw-400"><i className="fal fa-quote-left"></i>Sedut perspiciatis unde om iste natus error sit voluptate cusum doloremque laudantiu totam reme aperiam eaque ipsa quae.</h5>
                                    <h5 className="fw-400 mb-30">Accusum doloremqudantiues totam reme aperiam eaque system</h5>
                                </div>
                                <div className="review--header--h2 position-relative d-flex align-items-center">
                                    <div className="review--author--img position-relative">
                                        <img src="assets/images/review/review-h4-thumb-1.png" alt=""/>
                                    </div>
                                    <div className="review__header--text pl-15">
                                        <h4>Gabriel E. Burris</h4>
                                        <h6 className="primary-color fw-400 text-uppercase mb-0">software engineer</h6>
                                    </div>
                                </div>
                            </div>
                </div>


                <div className='review__wrapper-about'>
                            <div key='3' className="review__wrapper review__wrapper--h4 white-bg">
                                <div className="review__content review__content--h4 position-relative">
                                    <h5 className="mb-20 primary-color fw-400"><i className="fal fa-quote-left"></i>Sedut perspiciatis unde om iste natus error sit voluptate cusum doloremque laudantiu totam reme aperiam eaque ipsa quae.</h5>
                                    <h5 className="fw-400 mb-30">Accusum doloremqudantiues totam reme aperiam eaque system</h5>
                                </div>
                                <div className="review--header--h2 position-relative d-flex align-items-center">
                                    <div className="review--author--img position-relative">
                                        <img src="assets/images/review/review-h4-thumb-1.png" alt=""/>
                                    </div>
                                    <div className="review__header--text pl-15">
                                        <h4>Gabriel E. Burris</h4>
                                        <h6 className="primary-color fw-400 text-uppercase mb-0">software engineer</h6>
                                    </div>
                                </div>
                            </div>
                </div>


                <div className='review__wrapper-about'>
                            <div key='4' className="review__wrapper review__wrapper--h4 white-bg">
                                <div className="review__content review__content--h4 position-relative">
                                    <h5 className="mb-20 primary-color fw-400"><i className="fal fa-quote-left"></i>Sedut perspiciatis unde om iste natus error sit voluptate cusum doloremque laudantiu totam reme aperiam eaque ipsa quae.</h5>
                                    <h5 className="fw-400 mb-30">Accusum doloremqudantiues totam reme aperiam eaque system</h5>
                                </div>
                                <div className="review--header--h2 position-relative d-flex align-items-center">
                                    <div className="review--author--img position-relative">
                                        <img src="assets/images/review/review-h4-thumb-1.png" alt=""/>
                                    </div>
                                    <div className="review__header--text pl-15">
                                        <h4>Gabriel E. Burris</h4>
                                        <h6 className="primary-color fw-400 text-uppercase mb-0">software engineer</h6>
                                    </div>
                                </div>
                            </div>
                </div>
          
                 </Slider>
             
               
            </div>
        </div>
    </div>
</section> */}

<NewsLetters/>


</main>
<Footer/>
   </>
  )
}

export default AboutDetails;