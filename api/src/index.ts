import { fastify } from 'fastify';
const PORT = process.env.PORT || 7000;

const server = fastify();

server.get('/', async (request, reply) => {
  return { message: `hello world from ${process.env.INSTANCE_NAME}` };
});

const start = async () => {
  try {
    const address = await server.listen(PORT, '0.0.0.0');
    console.log('Server started successfully on ', address);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
