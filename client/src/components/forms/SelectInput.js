import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SelectInput = ({
  className,
  label,
  selectId,
  onChange,
  options,
  divClass,
  name,
  help,
  error,
}) => {
  let smallText = null;

  if (help) {
    smallText = <small className="form-text text-muted">{help}</small>;
  }

  return (
    <div className={classnames(divClass ? divClass : "")}>
      <label htmlFor={selectId}>{label}</label>
      <select
        className={className}
        onChange={onChange}
        id={selectId}
        name={name}
      >
        {options.map((opt, i) => {
          return (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
      {smallText}
      {error ? (
        <div
          className="alert small-alert show shadow alert-danger"
          role="alert"
        >
          <small>{error}</small>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  selectId: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectInput.defaultProps = {
  type: "text",
};

export default SelectInput;
