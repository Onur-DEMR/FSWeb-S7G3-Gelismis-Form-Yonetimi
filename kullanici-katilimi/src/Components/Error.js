import React from "react";

const Error = (props) => {
  const { errors } = props;
  let errorArr = Object.values(errors);
  return errorArr.map((item) => <p>{item}</p>);
};

export default Error;
