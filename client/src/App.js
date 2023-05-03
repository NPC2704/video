import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import PostContextProvider from "./contexts/PostContext";
import AboutRoute from "../src/components/routing/AboutRoute";
function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Auth authRoutes="login" />} />
            <Route
              exact
              path="/register"
              element={<Auth authRoutes="register" />}
            />

            <Route exact path="/dashboard" element={<ProtectedRoute />} />
            <Route exact path="/about" element={<AboutRoute />} />
          </Routes>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
