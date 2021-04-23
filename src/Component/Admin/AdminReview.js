import React from 'react'

export default function AdminReview() {
  const user = JSON.parse(localStorage.getItem('user'))
 console.log(user);

  return (
    <form>
      <input type="text" className="form-control mb-3" placeholder="Your Name" value={user.name} required/>
      <input type="text" className="form-control mb-3" placeholder="Comapney's Name Designation"required  />
      <textarea type="text" className="form-control mb-3" placeholder="Description" rows="5" required/>
      <input type="submit" className="btn btn-primary" value="Submit" />
    </form>
  )
}
