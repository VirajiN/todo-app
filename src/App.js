import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import TodoContainer from "./features/Todo/containers/TodoContainer";
import LoginContainer from "./features/Login/containers/LoginContainer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <TodoContainer />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </Router>
  );
};

function RequireAuth({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
export default App;
