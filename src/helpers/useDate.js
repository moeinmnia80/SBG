export const useDate = () => {
  const nowDate = new Date();
  return `${nowDate.toISOString()}`;
};
