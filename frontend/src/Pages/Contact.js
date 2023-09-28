import React from 'react'
import Footer from '../Layouts/Footer'
import Header from '../Layouts/Header'
import NewsLetters from './NewsLetters'
import { useFormik } from 'formik';
import axios from 'axios';
import $ from 'jquery';
import * as Yup from 'yup';
import route from './Routes';
function Contact() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validateSchema = Yup.object().shape({
        name: Yup.string().required("This field is required"),
        subject: Yup.string().required("This field is required"),
        message: Yup.string().required("This field is required"),
        email: Yup.string().email("Please enter a valid email").required("This field is required"),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("This field is required").min(10,"Must be 10 digits").max(10,"Must be 10 digits")
     
      });
      
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone: '',
          subject:'',
          message:'',
        },
        validationSchema: validateSchema,
        onSubmit: function (values) {
            const headers = { 
                'Content-Type': 'application/json',
            };

            axios.post(""+route.production_name+"contact/form",values, { headers })
              .then((response) => {
           
                if(response.data.success===true){
                    $('#success_msg').removeClass('alert-danger');
                    $('#success_msg').addClass('alert-success');
                    $('#success_msg').html(response.data.msg);
                    $('#success_msg').removeClass('d-none');
                }else{
                    $('#success_msg').removeClass('alert-success');
                    $('#success_msg').addClass('alert-danger');
                    $('#success_msg').html(response.data.msg);
                    $('#success_msg').removeClass('d-none');
                }

                setTimeout(()=>{
                    $('#success_msg').addClass('d-none');
                },3000)
              }).catch((error) => {
                console.log(error)
               });
        },



 
      })


  return (
    <div>       
        <Header/>
    <main class="main--wrapper">
        <section class="contacts pt-125 pb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 mb-30">
                <div class="theme">
                    <span class="theme__small--title theme__small--title-left fw-700 text-uppercase"><span></span>contact us</span>
                    <h2 class="theme__big--title fw-700 mb-25">We have a expert teams don’t hesite <br/> to contact us</h2>
                </div>
                <div class="contacts__social">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6 offset-lg-1 mb-30">
                <div class="row">
                    <div class="col-lg-6 col-md-6 mb-40">
                        <div class="contacts__address">
                            <i class="fal fa-envelope-open"></i>
                            <h5 class="primary-color">Email Address</h5>
                            <h4><a href="https://www.devsnews.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4b383e3b3b24393f0b2c262a222765282426">[email&#160;protected]</a></h4>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 mb-40">
                        <div class="contacts__address">
                            <i class="fal fa-phone"></i>
                            <h5 class="primary-color">Phone Number</h5>
                            <h4>+012 (345) 6789</h4>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 mb-40">
                        <div class="contacts__address">
                            <i class="fal fa-map-marked-alt"></i>
                            <h5 class="primary-color">Head Office</h5>
                            <h4>25 Middle Road, USA</h4>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 mb-40">
                        <div class="contacts__address">
                            <i class="fal fa-home"></i>
                            <h5 class="primary-color">Office Location</h5>
                            <h4>32 Street, New York</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="contact-form-area">
    <div class="container">
        <div class="form-wrapper grey-bg">
            <div class="row align-items-center">
                <div class="col-sm-12 text-center mb-40">
                    <div class="theme">
                        <h2 class="black-color mb-15">Send Us a Message</h2>
                        <h5 class="fw-500 primary-color">How To Build A Simple Cryptocurrency Blockchain In Node.js</h5>
                    </div>
              
                </div>
            </div>
            <div className='text-center alert d-none' id="success_msg"></div>
            <div class="contact-form">
                <form id="contact-form" onSubmit={formik.handleSubmit}>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-box user-icon mb-30">
                            <input type="text" name="name" placeholder='Your Name' id="name" 
                                className={` ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                            {formik.touched.name && formik.errors.name && (
                                <span className='text-red-400 text-danger'>{formik.errors.name}</span>
                            )}
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-box email-icon mb-30">
                            <input type="text" name="email" placeholder='Your Email' id="email" 
                                className={` ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                            {formik.touched.email && formik.errors.email && (
                                <span className='text-red-400 text-danger'>{formik.errors.email}</span>
                            )}
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-box phone-icon mb-30">
                            <input type="text" name="phone" placeholder='Your Phone' id="phone" 
                                className={` ${formik.touched.phone && formik.errors.phone ? 'border-red-400' : 'border-gray-300'}`}
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                            {formik.touched.phone && formik.errors.phone && (
                                <span className='text-red-400 text-danger'>{formik.errors.phone}</span>
                            )}
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-box subject-icon mb-30">
                            <input type="text" name="subject" placeholder='Your Subject' id="subject" 
                                className={` ${formik.touched.subject && formik.errors.subject ? 'border-red-400' : 'border-gray-300'}`}
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.subject} />
                            {formik.touched.subject && formik.errors.subject && (
                                <span className='text-red-400 text-danger'>{formik.errors.subject}</span>
                            )}
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-box message-icon mb-30">
                                <textarea name="message" id="message" cols="30" rows="10"
                                    placeholder="Your Message" className={` ${formik.touched.message && formik.errors.message ? 'border-red-400' : 'border-gray-300'}`}
                                onChange={formik.handleChange} onBlur={formik.handleBlur} >
                                {formik.values.message}
                                    </textarea>


                            {formik.touched.message && formik.errors.message && (
                                <span className='text-red-400 text-danger'>{formik.errors.message}</span>
                            )}
                            </div>
                            <div class="contact-btn text-center">
                                <button class="btn btn--grey" type="submit">get action <img
                                        src="https://devsnews.com/template/neeha/neeha/assets/img/icon/arrow.png/" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </form>
                <p class="ajax-response text-center"></p>
            </div>
        </div>
    </div>
</section>

<div class="mt-5">
<NewsLetters/>
</div>


</main>
<Footer/>
    </div>
  )
}

export default Contact