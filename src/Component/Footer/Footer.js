import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="py-6 pt-7 bg-primary-gradient">
        <div className="bgHolder" style={{backgroundImage:"url(assets/img/illustrations/dot.png)",backgroundPosition:"left bottom",backgroundSize:"auto",filter:"contrast(1.5)"}}>
        </div>
        

        <div className="bg-holder" style={{backgroundImage:"url(assets/img/illustrations/dot-2.png)",backgroundPosition:"right top",backgroundSize:"auto",marginTop:"-75px"}}>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 order-0 order-sm-0 pe-6"><a className="text-decoration-none" href="#"><img className="img-fluid me-2" src="assets/img/icons/footer-logo.png" alt="" /><span className="fw-bold fs-1 text-light">Trafalgar</span></a>
              <p className="mt-3 text-white">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
            </div>
            <div className="col-4 col-md-4 col-lg mb-3 order-2 order-sm-1">
              <h6 className="lh-lg fw-bold text-light">Company</h6>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">About</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Testimonials</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Find a doctor</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Apps</a></li>
              </ul>
            </div>
            <div className="col-4 col-md-4 col-lg mb-3 order-3 order-sm-2">
              <h6 className="lh-lg fw-bold text-light"> Region </h6>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Indonesia</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Singapore</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Guide</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Hongkong</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Canada</a></li>
              </ul>
            </div>
            <div className="col-4 col-md-4 col-lg mb-3 order-1 order-sm-3">
              <h6 className="lh-lg fw-bold text-light">Help </h6>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Help center</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Contact support</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Guide</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">Instructions</a></li>
                <li className="lh-lg"><a className="text-light fs--1 text-decoration-none" href="#!">How it works</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Footer;