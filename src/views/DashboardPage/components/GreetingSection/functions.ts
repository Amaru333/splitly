export const getGreetings = (): string => {
  let d = new Date();
  let time = d.getHours();
  if (time < 12) return "Morning";
  if (time >= 12 && time < 16) return "Afternoon";
  return "Evening";
};
