import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";
const RegisterForm = () => {
  // Context
  const { registerUser } = useContext(AuthContext);

  // Local state
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password, confirmPassword } = registerForm;

  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const register = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Passwords do not match" });
      setTimeout(() => setAlert(null), 5000);
      return;
    }

    try {
      const registerData = await registerUser(registerForm);
      if (!registerData.success) {
        setAlert({ type: "danger", message: registerData.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <>
        <p>WELCOME REGISTER</p>
        <Form className="my-4" onSubmit={register}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              required
              value={username}
              onChange={onChangeRegisterForm}
              style={{
                marginBottom: "15px",
                borderRadius: "20px",
                height: "45px",
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={onChangeRegisterForm}
              style={{
                marginBottom: "15px",
                borderRadius: "20px",
                height: "45px",
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Comfirm Password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={onChangeRegisterForm}
              style={{
                marginBottom: "15px",
                borderRadius: "20px",
                height: "45px",
              }}
            />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            style={{
              width: "300px",
              marginTop: "15px",
              marginBottom: "15px",
              borderRadius: "20px",
              height: "45px",
              background: "#e1aba8",
            }}
          >
            Register
          </Button>
          <AlertMessage info={alert} />
        </Form>
        <p
          style={{
            marginTop: "15px",
          }}
        >
          Already have account?
          <Link to="/login">
            <Button
              variant="info"
              size="sm"
              className="ml-2"
              style={{
                marginLeft: "15px",
                borderRadius: "10px",
                background: "transparent",
                color: "white",
              }}
            >
              Login
            </Button>
          </Link>
        </p>
      </>
    </>
  );
};

export default RegisterForm;
