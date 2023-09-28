import React from 'react'
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import NewsLetters from '../NewsLetters';
function ManagedITServices() {
  return (
    <div>
        <Header/>
        <main className="main--wrapper">



<section className="feature feature-area pt-130 pb-100 fix">
    <div className="container">
        <div className="row">
    
            <div className="col-lg-12 mb-30">
                <div className="feature__content">
                    <span className="fw-700 text-uppercase"><span></span>Services</span>
                    <h2 className="theme-color fw-700 mb-30">Managed IT Services and Solutions | Outsourced IT Services</h2>
                    <p>At a time when digital transformation is imperative, Versys provides clients with a complete portfolio of Managed IT services. This allows enterprises to focus on their core innovation, and leave the task of routine network and IT Infrastructure maintenance activities to Versys.
                        Some of the benefits of our Managed Services:</p>
                    <div className="feature__list d-flex wwa__content">
                        <ul >
                            <li style={{color:"#696969"}}>Single Point of Service</li>
                            <li style={{color:"#696969"}}>Optimized Productivity</li>
                            <li style={{color:"#696969"}}>Improved OEM Management</li>
                            <li style={{color:"#696969"}}>Transparency & Flexibility</li>
                        </ul>
                    </div>
                    <div className="feature__list--button text-center">
                    <img src="assets/images/service/managed-it-services.jpg" alt="It service" style={{height:"40em"}}/>
                    </div>


                    <p className='mt-5'>Some of the Managed IT services that we provide include:</p>
                    <div className="feature__list d-flex wwa__content">
                        <ul >
                            <li style={{color:"#696969"}}>Infrastructure Management Services</li>
                            <li style={{color:"#696969"}}>IT Help Desk Services (L1/L2/L3 support)</li>
                            <li style={{color:"#696969"}}>Managing installations, upgrades and transition to cloud environments</li>
                            <li style={{color:"#696969"}}>Backup and Disaster Recovery as a Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
 
    </div>
</section>


<NewsLetters/>
</main>
<Footer/>
    </div>
  )
}

export default ManagedITServices