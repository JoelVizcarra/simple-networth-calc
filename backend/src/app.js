import buildServer from './server.js';

const { HOST = 'localhost', PORT = '8000' } = process.env;

const start = async () => {
  try {
    const server = await buildServer();
    await server.listen({ host: HOST, port: PORT });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
