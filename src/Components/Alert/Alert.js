import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <>
      {props.alert && (
        <div
          class={`alert alert-${props.alert.type} alert-dismissible rounded-0 fade show`}
          role="alert"
        >
          <i
            class={`${props.alert.icon} me-2`}
            style={{ fontSize: "18px" }}
          ></i>
          <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
};

export default Alert;
