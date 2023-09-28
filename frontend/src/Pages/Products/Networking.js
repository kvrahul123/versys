import React from 'react'
import Footer from '../../Layouts/Footer'
import Header from '../../Layouts/Header'
import NewsLetters from '../NewsLetters'

const Networking = () => {
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
                <h2 className="theme-color fw-700 mb-30">Networking</h2>
                <p>  We provide end to end solutions needed for all your Enterprise networking requirements.</p>
                <img src="../assets/images/service/futuristic-smart-city-with-5g-global-network-technology.jpeg" class="card-img-top mb-5" alt="audio video"/>

                <h2 className="theme-color fw-700 mb-30">All Networking Offerings</h2>
  

                <div className='container'>
                  <div className='row'>


                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/services-thumb-h2-2.jpeg" class="card-img-top" alt="cables"/>
                          <div class="card-body">
                            <h5 class="card-title">Switches</h5>
                            

                          </div>
                        </div>
                    </div>

                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/routers-2.jpeg" style={{"width": "67%","margin-left": "58px"}}class="card-img-top" alt="cables"/>
                          <div class="card-body">
                            <h5 class="card-title">Routers</h5>
                            

                          </div>
                        </div>
                    </div>

                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/wifi.jpg" class="card-img-top" alt="cables"/>
                          <div class="card-body">
                            <h5 class="card-title">Wifi</h5>
                            

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

export default Networking