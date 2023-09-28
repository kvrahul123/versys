import React from 'react'
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import NewsLetters from '../NewsLetters';
function AmcServices() {
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
                        <h2 className="theme-color fw-700 mb-30">Annual Maintenance Contract | AMC Services | AMC Service Provider</h2>
                        <p>Versys has alliances and partnerships with leading technology OEMs and is a single stop service provider for a number of OEMs. We provide instant support through a variety of channels (web, chat, phone, e-mail) through a proper channelized helpdesk team.</p>
                        <img src="assets/images/service/contract.jpg" className='mb-5' alt="It service" style={{height:"40em"}}/>
                        <p>Our AMC services include:</p>
                        <div className="feature__list d-flex wwa__content">
                            <ul >
                                <li style={{color:"#696969"}}>Hardware support for servers, storage devices and networking devices</li>
                                <li style={{color:"#696969"}}>Helpdesk IT services based on proven processes and technologies</li>
                                <li style={{color:"#696969"}}>Ensuring Infrastructure uptime</li>
                                <li style={{color:"#696969"}}>Security services which includes implementation, upgrading, applying patches and malware detection and prevention. This also includes implementing firewalls and intrusion prevention devices</li>
                                <li style={{color:"#696969"}}>IT audits to continuously monitor the state of IT infrastructure and prevent issues</li>
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

export default AmcServices