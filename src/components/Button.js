import React from "react";

function Button({ name }) {
  return (
    <div>
      <button className="px-5 py-2 m-5 bg-gray-100 rounded-lg">{name}</button>
    </div>
  );
}

export default Button;
