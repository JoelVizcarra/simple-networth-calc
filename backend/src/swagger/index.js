export const swagggerOptions = {
  openapi: {
    info: {
      title: 'Net Worth Calculator',
      description: 'Net Worth Calculator App',
      version: '0.1.0',
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
  },
  hideUntagged: true,
  exposeRoute: true,
};

export const swaggerUiOptions = {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => {
    return swaggerObject;
  },
  transformSpecificationClone: true,
};
