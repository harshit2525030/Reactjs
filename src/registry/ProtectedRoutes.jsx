import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Protected route implemented using local storage data...
function ProtectedRoutes(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoutes;
