export const filterData = async (payload, category, value) => {
  const filteredData = await payload.filter(e => e[`${category}`] === value);
  return filteredData;
};
