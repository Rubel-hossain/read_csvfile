import { CSVReader } from "react-papaparse";
import MultiStep from "react-multistep";
const UsersRecordForm = ({
  handleOnDrop,
  handleOnError,
  handleOnRemoveFile,
  userFormSubmit,
  changeHandler,
  getNumbers,
}) => {
  const StepOne = () => {
    return (
      <div className="step-one">
        <div className="form-group">
          <div className="row">
            <div className="col">
              <div className="form-group row">
                <label htmlFor="full_name" className="col-sm-2 col-form-label">
                  Full Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="full_name"
                    className="form-control"
                    id="full_name"
                    placeholder="Full Name"
                    onChange={changeHandler}
                    value={getNumbers.full_name}
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
                <label htmlFor="user_email" className="col-sm-2 col-form-label">
                  User Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="user_email"
                    placeholder="Email"
                    onChange={changeHandler}
                    value={getNumbers.user_email}
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
                    onChange={changeHandler}
                    value={getNumbers.user_description}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StepTwo = () => {
    return (
      <>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <div className="form-group row">
                <label htmlFor="full_name" className="col-sm-2 col-form-label">
                  Full Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="full_name"
                    className="form-control"
                    id="full_name"
                    placeholder="Full Name"
                    value={getNumbers.full_name}
                    required
                    readOnly
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
                <label htmlFor="user_email" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="user_email"
                    placeholder="Email"
                    value={getNumbers.user_email}
                    required
                    readOnly
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
                    value={getNumbers.user_description}
                    required
                    readOnly
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          removeButtonColor="#659cef"
          onRemoveFile={handleOnRemoveFile}
          config={{
            header: true,
          }}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>

        <div className="form-group mt-4">
          <div className="row">
            <div className="col">
              <div className="form-group row">
                <label htmlFor="min_x" className="col-sm-4 col-form-label">
                  Minium X
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    name="min_x"
                    className="form-control"
                    id="min_x"
                    onChange={changeHandler}
                    value={getNumbers.min_x}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-group row">
                <label htmlFor="max_x" className="col-sm-4 col-form-label">
                  Maxium X
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    name="max_x"
                    className="form-control"
                    id="max_x"
                    onChange={changeHandler}
                    value={getNumbers.max_x}
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
                <label htmlFor="min_y" className="col-sm-4 col-form-label">
                  Minium Y
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    name="min_y"
                    className="form-control"
                    id="min_y"
                    onChange={changeHandler}
                    value={getNumbers.min_y}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-group row">
                <label htmlFor="max_y" className="col-sm-4 col-form-label">
                  Maxium Y
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    name="max_y"
                    className="form-control"
                    id="max_y"
                    onChange={changeHandler}
                    value={getNumbers.max_y}
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
                <label htmlFor="min_z" className="col-sm-4 col-form-label">
                  Minium Z
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    name="min_z"
                    className="form-control"
                    id="min_z"
                    onChange={changeHandler}
                    value={getNumbers.min_z}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="form-group row">
                <label htmlFor="max_z" className="col-sm-4 col-form-label">
                  Maxium Z
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    name="max_z"
                    className="form-control"
                    id="max_z"
                    onChange={changeHandler}
                    value={getNumbers.max_z}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">
            Submit Record
          </button>
        </div>
      </>
    );
  };
  const steps = [
    { name: "StepOne", component: <StepOne /> },
    { name: "StepTwo", component: <StepTwo /> },
  ];
  const prevStyle = {
    color: "#fff",
    backgroundColor: "#117a8b",
    padding: "5px 10px",
    border: "0",
  };
  const nextStyle = {
    color: "#fff",
    backgroundColor: "#117a8b",
    padding: "5px 10px",
    border: "0",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 my-5 mx-auto">
          <form onSubmit={userFormSubmit} className="mt-4">
            <MultiStep
              showNavigation={true}
              steps={steps}
              prevStyle={prevStyle}
              precClass="fffffffffffff"
              nextStyle={nextStyle}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UsersRecordForm;
