import jsonServer from 'json-server';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Configure os roteadores para cada recurso
import usuariosRouter from './usuarios-router.js';
//import contratosRouter from './contratos-router.js';
import metasRouter from './metas-router.js';

// Use os roteadores com caminhos específicos
server.use('/includejr', usuariosRouter);
// server.use('/includejr', contratosRouter);
 server.use('/includejr/m', metasRouter);

const port = 3001;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
