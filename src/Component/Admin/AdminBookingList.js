import React from 'react'
import search from '../../image/illustrations/search.png';
import onlinePharmacy from '../../image/illustrations/online-pharmacy.png';

export default function AdminBookingList() {
  return (
    <div className="row">
      <div className="col-sm-9 col-md-4">
        <div className="card h-100 w-100 shadow rounded-lg p-3 p-md-2 p-lg-3 p-xl-5">
          <div className="card-body text-center text-md-start">
            <div className="py-3"><img className="img-fluid" src={search} height="90" alt="" /></div>
            <div className="py-3">
              <h4 className="fw-bold card-title">Search doctor</h4>
              <p className="card-text">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-9 col-md-4">
        <div className="card h-100 w-100 shadow rounded-lg p-3 p-md-2 p-lg-3 p-xl-5">
          <div className="card-body text-center text-md-start">
            <div className="py-3"><img className="img-fluid" src={onlinePharmacy} height="90" alt="" /></div>
            <div className="py-3">
              <h4 className="fw-bold card-title">Online pharmacy</h4>
              <p className="card-text">Buy your medicines with our mobile application with a simple delivery system</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
