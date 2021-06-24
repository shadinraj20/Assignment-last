import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import AdminBook from './AdminBook';
import AdminBookingList from './AdminBookingList';
import AdminReview from './AdminReview';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const Admin = () => {
  return (
    <section className="py-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div class="list-group">
              <Link to="/admin/book" class="list-group-item list-group-item-action">
                Book
              </Link>
              <Link to="/admin/booking-list" class="list-group-item list-group-item-action">Booking List</Link>
              <Link to="/admin/review" class="list-group-item list-group-item-action">Review</Link>
            </div>
          </div>
          <div className="col">
            <Switch>
              <PrivateRoute exact path="/admin/book">
                <AdminBook/>
              </PrivateRoute>
              <PrivateRoute exact path="/admin/booking-list">
                <AdminBookingList/>
              </PrivateRoute>
              <PrivateRoute exact path="/admin/review">
                <AdminReview/>
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Admin;