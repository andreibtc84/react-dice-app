export const RollLog = ({ rollLog }) => {
  return rollLog.map((roll, i) => <p key={i}>{roll.roll}</p>);
};
