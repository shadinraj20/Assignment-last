import React from 'react';
import user1 from '../../image/gallery/user-1.png';
import user2 from '../../image/gallery/user-2.png';
import user3 from '../../image/gallery/user-3.png';
const Customer = () => {
    return (
        <div>
            
      <section className="py-8" id="testimonial">
        <div className="container">
          <div className="bgHolder z-index-1" style={{backgroundImage:"url(assets/img/illustrations/dot.png)",backgroundPosition:"right top",backgroundSize:'auto',marginLeft:'-30px',marginTop:'10px',filter:'contrast(1.5)'}}>
          </div>
          

          <div className="bgHolder z-index-1" style={{backgroundImage:"url(assets/img/illustrations/dot-2.png)",backgroundPosition:'left bottom',backgroundSize:'auto',marginLeft:'-35px',marginTop:'-65px',filter:'contrast(1.5)'}}>
          </div>
        

          <div className="carousel slide" id="carouselExampleDark" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row h-100">
                  <div className="col-12">
                    <div className="card text-white bg-primary-gradient">
                      <div className="card-body p-4 p-md-4 p-lg-7">
                        <h2 className="fw-bold text-white text-center">What our customer are saying</h2>
                        <hr className="mx-auto" style={{height:"2px",width:"50px" }}/>
                        <div className="d-md-flex align-items-md-center mt-5 text-center text-md-start"><img className="img-fluid me-4 me-md-3 me-lg-4" src={user1} width="100" alt="" />
                          <div className="w-md-25 my-3">
                            <h5 className="mb-0 fw-medium text-white">Edward Newgate</h5>
                            <p className="fw-normal mb-0">Founder Circle</p>
                          </div>
                          <div className="w-md-75">
                            <p className="card-text ms-md-5">“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="row h-100">
                  <div className="col-12">
                    <div className="card text-white bg-primary-gradient">
                      <div className="card-body p-4 p-md-4 p-lg-7">
                        <h2 className="fw-bold text-white text-center">Our dear customers said about us</h2>
                        <hr className="mx-auto" style={{height:'2px',width:'50px' }}/>
                        <div className="d-md-flex align-items-md-center mt-5 text-center text-md-start"><img className="img-fluid me-4 me-md-3 me-lg-4" src={user2} width="100" alt="" />
                          <div className="w-md-25 my-3">
                            <h5 className="mb-0 fw-medium text-white">Jhon Doe</h5>
                            <p className="fw-normal mb-0">UI/UX Designer</p>
                          </div>
                          <div className="w-md-75">
                            <p className="card-text ms-md-5">“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row h-100">
                  <div className="col-12">
                    <div className="card text-white bg-primary-gradient">
                      <div className="card-body p-4 p-md-4 p-lg-7">
                        <h2 className="fw-bold text-white text-center">Our dear customers said about us</h2>
                        <hr className="mx-auto" style={{height:'2px',width:'50px' }}/>
                        <div className="d-md-flex align-items-md-center mt-5 text-center text-md-start"><img className="img-fluid me-4 me-md-3 me-lg-4" src={user3} width="100" alt="" />
                          <div className="w-md-25 my-3">
                            <h5 className="mb-0 fw-medium text-white">Jeny Doe</h5>
                            <p className="fw-normal mb-0">Web Designer</p>
                          </div>
                          <div className="w-md-75">
                            <p className="card-text ms-md-5">“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 flex-center">
              <div className="col-4 col-sm-5 text-end position-relative z-index-2"><a className="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></a></div>
              <div className="col-auto position-relative z-index-2">
                <ol className="carousel-indicators">
                  <li className="active" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"></li>
                  <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
                </ol>
              </div>
              <div className="col-4 col-sm-5 position-relative z-index-2"><a className="carousel-control-next carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></a></div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
        </div>
    );
};

export default Customer;