import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/Spinner";
import About from "../../views/About";
import NavbarMenu from "../layout/NavbarMenu";
const ProtectedRoute = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading)
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );

  return isAuthenticated ? (
    <>
      {" "}
      <NavbarMenu />
      <About />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
