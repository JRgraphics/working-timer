export const putFrontZeroes = (time: Date) => {
  return (
    ("0" + time.getHours()).slice(-2) +
    ":" +
    ("0" + time.getMinutes()).slice(-2)
  );
};
