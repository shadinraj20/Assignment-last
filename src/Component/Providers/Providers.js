import React from 'react';
import image from '../../image/illustrations/about-1.png';

const Providers = () => {
    return (
        <div>
            <section className="py-6 py-lg-8" id="about">
        <div className="bg-holder" style={{backgroundImage:"url(assets/img/illustrations/dot.png)",backgroundPosition:'right bottom',backgroundSize:'auto',marginTop:'50px'}}>
        </div>

        <div className="container">
          <div className="row g-xl-0 align-items-center">
            <div className="col-md-6"><img className="img-fluid mb-5 mb-md-0" src={image} width="480" alt="" /></div>
            <div className="col-md-6 text-center text-md-start">
              <h2 className="fw-bold lh-base">Leading healthcare <br />providers</h2>
              <hr className="text-dark mx-auto mx-md-0" style={{height:'2px',width:'50px'}} />
              <p className="pt-3">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
              <div className="py-3">
                <button className="btn btn-lg btn-outline-primary rounded-pill" type="submit">Learn more </button>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Providers;