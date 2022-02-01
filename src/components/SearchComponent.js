import React from 'react';

const SearchComponent = () => {
  return (
    <form>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Search By PinCode/City
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-md-2">
            <button type="submit" class="btn mt-3 border-warning">
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchComponent;
