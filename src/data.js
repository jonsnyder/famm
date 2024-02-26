module.exports = ({ name, variables }) => {
  const data = {
    ...variables,
    digitalData: {
      page: name
    }
  };
  if (name === "product") {
    data.digitalData.product = variables.products[0];
  }
  data.digitalData.products = variables.products;
  return data;
};
