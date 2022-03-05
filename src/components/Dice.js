import { useState } from "react";

export const Dice = ({ rollLog, setRollLog, side, max }) => {
  const [die, setDie] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setDie(getRandom(1, max));
          setRollLog([`${side}:${die}`, ...rollLog]);
        }}
      >
        Roll {side}
      </button>
    </div>
  );
};

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
