import React from "react";
import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
  return (
    <div className="text-center py-3">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingSpinner;
