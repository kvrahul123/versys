import React from 'react'
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import NewsLetters from '../NewsLetters';
function CloudManagement() {
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
                        <h2 className="theme-color fw-700 mb-30">Cloud Service Provider | Best Cloud Management Services</h2>
                        <p>Our alliances and partnerships with leading cloud service providers and proven expertise in managing cloud deployments for a large number of clients, makes Versys one of the preferred choices, for cloud management services.</p>
                        <img src="assets/images/service/cloud-management.jpeg" className='mb-5' alt="It service" style={{height:"40em"}}/>
                        <p>Some of the cloud management services that we provide include:</p>
                        <div className="feature__list d-flex wwa__content">
                            <ul >
                                <li style={{color:"#696969"}}>Ensuring performance in a multi-cloud environment</li>
                                <li style={{color:"#696969"}}>Application transition from private cloud to public cloud or hybrid cloud environments</li>
                                <li style={{color:"#696969"}}>Cloud Governance services to ensure quality and reliability of cloud</li>
                                <li style={{color:"#696969"}}>Measuring performance using cloud metrics</li>
                                <li style={{color:"#696969"}}>Proactive monitoring usage of instances to ensure performance</li>
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

export default CloudManagement