import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToastr } from "../toastr";
import FormInput from "./FormInput";
import "./Login.css";
import axios from "../../api/axios";

const LOGIN_URL = "authaccount/login";

export const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const toastr = useToastr();

  // Form validations...
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Enter your email...",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern:
        "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(.[-a-zA-Z0-9_]+)*.([cC][oO][mM]))(:[0-9]{1,5})?",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter your password...",
      errorMessage: "Password should be numeric 6-12 characters",
      label: "Password",
      pattern: "^[0-9]{6,12}$",
      required: true,
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };
      // const result = await axios.post(
      //   "http://restapi.adequateshop.com/api/authaccount/login",
      //   payload
      // );
      const result = await axios.post(LOGIN_URL, JSON.stringify(payload), {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      });
      console.warn(result?.data.message);
      console.log(result?.data.data);
      if (result.data.code === 1) return toastr.error(result.data.message);
      // Set local storage...
      localStorage.setItem("user", JSON.stringify(result.data.data));
      toastr.success(result.data.message);
      navigate("/home");
    } catch (err) {
      console.log("Failed to sign in");
    }
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // console.log(values);

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button type="submit">Login</button>

        <div style={{ paddingBottom: "30px" }}>
          <Link to="/register">Return to Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
