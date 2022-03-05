import { useState } from "react";

export const Dice = ({
  rollLog,
  setRollLog,
  side,
  max,
  setRollCount,
  rollsNumber,
}) => {
  const [die, setDie] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setDie(getRandom(1, max));
          setRollLog([{ id: rollsNumber, roll: `${side}:${die}` }, ...rollLog]);
          setRollCount(rollsNumber + 1);
        }}
      >
        Roll {side}
      </button>
    </div>
  );
};

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
