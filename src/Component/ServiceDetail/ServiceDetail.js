import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import { useSpring, animated , config} from 'react-spring'

const ServiceDetail = (props) => {
    

    const [flip, set] = useState(false)
    const a = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!flip),
    })
    const event = props.event;
    const {_id, name, img, description } = event;

    return (

        <div class="col-sm-9 col-md-4">
        <div class="card h-100 w-100 shadow rounded-lg p-3 p-md-2 p-lg-3 p-xl-5">
          <div class="card-body text-center text-md-start">
            <div class="py-3"><img class="img-fluid" src={img} height="90" alt="" /></div>
            <div class="py-3">
              <animated.h4 style={a} class="fw-bold card-title">{name}</animated.h4>
              <p class="card-text">{description}</p>
            </div>
            <Link to={`/AdminBook/${_id}`} className="btn btn-lg btn-outline-primary rounded-pill" to="/login">Get Service</Link>
          </div>
        </div>
      </div>





        
        // <div className="  col-md-4 shadow rounded mt-5 d-flex justify-content-center">
        //     <div>
        //      <img className="img-fluid" src={img} alt="" />  
        //         <h4>{name}</h4>
        //         <p style={{ width: '190px' }}>{description}</p>
        //     </div>
        //     <div className="text-center py-4">
        //         <Link to={`/AdminBook/${_id}`} className="btn btn-lg btn-outline-primary rounded-pill" to="/login">Get Service</Link>
        //     </div>
        // </div>
       



    );
};

export default ServiceDetail;