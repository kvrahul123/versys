import React from 'react'
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import NewsLetters from '../NewsLetters';
function AudioVideo() {
    return (
        <div>
            <Header/>
            <main className="main--wrapper">
    
    
    
    <section className="feature feature-area pt-130 pb-100 fix">
        <div className="container">
            <div className="row">
        
                <div className="col-lg-12 mb-30">
                    <div className="feature__content">
                        <span className="fw-700 text-uppercase"><span></span>Products</span>
                        <h2 className="theme-color fw-700 mb-30">Audio Video</h2>
                        <p> Trust Versys Networks to provide you with State of the art Audio-Visual solutions for your organization including digital signage, boardroom solutions & Video conferencing solutions.</p>
                        <img src="../assets/images/service/services-thumb-h2-1.jpeg" class="card-img-top mb-5" alt="audio video"/>

                        <h2 className="theme-color fw-700 mb-30">All Audio Video Products</h2>
          

                        <div className='container'>
                          <div className='row'>

                            {/* <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/audio-video/adapters.jpg" class="card-img-top" alt="audio video"/>
                                  <div class="card-body">
                                  <h5 class="card-title">Adapters</h5>
                                </div>
                                </div>
                            </div> */}




                            

                            <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/services-thumb-h2-2.jpeg" class="card-img-top" alt="cables"/>
                                  <div class="card-body">
                                    <h5 class="card-title">AV-over-IP</h5>
                                    

                                  </div>
                                </div>
                            </div>

                            <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/services-thumb-h2-3.jpeg" style={{height:"15em"}} class="card-img-top" alt="infrastructure"/>
                                  <div class="card-body">
                                    <h5 class="card-title">Control Systems</h5>
     
                                  </div>
                                </div>
                            </div>








                            {/* <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative.jpeg" class="card-img-top" alt="audio video"/>
                                  <div class="card-body">
                                    <h5 class="card-title">Converters</h5>

                                  </div>
                                </div>
                            </div> */}
                            <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/video-conference.jpg" style={{height:"15em"}} class="card-img-top" alt="infrastructure"/>
                                  <div class="card-body">
                                    <h5 class="card-title">Video Conferencing</h5>

                                  </div>
                                </div>
                            </div>
                            
                            <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/digital-signage-1.jpeg" class="card-img-top" alt="cables"/>
                                  <div class="card-body">
                                    <h5 class="card-title">Digital Signage</h5>
             
                                  </div>
                                </div>
                            </div>



                          </div>
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

export default AudioVideo