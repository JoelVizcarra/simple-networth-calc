const dualCurrency = {
  type: 'object',
  properties: {
    baseCurrency: {
      type: 'number',
    },
    desiredCurrency: {
      type: 'number',
    },
  },
};

const currencyCode = {
  type: 'string',
  minLength: 3,
  maxLength: 3,
};

export default {
  POST_NETWORTH: {
    tags: ['Operations'],
    body: {
      description: 'assets and liabilities data',
      type: 'object',
      properties: {
        baseCurrency: currencyCode,
        desiredCurrency: currencyCode,
        assets: {
          type: 'object',
          properties: {
            cashAndInvestments: {
              type: 'object',
              properties: {
                chequing: { type: 'number' },
                savingsForTaxes: { type: 'number' },
                rainyDayFund: { type: 'number' },
                savingsForFun: { type: 'number' },
                savingsForTravel: { type: 'number' },
                savingsForPersonalDevelopment: { type: 'number' },
                investment1: { type: 'number' },
                investment2: { type: 'number' },
                investment3: { type: 'number' },
                investment4: { type: 'number' },
                investment5: { type: 'number' },
              },
            },
            longTermAssets: {
              type: 'object',
              properties: {
                primaryHome: { type: 'number' },
                secondHome: { type: 'number' },
                other: { type: 'number' },
              },
            },
          },
        },
        liabilities: {
          type: 'object',
          properties: {
            shortTermLiabilities: {
              type: 'object',
              properties: {
                creditCard1: { type: 'number' },
                creditCard2: { type: 'number' },
              },
            },
            longTermDebt: {
              type: 'object',
              properties: {
                mortage1: { type: 'number' },
                mortage2: { type: 'number' },
                lineOfCredit: { type: 'number' },
                investmentLoan: { type: 'number' },
              },
            },
          },
        },
      },
    },
    response: {
      200: {
        description: 'Succesful response',
        type: 'object',
        properties: {
          total: dualCurrency,
          baseCurrency: currencyCode,
          desiredCurrency: currencyCode,
          assets: {
            type: 'object',
            properties: {
              total: dualCurrency,
              cashAndInvestments: {
                type: 'object',
                properties: {
                  category: dualCurrency,
                  chequing: dualCurrency,
                  savingsForTaxes: dualCurrency,
                  rainyDayFund: dualCurrency,
                  savingsForFun: dualCurrency,
                  savingsForTravel: dualCurrency,
                  savingsForPersonalDevelopment: dualCurrency,
                  investment1: dualCurrency,
                  investment2: dualCurrency,
                  investment3: dualCurrency,
                  investment4: dualCurrency,
                  investment5: dualCurrency,
                },
              },
              longTermAssets: {
                type: 'object',
                properties: {
                  category: dualCurrency,
                  primaryHome: dualCurrency,
                  secondHome: dualCurrency,
                  other: dualCurrency,
                },
              },
            },
          },
          liabilities: {
            type: 'object',
            properties: {
              total: dualCurrency,
              shortTermLiabilities: {
                type: 'object',
                properties: {
                  category: dualCurrency,
                  creditCard1: dualCurrency,
                  creditCard2: dualCurrency,
                },
              },
              longTermDebt: {
                type: 'object',
                properties: {
                  category: dualCurrency,
                  mortage1: dualCurrency,
                  mortage2: dualCurrency,
                  lineOfCredit: dualCurrency,
                  investmentLoan: dualCurrency,
                },
              },
            },
          },
        },
      },
    },
  },
};
