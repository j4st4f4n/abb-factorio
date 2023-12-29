export const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
export const randomNumberFromInterval = (min: number, max: number) =>
  Math.random() * (max - min + 1) + min;
export const randomString = () => Math.random().toString(36).substring(5);
