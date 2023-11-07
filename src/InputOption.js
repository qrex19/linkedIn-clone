import React from "react";
import "./InputOption.css";

function InputOption({ title, Icon, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4 style={{ color: color }}>{title}</h4>
    </div>
  );
}

export default InputOption;
