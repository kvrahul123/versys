import React from 'react'
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import { Navigate, useNavigate } from "react-router-dom";
import NewsLetters from '../NewsLetters';
function AllProducts() {

  const navigate = useNavigate();
  function redirectPage(val){
 
      navigate(val);
  }


    return (
        <div>
            <Header/>
            <main className="main--wrapper">
    
    
    
    <section className="feature feature-area pt-130 pb-100 fix">
        <div className="container">
            <div className="row">
        
                <div className="col-lg-12 mb-30">
                    <div className="feature__content">
                        <span className="fw-700 text-uppercase"><span></span>Offerings</span>
                        <h2 className="theme-color fw-700 mb-30">All Offerings</h2>
                        <p> Transform your business in a dynamic digital world with Customer-centric Solutions from Versys Networks. </p>
                        <img src="../assets/images/service/all_products.jpeg" class="card-img-top mb-5" alt="audio video"/>

                        <h2 className="theme-color fw-700 mb-30">Versys Offerings</h2>
                        {/* <h4>Drive Innovation Through Human-Centric Technology Solutions
                          <p className='mt-3'>Transform how you interact with the ever-evolving digital world. Fuel productivity, gain cost efficiencies, and scale up business opportunities with IT solutions designed to help you build, manage, optimize, and secure your network.</p>
                        </h4> */}

                        <div className='container'>
                          <div className='row'>

                            <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/services-thumb-h2-1.jpeg" class="card-img-top" alt="audio video"/>
                                  <div class="card-body">
                                    <h5 class="card-title">Audio Video</h5>
                                    <p class="card-text">SWork seamlessly together to address all your video infrastructure and AV needs.</p>
                                    <a onClick={()=>redirectPage("/offerings/audio-video")} class="btn btn-primary pointer text-white">Discover More</a>
                                  </div>
                                </div>
                            </div>


                            <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/it-management.jpeg" class="card-img-top" alt="audio video"/>
                                  <div class="card-body">
                                    <h5 class="card-title">Managed IT Services</h5>
                                    <p class="card-text">SWork seamlessly together to address all your video infrastructure and AV needs.</p>
                                    <a onClick={()=>redirectPage("/offerings/it-services")} class="btn btn-primary pointer text-white">Discover More</a>
                                  </div>
                                </div>
                            </div>

                            {/* <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/services-thumb-h2-2.jpeg" class="card-img-top" alt="cables"/>
                                  <div class="card-body">
                                    <h5 class="card-title">Cables</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a onClick={()=>redirectPage("/products/cables")} class="btn btn-primary pointer text-white">Discover More</a>
                                  </div>
                                </div>
                            </div>

                            <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/services-thumb-h2-3.jpeg" style={{height:"15em"}} class="card-img-top" alt="infrastructure"/>
                                  <div class="card-body">
                                    <h5 class="card-title">Infrastructure</h5>
                                    <p class="card-text">Find the right solution for storing, securing, and protecting your IT equipment.</p>
                                    <a onClick={()=>redirectPage("/products/infrastructure")}  class="btn btn-primary pointer text-white">Discover More</a>
                                  </div>
                                </div>
                            </div>








                            <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative.jpeg" class="card-img-top" alt="audio video"/>
                                  <div class="card-body">
                                    <h5 class="card-title">IoT</h5>
                                    <p class="card-text">Remotely monitor and protect your mission-critical assets against physical threats — from temperature extremes to water damage.</p>
                                    <a onClick={()=>redirectPage("/products/iot")}  class="btn btn-primary pointer text-white">Discover More</a>
                                  </div>
                                </div>
                            </div>

                            <div className='col-md-4 mt-5'>
                            <div class="card" >
                                  <img src="../assets/images/service/technology-elements-background.jpeg" class="card-img-top" alt="cables"/>
                                  <div class="card-body">
                                    <h5 class="card-title">KVM</h5>
                                    <p class="card-text">Streamline workflows and take control of processes and visual elements easily, securely, and quickly with remote access and simplified control..</p>
                                    <a onClick={()=>redirectPage("/products/kvm")} class="btn btn-primary pointer text-white">Discover More</a>
                                  </div>
                                </div>
                            </div> */}

                            <div className='col-md-4 mt-5'>
                            <div class="card" style={{"width": "105%"}}>
                                  <img src="../assets/images/service/futuristic-smart-city-with-5g-global-network-technology.jpeg" style={{height:"15em"}} class="card-img-top" alt="infrastructure"/>
                                  <div class="card-body">
                                    <h5 class="card-title">Networking</h5>
                                    <p class="card-text">Construct and expand networks of all sizes from small offices to global enterprises to deliver optimized security.</p>
                                    <a onClick={()=>redirectPage("/offerings/networking")}  class="btn btn-primary pointer text-white">Discover More</a>
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

export default AllProducts