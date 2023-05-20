import axios from 'axios';

export const getExchangeRate = (baseCurrency, desiredCurrency) => {
  const apiKey = process.env.EXCHANGE_API_KEY;
  const apiUrl = process.env.EXCHANGE_API_URL;

  return axios.get(`${apiUrl}`, {
    params: {
      apikey: apiKey,
      base_currency: baseCurrency,
      currencies: desiredCurrency,
    },
  });
};
