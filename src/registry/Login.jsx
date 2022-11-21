import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toastr from "toastr";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const result = await axios.post(
        "http://restapi.adequateshop.com/api/authaccount/login",
        payload
      );
      console.log(result);
      if (result.data.code === 1) return toastr.error(result.data.message);
      toastr.success(result.data.message);
      navigate("/home");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" style={{ margin: "10px" }}>
              <Form.Control
                type="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </Form.Group>

            <Form.Group id="password" style={{ margin: "10px" }}>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </Form.Group>

            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Login
            </Button>
          </Form>
          <hr />
        </Card.Body>
      </Card>

      <div className="p-4 text-center">
        <Link to="/register">Return to Register</Link>
      </div>
    </>
  );
}

export default Login;
