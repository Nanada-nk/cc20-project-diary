/** @format */

import React from "react";

function InputForm({ textInput, id,handleChange,value,error }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{textInput}</label>
      <input
      value={value}
        onChange={handleChange}
        className="px-4 py-2 bg-gray-200 outline-0 rounded-md"
        placeholder="Enter your Topic"
        type="text"
        id={id}
      />
      {error && <small className="text-red-500 text-xs">{error}</small>}
    </div>
  );
}

export default InputForm;
