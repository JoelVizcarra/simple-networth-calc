import Fastify from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

import operationRoutes from './routes/operation/routes.js';
import { swagggerOptions, swaggerUiOptions } from './swagger/index.js';

async function buildServer() {
  const server = Fastify({
    logger: true,
  });

  await server.register(cors, {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  });
  server.register(swagger, swagggerOptions);
  server.register(swaggerUi, swaggerUiOptions);

  server.get('/healthcheck', async () => ({ status: 'OK' }));
  server.register(operationRoutes);
  await server.ready();
  server.swagger();
  return server;
}

export default buildServer;
