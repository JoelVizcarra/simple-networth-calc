import tap from 'tap';
import axios from 'axios';
import sinon from 'sinon';
import buildServer from '../../../server.js';

tap.test('POST /operations/net-worth', async (t) => {
  const request = {
    baseCurrency: 'USD',
    desiredCurrency: 'EUR',
    assets: {
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
    },
    liabilities: {
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

  t.test('Calculates and send the correct result', async (t) => {
    const axiosMock = sinon.stub(axios, 'get').resolves({
      data: {
        data: {
          EUR: 2,
        },
      },
    });
    const fastify = await buildServer();

    t.teardown(() => {
      fastify.close();
      axios.get.restore();
    });

    const response = await fastify.inject({
      method: 'POST',
      url: '/operations/net-worth',
      payload: request,
    });
    const result = response.json();

    t.ok(axiosMock.calledOnceWith(), 'axios.get should be called once');
    t.same(result, expectedResult);
    t.end();
  });

  tap.test(
    'return error message when exchange API call unsuccesuful code status',
    async (t) => {
      const axiosMock = sinon.stub(axios, 'get').rejects({
        response: { status: 401, data: { message: 'Invalid credentials' } },
      });
      const fastify = await buildServer();

      t.teardown(() => {
        fastify.close();
        axios.get.restore();
      });

      const response = await fastify.inject({
        method: 'POST',
        url: '/operations/net-worth',
        payload: request,
      });
      const data = response.json();

      t.ok(axiosMock.calledOnceWith(), 'axios.get should be called once');
      t.equal(response.statusCode, 401);
      t.same(data, { error: 'Invalid credentials' });
    }
  );

  tap.test(
    'return error message when exchange API call no response',
    async (t) => {
      const axiosMock = sinon.stub(axios, 'get').rejects({
        request: {},
      });
      const fastify = await buildServer();

      t.teardown(() => {
        fastify.close();
        axios.get.restore();
      });

      const response = await fastify.inject({
        method: 'POST',
        url: '/operations/net-worth',
        payload: request,
      });
      const data = response.json();

      t.ok(axiosMock.calledOnceWith(), 'axios.get should be called once');
      t.equal(response.statusCode, 500);
      t.same(data, {
        error: 'No response received from the exchage rate service',
      });
    }
  );

  tap.test(
    'return error message when exchange API call setup fails',
    async (t) => {
      const axiosMock = sinon.stub(axios, 'get').rejects();
      const fastify = await buildServer();

      t.teardown(() => {
        fastify.close();
        axios.get.restore();
      });

      const response = await fastify.inject({
        method: 'POST',
        url: '/operations/net-worth',
        payload: request,
      });
      const data = response.json();

      t.ok(axiosMock.calledOnceWith(), 'axios.get should be called once');
      t.equal(response.statusCode, 500);
      t.same(data, {
        error: 'An error occurred while getting the exchage rate service',
      });
    }
  );
});
