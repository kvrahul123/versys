import React from 'react'
import Footer from '../../Layouts/Footer'
import Header from '../../Layouts/Header'
import NewsLetters from '../NewsLetters'

const ItServices = () => {
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
                <h2 className="theme-color fw-700 mb-30">Managed IT Services</h2>
                <p>  We provide end to end Managed IT services including Consulting, Resident engineers & AMC services.</p>
                <img src="../assets/images/service/it-management.jpeg" class="card-img-top mb-5" alt="audio video"/>

                <h2 className="theme-color fw-700 mb-30">All Managed IT Services</h2>
  

                <div className='container'>
                  <div className='row'>


                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/managed-it-1.jpeg" style={{"width": "66%","margin-left": "52px"}} class="card-img-top" alt="cables"/>
                          <div class="card-body">
                            <h5 class="card-title">Consulting</h5>
                            

                          </div>
                        </div>
                    </div>

                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/amc.jpg" style={{"width": "67%","margin-left": "58px"}}class="card-img-top" alt="cables"/>
                          <div class="card-body">
                            <h5 class="card-title">AMC</h5>
                            

                          </div>
                        </div>
                    </div>

                    <div className='col-md-4 mt-5'>
                    <div class="card" >
                          <img src="../assets/images/service/facility-management.jpeg" class="card-img-top" alt="cables"/>
                          <div class="card-body">
                            <h5 class="card-title">Facility Management Service</h5>
                            

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

export default ItServices;