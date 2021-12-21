import { fastify } from 'fastify';
const PORT = process.env.PORT || 7000;

const server = fastify();

server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await server.listen(PORT);
    console.log('Server started successfully');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
