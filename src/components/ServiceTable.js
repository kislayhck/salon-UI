import React from 'react';

function ServiceTable() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button class="btn btn-warning">Add</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <button class="btn btn-warning">Add</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry</td>
            <td>@twitter</td>
            <td>
              <button class="btn btn-warning">Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ServiceTable;
