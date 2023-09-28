import React from 'react'
import Footer from '../../Layouts/Footer'
import Header from '../../Layouts/Header'
import NewsLetters from '../NewsLetters'

const Infrastructure = () => {
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
                <h2 className="theme-color fw-700 mb-30">Infrastructure</h2>
                <p>   Find the right solution for storing, securing, and protecting your IT equipment from a wide variety of cabinets, racks, enclosures and accessories. </p>
                <div className='text-center'>
                <img src="../assets/images/service/services-thumb-h2-3.jpeg" style={{height:"25em"}} alt="audio video"/>
                </div>

                <h2 className="theme-color fw-700 mb-30">All Infrastructure Products</h2>
  

                <div className='container'>
                  <div className='row'>

                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/audio-video/adapters.jpg" class="card-img-top" alt="audio video"/>
                          <div class="card-body">
                          <h5 class="card-title">Cabinets & Racks</h5>
                        </div>
                        </div>
                    </div>




                    

                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/services-thumb-h2-2.jpeg" class="card-img-top" alt="cables"/>
                          <div class="card-body">
                            <h5 class="card-title">Cable Management</h5>
                            

                          </div>
                        </div>
                    </div>

                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/services-thumb-h2-3.jpeg" style={{height:"15em"}} class="card-img-top" alt="infrastructure"/>
                          <div class="card-body">
                            <h5 class="card-title">Power</h5>

                          </div>
                        </div>
                    </div>








                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative.jpeg" class="card-img-top" alt="audio video"/>
                          <div class="card-body">
                            <h5 class="card-title">Testers</h5>

                          </div>
                        </div>
                    </div>

                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/technology-elements-background.jpeg" class="card-img-top" alt="cables"/>
                          <div class="card-body">
                            <h5 class="card-title">Tools</h5>
     
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

export default Infrastructure