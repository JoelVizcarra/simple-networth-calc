const getDualCurrency = (amount, rate) => ({
  // TODO how should I handle decimals? how much precision do we require?
  //      for now they will be truncated to 2 decimals.
  baseCurrency: amount,
  desiredCurrency: Math.round((amount * rate + Number.EPSILON) * 100) / 100,
});

const calculateNestedTotalsAndRates = (data, exchangeRate) => {
  // TODO same decimal issue
  let newData = Object.assign(data);
  let total = 0;
  for (let key in data) {
    if (typeof data[key] === 'object') {
      for (let subKey in data[key]) {
        if (typeof data[key][subKey] === 'number') {
          total += data[key][subKey];
          newData[key][subKey] = getDualCurrency(
            data[key][subKey],
            exchangeRate
          );
        }
      }
    }
  }
  newData.total = getDualCurrency(total, exchangeRate);
  return newData;
};

export const calculateNetWorth = (exchangeRate, assets, liabilities) => {
  const totalAssets = calculateNestedTotalsAndRates(assets, exchangeRate);
  const totalLiabilities = calculateNestedTotalsAndRates(
    liabilities,
    exchangeRate
  );
  const netWorth =
    totalAssets.total.baseCurrency - totalLiabilities.total.baseCurrency;
  const result = {
    assets: totalAssets,
    liabilities: totalLiabilities,
    total: getDualCurrency(netWorth, exchangeRate),
  };
  return result;
};
