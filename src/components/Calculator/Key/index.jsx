import React from "react";
import PropTypes from "prop-types";
/* Styles */
import "./style.css";

const Key = ({ keyValue, keyType, keyAction }) => {
  return (
    <div className={`key-container ${keyType}`}>
      <div className="key-value">{keyValue}</div>
    </div>
  );
};

Key.propTypes = {
  keyValue: PropTypes.string.isRequired,
  keyType: PropTypes.string.isRequired,
  keyAction: PropTypes.func.isRequired
};

export default Key;
