import { z } from 'zod';

export const formSchema = z.object({
  baseCurrency: z
    .string()
    .length(3, { message: 'Currency ISO code must be valid' }),
  desiredCurrency: z
    .string()
    .length(3, { message: 'Currency ISO code must be valid' }),

  assets: z.object({
    cashAndInvestments: z.object({
      chequing: z.number().min(0, 'Must be 0 or more'),
      savingsForTaxes: z.number().min(0, 'Must be 0 or more'),
      rainyDayFund: z.number().min(0, 'Must be 0 or more'),
      savingsForFun: z.number().min(0, 'Must be 0 or more'),
      savingsForTravel: z.number().min(0, 'Must be 0 or more'),
      savingsForPersonalDevelopment: z.number().min(0, 'Must be 0 or more'),
      investment1: z.number().min(0, 'Must be 0 or more'),
      investment2: z.number().min(0, 'Must be 0 or more'),
      investment3: z.number().min(0, 'Must be 0 or more'),
      investment4: z.number().min(0, 'Must be 0 or more'),
      investment5: z.number().min(0, 'Must be 0 or more'),
    }),
    longTermAssets: z.object({
      primaryHome: z.number().min(0, 'Must be 0 or more'),
      secondHome: z.number().min(0, 'Must be 0 or more'),
      other: z.number().min(0, 'Must be 0 or more'),
    }),
  }),
  liabilities: z.object({
    shortTermLiabilities: z.object({
      creditCard1: z.number().min(0, 'Must be 0 or more'),
      creditCard2: z.number().min(0, 'Must be 0 or more'),
    }),
    longTermDebt: z.object({
      mortage1: z.number().min(0, 'Must be 0 or more'),
      mortage2: z.number().min(0, 'Must be 0 or more'),
      lineOfCredit: z.number().min(0, 'Must be 0 or more'),
      investmentLoan: z.number().min(0, 'Must be 0 or more'),
    }),
  }),
});

export const INITIAL_VALUE = {
  baseCurrency: 'USD',
  desiredCurrency: 'CAD',
  assets: {
    cashAndInvestments: {
      chequing: 0,
      savingsForTaxes: 0,
      rainyDayFund: 0,
      savingsForFun: 0,
      savingsForTravel: 0,
      savingsForPersonalDevelopment: 0,
      investment1: 0,
      investment2: 0,
      investment3: 0,
      investment4: 0,
      investment5: 0,
    },
    longTermAssets: {
      primaryHome: 0,
      secondHome: 0,
      other: 0,
    },
  },
  liabilities: {
    shortTermLiabilities: {
      creditCard1: 0,
      creditCard2: 0,
    },
    longTermDebt: {
      mortage1: 0,
      mortage2: 0,
      lineOfCredit: 0,
      investmentLoan: 0,
    },
  },
};
