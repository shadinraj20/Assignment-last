import React from 'react';
import './Header.css';
import dot from '../../image/illustrations/dot.png';
import heroHeader from '../../image/illustrations/hero-header.png';

const Header = () => {
    return (
      <section class="py-0">
        <div class="bg-holder" style={{backgroundImage:`url(${dot})`,backgroundPosition:"left",backgroundSize:"auto",marginTop:"-105px"}}>
        </div>
    

        <div class="container position-relative">
          <div class="row align-items-center">
            <div class="col-md-5 col-lg-6 order-md-1 pt-8"><img class="img-fluid" src={heroHeader} alt="" /></div>
            <div class="col-md-7 col-lg-6 text-center text-md-start pt-5 pt-md-9">
              <h1 class="mb-4 display-3 fw-bold">Virtual healthcare <br class="d-block d-lg-none d-xl-block" />for you.</h1>
              <p class="mt-3 mb-4 fs-1">Trafalgar provides progressive, and affordable<br class="d-none d-lg-block" />healthcare, accessible on mobile and online<br class="d-none d-lg-block" />for everyone</p><a class="btn btn-lg btn-primary rounded-pill hover-top" href="#" role="button">Learn more</a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Header;