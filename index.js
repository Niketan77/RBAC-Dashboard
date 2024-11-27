import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary"; // Include if using ErrorBoundary

ReactDOM.render(
  // Wrap App with ErrorBoundary if implemented
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);
