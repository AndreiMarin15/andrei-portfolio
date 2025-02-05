import React from "react";
import PropTypes from "prop-types";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ size, color, thickness, speed }) => {
  const spinnerStyle = {
    width: size,
    height: size,
    borderColor: `${color} transparent ${color} transparent`,
    borderWidth: thickness,
    animationDuration: `${speed}s`,
  };

  return <div className="loading-spinner" style={spinnerStyle}></div>;
};

LoadingSpinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.string,
  speed: PropTypes.number,
};

LoadingSpinner.defaultProps = {
  size: "60px",
  color: "#3498db",
  thickness: "6px",
  speed: 1,
};

export default LoadingSpinner;
