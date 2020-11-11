import React from "react";

const UsersGeneralForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <div className="form-group row">
                    <label
                      htmlFor="full_name"
                      className="col-sm-2 col-form-label"
                    >
                      Full Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        name="full_name"
                        className="form-control"
                        id="full_name"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <div className="form-group row">
                    <label
                      htmlFor="user_email"
                      className="col-sm-2 col-form-label"
                    >
                      Full Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control"
                        id="user_email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <div className="form-group row">
                    <div className="col-sm-12 mx-auto">
                      <textarea
                        name="user_description"
                        className="form-control"
                        id="user_description"
                        placeholder="Description"
                        cols="30"
                        rows="6"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UsersGeneralForm;
