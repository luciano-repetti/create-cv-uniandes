import React from "react";

export default function Addition({ text, onClick }) {
  return (
    <div className="addition" onClick={onClick}>
      <img src="./adicion-icono.png" alt="" />
      <p>{text}</p>
    </div>
  );
}
