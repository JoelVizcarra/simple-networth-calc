import { getExchangeRate } from '../../services/exchangeApi.js';
import { calculateNetWorth } from './utils.js';
import SCHEMAS from './schemas.js';

async function routes(fastify, options) {
  fastify.post(
    '/operations/net-worth',
    {
      description: 'Get total net worth in two currencies',
      schema: SCHEMAS.POST_NETWORTH,
    },
    async (request, reply) => {
      try {
        const { data } = await getExchangeRate(
          request.body.baseCurrency,
          request.body.desiredCurrency
        );
        return calculateNetWorth(
          data.data[request.body.desiredCurrency],
          request.body.assets,
          request.body.liabilities
        );
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          reply.status(statusCode).send({ error: errorMessage });
        } else if (error.request) {
          reply.status(500).send({
            error: 'No response received from the exchage rate service',
          });
        } else {
          reply.status(500).send({
            error: 'An error occurred while getting the exchage rate service',
          });
        }
      }
    }
  );
}

export default routes;
