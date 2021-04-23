import React, { useEffect, useState } from 'react';

import eventData from '../../Component/fakeData/fakeData.json';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Service = () => {
  const handleClick = ()=>{
    fetch("https://agile-caverns-57115.herokuapp.com/events",{
      method: 'POST',
      headers:{'Content-Type':'application/json' },
      body: JSON.stringify(eventData)
    })
    .then(res=> res.json())
    .then(data=>console.log(data))
  }
  const [  ,setEventData]= useState([])

  useEffect(()=>{
    fetch('https://agile-caverns-57115.herokuapp.com/addEvents')
    .then(res=>res.json())
    .then(data=>setEventData(data))
  },[])

  return (
       
      <div className="container-lg mt-5">
        <div className="row justify-content-center">
          <div className="col-4 text-center">
            <h2 className="fw-bold">Our services</h2>
            <hr className="w-25 mx-auto text-dark" style={{ height: '2px' }} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-9 col-xl-8 text-center">
            <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
          </div>
        </div>
        <div className="row">
          {/* <button onClick={handleClick}>add all</button> */}
      {
        eventData.map(e => <ServiceDetail event={e}></ServiceDetail>)
      }
        </div>
      </div>
      

 





    
  );
};

export default Service;