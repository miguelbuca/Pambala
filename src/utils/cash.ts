export const cash = () => {
  const convert = (amount: number) => {
    return `${amount},00 AOA`;
  };
  return {
    convert,
  };
};
