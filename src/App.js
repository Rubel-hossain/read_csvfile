import { useState, useEffect } from "react";
import MultiStep from "react-multistep";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UsersRecordForm from "./components/users_record_form";
import UsersGeneralForm from "./components/users_general_form";
import UsersRecordList from "./components/users_record_list";
import StepTwo from "./components/forms/stepTwo";

function App(props) {
  // Start Handle User Record Form
  const [getUsersLocalInfo, setGetUsersLocalInfo] = useState({});
  const [getNumbers, setGetNumbers] = useState({
    max_x: "",
    min_x: "",
    max_y: "",
    min_y: "",
    max_z: "",
    min_z: "",
    full_name: "",
    user_email: "",
    user_description: "",
  });

  const handleOnDrop = (data) => {
    const expected_fields = ["X", "Y", "Z"];
    const data_to_array = Object.entries(data);
    const get_fields_name = data_to_array[1][1].meta.fields;
    const check_fields = expected_fields.every((i) =>
      get_fields_name.includes(i)
    );

    if (check_fields) {
      let get_x_array = [];
      let get_y_array = [];
      let get_z_array = [];
      data_to_array.map((item) => {
        const getData = item[1].data;
        if (typeof getData.X !== "undefined") {
          get_x_array.push(getData.X);
        }

        if (typeof getData.Y !== "undefined") {
          get_y_array.push(getData.Y);
        }

        if (typeof getData.Z !== "undefined") {
          get_z_array.push(getData.Z);
        }
      });

      let max_x_value = Math.max(...get_x_array);
      let min_x_value = Math.min(...get_x_array);
      let max_y_value = Math.max(...get_y_array);
      let min_y_value = Math.min(...get_y_array);
      let max_z_value = Math.max(...get_z_array);
      let min_z_value = Math.min(...get_z_array);

      setGetNumbers((prevState) => ({
        ...prevState,
        max_x: max_x_value,
        min_x: min_x_value,
        max_y: max_y_value,
        min_y: min_y_value,
        max_z: max_z_value,
        min_z: min_z_value,
      }));
    }
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    setGetNumbers({
      max_x: "",
      min_x: "",
      max_y: "",
      min_y: "",
      max_z: "",
      min_z: "",
    });
  };

  const changeHandler = (e) => {
    let value = e.target.value;

    setGetNumbers((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };

  const storeInLocal = () => {
    localStorage.setItem("users_all_data", JSON.stringify(getNumbers));
    let get_local_users_data = JSON.parse(
      localStorage.getItem("users_all_data")
    );
    if (typeof get_local_users_data === null) {
      get_local_users_data = localStorage.setItem(
        "users_all_data",
        JSON.stringify([])
      );
    }
  };

  const cleanLocalStorage = () => {
    localStorage.removeItem("users_all_data");
    localStorage.clear();
    setGetUsersLocalInfo({});
  };

  const userFormSubmit = (e) => {
    e.preventDefault();
    storeInLocal();
    const local_data = JSON.parse(localStorage.getItem("users_all_data"));
    setGetUsersLocalInfo((prevState) => ({
      ...prevState,
      local_data,
    }));
  };

  // End Handle User Record Form

  const local_users_data = JSON.parse(localStorage.getItem("users_all_data"));

  const StepOne = () => {
    return (
      <>
        <h2>Step One</h2>
      </>
    );
  };
  const steps = [
    { name: "StepOne", component: <StepOne /> },
    { name: "StepTwo", component: <StepTwo /> },
  ];
  return (
    <div className="App">
      <UsersRecordForm
        handleOnDrop={handleOnDrop}
        handleOnError={handleOnError}
        handleOnRemoveFile={handleOnRemoveFile}
        userFormSubmit={userFormSubmit}
        changeHandler={changeHandler}
        getNumbers={getNumbers}
      />
      <UsersRecordList
        cleanLocalStorage={cleanLocalStorage}
        local_users_data={local_users_data}
      />
    </div>
  );
}

export default App;
