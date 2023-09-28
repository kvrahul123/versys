import React from 'react'
import Footer from '../Layouts/Footer'
import Header from '../Layouts/Header'
import NewsLetters from './NewsLetters'

const Partners = () => {
  return (
    <>
    <Header/>
      <main className="main--wrapper">
 
 
 
 
 <section className="feature feature-area pt-125 fix">
     <div className="container">
         <div className="row">
             <div className="col-lg-12 mb-30">
                 <div className="about-ex theme">
                     <span className="theme__small--title theme__small--title-left fw-700 text-uppercase"><span></span>partners</span>
                     {/* <h2 className="theme-color fw-700 mb-30">The customer-friendly company helping businesses accelerate growth
                     </h2> */}
                     {/* <p className="mb-20">Versys is a leading global IT services provider, transforming client’s businesses through innovative and advanced technology solutions. Our unique approach to ‘Choosing The Right Technology’ helps clients create competitive advantage through organizational agility and lower total cost of design.</p> */}
                 </div>
             </div>
 
         </div>
     </div>
 </section>
 

     <div className="container">
         <div className="row">
            <div class="col-md-2 col-lg-2 col-sm-4 ">
                    <div class="portfolio_item bg-white"><a href="javascript:void(0);"><img src="../assets/images/partners/mobile-avaya.jpeg"  alt="partner14" /></a></div>
                    <div class="portfolio_item bg-white"><a href="javascript:void(0);"><img src="../assets/images/partners/mobile-juniper.jpeg" alt="partner14" /></a></div>
                    <div class="portfolio_item bg-white"><a href="javascript:void(0);"><img src="../assets/images/partners/mobile-fortinet.png" alt="partner14" /></a></div>
                    <div class="portfolio_item bg-white"><a href="javascript:void(0);"><img src="../assets/images/partners/mobile-paloalto.png" alt="partner14" /></a></div>
            </div>

            <div class="col-md-2 col-lg-2 col-sm-4 ">
                    <div class="portfolio_item bg-white"><a href="javascript:void(0);"><img src="../assets/images/partners/mobile-poly.png" alt="partner14" /></a></div>
                    <div class="portfolio_item bg-white"><a href="javascript:void(0);"><img src="../assets/images/partners/logitech.jpeg" alt="partner14" /></a></div>
                    <div class="portfolio_item bg-white lg-image"><a href="javascript:void(0);"><img src="../assets/images/partners/mobile-lg.jpeg" alt="partner14" /></a></div>
                    <div class="portfolio_item bg-white"><a href="javascript:void(0);"><img src="../assets/images/partners/mobile-samsung.avif" alt="partner14" /></a></div>
            </div>
         </div>
     </div>

 

 

 
 
 <div className='mt-100'>
 <NewsLetters/>
 </div>
 
 </main>
 <Footer/>
    </>
  )
}

export default Partners