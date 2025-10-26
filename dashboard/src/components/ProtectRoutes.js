import React from "react";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to your FRONTEND login page (full URL)
    window.location.href = "http://localhost:3000/login"; 
    return null;
  }

  // If logged in, show the protected dashboard page
  return children;
};

export default ProtectedRoute;
