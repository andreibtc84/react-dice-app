export const RollLog = ({ rollLog }) => {
  return rollLog.map((roll) => <p key={roll.id}>{roll}</p>);
};
