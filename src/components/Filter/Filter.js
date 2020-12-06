import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <label>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
