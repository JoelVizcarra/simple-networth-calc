import { test } from 'tap';
import { calculateNetWorth } from '../utils.js';

test('Net worth calculation calculateNetWorthFn - utils.js', async (t) => {
  const assets = {
    cashAndInvestments: {
      chequing: 10,
      savingsForTaxes: 10,
      rainyDayFund: 10,
      savingsForFun: 10,
      savingsForTravel: 10,
      savingsForPersonalDevelopment: 10,
      investment1: 10,
      investment2: 10,
      investment3: 10,
      investment4: 10,
      investment5: 10,
    },
    longTermAssets: {
      primaryHome: 10,
      secondHome: 10,
      other: 10,
    },
  };
  const liabilities = {
    shortTermLiabilities: {
      creditCard1: 50,
      creditCard2: 50,
    },
    longTermDebt: {
      mortage1: 50,
      mortage2: 50,
      lineOfCredit: 50,
      investmentLoan: 50,
    },
  };
  const expectedResult = {
    total: {
      baseCurrency: -160,
      desiredCurrency: -320,
    },
    assets: {
      total: {
        baseCurrency: 140,
        desiredCurrency: 280,
      },
      cashAndInvestments: {
        chequing: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        savingsForTaxes: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        rainyDayFund: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        savingsForFun: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        savingsForTravel: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        savingsForPersonalDevelopment: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        investment1: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        investment2: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        investment3: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        investment4: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        investment5: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
      },
      longTermAssets: {
        primaryHome: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        secondHome: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
        other: {
          baseCurrency: 10,
          desiredCurrency: 20,
        },
      },
    },
    liabilities: {
      total: {
        baseCurrency: 300,
        desiredCurrency: 600,
      },
      shortTermLiabilities: {
        creditCard1: {
          baseCurrency: 50,
          desiredCurrency: 100,
        },
        creditCard2: {
          baseCurrency: 50,
          desiredCurrency: 100,
        },
      },
      longTermDebt: {
        mortage1: {
          baseCurrency: 50,
          desiredCurrency: 100,
        },
        mortage2: {
          baseCurrency: 50,
          desiredCurrency: 100,
        },
        lineOfCredit: {
          baseCurrency: 50,
          desiredCurrency: 100,
        },
        investmentLoan: {
          baseCurrency: 50,
          desiredCurrency: 100,
        },
      },
    },
  };
  const exchangeRate = 2;
  const result = calculateNetWorth(exchangeRate, assets, liabilities);
  t.same(result, expectedResult);
});
