import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function AdminBook() {
 const {id} = useParams()
 const [events,setEvents]=useState({})
 const user = JSON.parse(localStorage.getItem('user'))
 console.log(user);

 const handleSubmit=()=>{

 }

 useEffect(()=>{
  fetch(`https://agile-caverns-57115.herokuapp.com/Events/${id}`)
  .then(res=>res.json())
  .then(data=>setEvents(data))
},[])


  return (
    <form onClick={handleSubmit}>
      <input type="text" className="form-control mb-3" placeholder="Name" value={user.name}/>
      <input type="email" className="form-control mb-3" placeholder="Email" value={user.email} />
      <input type="text" className="form-control mb-3" placeholder="Description"value={events.description} />
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="credit-card" />
        <label className="form-check-label" for="inlineRadio1">Credit Card</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="paypal" />
        <label className="form-check-label" for="inlineRadio2">Paypal</label>
        <button className="btn btn-primary"> Pay</button>
      </div>
    </form>
  )
}
