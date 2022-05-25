import React, { useState } from "react";
import "./App.css";
import EffectTutorial from "./components/EffectTutorial";
import Form from "./components/Form/Form";
import ReducerTutorial from "./components/ReducerTutorial";
import StateTutorial from "./components/StateTutorial";
import ContextTutotial from "./components/UseContext/ContextTutotial";
import ImperativeHandle from "./components/UseImperativeHandle/ImperativeHandle";
import UseLayoutEffect from "./components/UseLayoutEffect";
import MemoTutorial from "./components/UseMemo/MemoTutorial";
import UseRefTutorial from "./components/UseRefTutorial";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special characters!",
      label: "Username",
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email address.",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and it should include at least 1 letter, 1 number and 1 special character. ",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm  Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm  Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="App">
      {/* <StateTutorial /> */}
      {/* <ReducerTutorial /> */}
      {/* <EffectTutorial /> */}
      {/* <UseRefTutorial /> */}
      {/* <UseLayoutEffect /> */}
      {/* <ImperativeHandle /> */}
      {/* <ContextTutotial /> */}
      {/* <MemoTutorial /> */}
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <Form
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
