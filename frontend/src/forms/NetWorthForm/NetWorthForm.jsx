import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useFormContext } from 'react-hook-form';

import { CURRENCY_OPTIONS } from '@/constants';
import SelectInput from '@/components/SelectInput';
import NetWorthNumberInput from './components/NetWorthNumberInput';

const NetWorthForm = () => {
  const { response } = useFormContext();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SelectInput
          options={CURRENCY_OPTIONS}
          labelId="desired-currency-label-id"
          label="Desired currency"
          name="desiredCurrency"
          id="desiredCurrency"
          size="small"
        />
      </Grid>

      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">Net Worth</Typography>
          <Typography>{response?.total.desiredCurrency}</Typography>
          <Typography test-id="total">
            {response?.total.baseCurrency}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Assets</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Cash and Investments</Typography>
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.chequing"
          label="Chequing"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.savingsForTaxes"
          label="Savings for Taxes"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.rainyDayFund"
          label="Rainy Day Fund"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.savingsForFun"
          label="Savings for Fun"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.savingsForTravel"
          label="Savings for Travel"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.savingsForPersonalDevelopment"
          label="Savings for Personal Development"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.investment1"
          label="Investment 1"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.investment2"
          label="Investment 2"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.investment3"
          label="Investment 3"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.investment4"
          label="Investment 4"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.cashAndInvestments.investment5"
          label="Investment 5"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Long Term Assets</Typography>
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.longTermAssets.primaryHome"
          label="Primary Home"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="assets.longTermAssets.secondHome"
          label="Second Home"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput name="assets.longTermAssets.other" label="Other" />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6">Total Assets</Typography>
          <Typography>{response?.assets.total.desiredCurrency}</Typography>
          <Typography test-id="totalAssets">
            {response?.assets.total.baseCurrency}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Liabilities</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Short Term Liabilities</Typography>
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="liabilities.shortTermLiabilities.creditCard1"
          label="Credit Card 1"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="liabilities.shortTermLiabilities.creditCard2"
          label="Credit Card 2"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Long Term Debts</Typography>
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="liabilities.longTermDebt.mortage1"
          label="Mortage 1"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="liabilities.longTermDebt.mortage2"
          label="Mortage 2"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="liabilities.longTermDebt.lineOfCredit"
          label="Line of Credit"
        />
      </Grid>
      <Grid item xs={12}>
        <NetWorthNumberInput
          name="liabilities.longTermDebt.investmentLoan"
          label="Investment Loan"
        />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="6">Total Liabilities</Typography>
          <Typography>{response?.liabilities.total.desiredCurrency}</Typography>
          <Typography test-id="totalLiabilities">
            {response?.liabilities.total.baseCurrency}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NetWorthForm;
