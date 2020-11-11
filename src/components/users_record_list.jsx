import React from "react";

const UsersRecordList = ({ cleanLocalStorage, local_users_data }) => {
  if (local_users_data !== null) {
    console.log(local_users_data);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Description</th>
                    <th>Min X</th>
                    <th>Max X</th>
                    <th>Min Y</th>
                    <th>Max Y</th>
                    <th>Min Z</th>
                    <th>Max Z</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{local_users_data.full_name}</td>
                    <td>{local_users_data.user_email}</td>
                    <td>{local_users_data.user_description}</td>
                    <td>{local_users_data.min_x}</td>
                    <td>{local_users_data.max_x}</td>
                    <td>{local_users_data.min_y}</td>
                    <td>{local_users_data.max_y}</td>
                    <td>{local_users_data.min_z}</td>
                    <td>{local_users_data.max_z}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4 ml-auto text-right my-4">
            <button
              className="btn btn-md btn-danger"
              onClick={cleanLocalStorage}
            >
              Reset Record
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UsersRecordList;
