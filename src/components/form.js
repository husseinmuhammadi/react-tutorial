import React from "react";

const Form = ({ onSubmit, children }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

// Form.propTypes = {
//   onSubmit: PropTypes.func,
//   children: PropTypes.node.isRequired
// };

Form.defaultProps = {
  onSubmit: () => { }
};

export default Form;