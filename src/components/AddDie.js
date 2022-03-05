import React from "react";
import { useState } from "react";

export const AddDie = () => {
  const [newDie, setNewDie] = useState("");
  const [sidesNumber, setSidesNumber] = useState(0);
  return (
    <div>
      {" "}
      <input
        type="number"
        onChange={(event) => {
          setSidesNumber(event.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log("added new die", sidesNumber);
        }}
      >
        Add die
      </button>
    </div>
  );
};
