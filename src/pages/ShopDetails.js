import React from 'react';
import CartItems from '../components/CartItem';
import HomeCaraousel from '../components/HomeCaraousel';
import Services from '../components/Services';
import ServiceTable from '../components/ServiceTable';

function ShopDetails() {
  return (
    <div>
      <HomeCaraousel />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-2">
            <Services />
          </div>
          <div className="col-md-7">
            <ServiceTable />
          </div>
          <div className="col-md-3">
            <CartItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetails;
