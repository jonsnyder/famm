module.exports = ({ name, variables }) => {
  return {
    ...variables,
    digitalData: {
      page: name,
      products: variables.products
    }
  }
};
