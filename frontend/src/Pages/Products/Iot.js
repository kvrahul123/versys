import React from 'react'
import Footer from '../../Layouts/Footer'
import Header from '../../Layouts/Header'
import NewsLetters from '../NewsLetters'

const Iot = () => {
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
                <h2 className="theme-color fw-700 mb-30">IOT</h2>
                <p> Drive Innovation, Automate Operations, Improve Efficiency, and Transform Your Business with our Advanced and Scalable IoT Solutions </p>
                <img src="../assets/images/service/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative.jpeg" class="card-img-top mb-5" alt="audio video"/>

                <h2 className="theme-color fw-700 mb-30">All IOT Products</h2>
  

                <div className='container'>
                  <div className='row'>

                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/audio-video/adapters.jpg" class="card-img-top" alt="audio video"/>
                          <div class="card-body">
                          <h5 class="card-title">Wired</h5>
                        </div>
                        </div>
                    </div>




                    

  

                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/services-thumb-h2-3.jpeg" style={{height:"15em"}} class="card-img-top" alt="infrastructure"/>
                          <div class="card-body">
                            <h5 class="card-title">Wireless</h5>

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

export default Iot