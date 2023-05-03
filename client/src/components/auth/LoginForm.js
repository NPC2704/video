import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";
const LoginForm = () => {
  // // let navigate = useNavigate();
  // // Context
  // const { loginUser } = useContext(AuthContext);

  // // Local state
  // const [loginForm, setLoginForm] = useState({
  //   username: ``,
  //   password: ``,
  // });
  // const [alert, setAlert] = useState(null);
  // const { username, password } = loginForm; // buoc nay la de lay data 2 chieu
  // const onChangeLoginForm = (event) =>
  //   setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  // // [event.target.name] co nghia la lay the duoc focus VD: event.target.name  = username hay password, lam nhu vay de neu co nhieu o can nhap thi ngan gon

  // const login = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const loginData = await loginUser(loginForm);
  //     if (!loginData.success) {
  //       setAlert({ type: "danger", message: loginData.message });
  //       setTimeout(() => setAlert(null), 5000);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // Context
  const { loginUser } = useContext(AuthContext);

  // Local state
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (!loginData.success) {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <p>WELCOME LOGIN</p>
      <Form className="my-4" onSubmit={login}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
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
            onChange={onChangeLoginForm}
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
            background: "#aecec8",
          }}
        >
          Login
        </Button>
        <AlertMessage info={alert} />
      </Form>
      <p
        style={{
          marginTop: "15px",
        }}
      >
        Don't have an account?
        <Link to="/register">
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
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
