export const toIndianSystem = (number: number): string => {
  const num = number?.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });

  return num;
};
