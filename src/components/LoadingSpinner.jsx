import React from "react";
import PropTypes from "prop-types";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ size, color }) => {
  const spinnerStyle = {
    width: size,
    height: size,
    borderColor: `${color} transparent ${color} transparent`,
  };

  return (
    <div className="loading-spinner" style={spinnerStyle}></div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  size: "60px",
  color: "#3498db",
};

export default LoadingSpinner;
