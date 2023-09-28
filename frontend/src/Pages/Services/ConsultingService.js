import React from 'react'
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import NewsLetters from '../NewsLetters';
function ConsultingService() {
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
                        <h2 className="theme-color fw-700 mb-30">Cloud Consulting Services | Cyber Security Consulting Services</h2>
                        <p>We at Versys focus on our client’s critical technical and business issues and provide them with the optimized and effective solution in their network. With the in-house technical expertise, we always strive to address our client’s problem statement.</p>
                        <img src="assets/images/service/cloud-consulting.jpg" className='mb-5' alt="It service" style={{height:"40em"}}/>
                        <p>Some of the consulting services that we provide include:</p>
                        <div className="feature__list d-flex wwa__content">
                            <ul >
                                <li style={{color:"#696969"}}>Cloud Consulting Services</li>
                                <li style={{color:"#696969"}}>Cloud Access and Security Assessment</li>
                                <li style={{color:"#696969"}}>Cybersecurity Audit</li>
                                <li style={{color:"#696969"}}>Data Center Network Transformation</li>
                                <li style={{color:"#696969"}}>Campus and Branch Network Consulting</li>
                                <li style={{color:"#696969"}}>Wired and Wireless Workload Assessment</li>
                                <li style={{color:"#696969"}}>Network Infrastructure Optimization</li>
                                <li style={{color:"#696969"}}>Data Center Consolidation Assessment</li>
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

export default ConsultingService