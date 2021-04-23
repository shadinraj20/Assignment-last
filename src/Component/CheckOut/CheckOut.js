import React from 'react';
import image1 from '../../image/gallery/article-1.png';
import image2 from '../../image/gallery/article-2.png';
import image3 from '../../image/gallery/article-3.png';

const CheckOut = () => {
    return (
        <div>
              <section>
        <div className="bg-holder" style={{backgroundImage:"url(assets/img/illustrations/article-bg.png)",backgroundPosition:"right center",backgroundSize:"auto"}}>
        </div>
    

        <div className="container-lg">
          <div className="bg-holder" style={{backgroundImage:"url(assets/img/illustrations/dot-2.png)",backgroundPosition:"left top",backgroundSize:"initial",marginTop:"120px",marginLeft:"-35px"}}>
          </div>
        
          <div className="row flex-center">
            <div className="col-auto text-center">
              <h2 className="fw-bold">Check out our latest article</h2>
              <hr className="mx-auto text-dark" style={{height:"2px",width:"50px" }}/>
            </div>
          </div>
          <div className="row h-100 justify-content-center pt-6">
            <div className="col-12 col-sm-9 col-md-4 mt-4">
              <div className="card h-100 rounded-3 shadow"><img src={image1} alt="" />
                <div className="card-body p-4 text-center text-md-start">
                  <h5 className="fw-bold">Disease detection</h5>
                  <p className="card-text">In this case, the role of the health laboratory is very important to do a disease detection...</p><a className="stretched-link text-decoration-none" href="#" role="button">Read more
                    <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-9 col-md-4 mt-4">
              <div className="card h-100 rounded-3 shadow"><img src={image2} alt="" />
                <div className="card-body p-4 text-center text-md-start">
                  <h5 className="fw-bold">Herbal medicines </h5>
                  <p className="card-text">Herbal medicine is very widely used at this time because of its very good for your health...</p><a className="stretched-link text-decoration-none" href="#" role="button">Read more
                    <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-9 col-md-4 mt-4">
              <div className="card h-100 rounded-3 shadow"><img src={image3} alt="" />
                <div className="card-body p-4 text-center text-md-start">
                  <h5 className="fw-bold">Natural care </h5>
                  <p className="card-text">A healthy lifestyle should start from now and also for your skin health.There are some...</p><a className="stretched-link text-decoration-none" href="#" role="button">Read more
                    <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="text-center pt-4 z-index-2">
              <button className="btn btn-lg btn-outline-primary rounded-pill z-index-2 hover-top" type="submit">View all</button>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default CheckOut;