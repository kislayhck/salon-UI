import React from 'react';
import { Link } from 'react-router-dom';

const AllStore = ({ info }) => {
  console.log(info, 'info stoe');
  return (
    <div className="container mt-5">
      <div className="row">
        {info?.map((item) => (
          <div className="col-md-4">
            <div class="card mb-3" style={{ width: '20rem' }}>
              <img
                src="https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/10774-Loreal_Banner.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.body}</p>
                <Link to={`shop/${item.id}`} class="btn btn-warning">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStore;
