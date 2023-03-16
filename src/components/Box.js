import React from "react";
import "./Box.css";

const Box = ({ value, onClick }) => {
  const style = value === "x" ? "box x" : "box o";
  return (
    <>
      <button onClick={onClick} className={style}>
        {value}
      </button>
    </>
  );
};

export default Box;
