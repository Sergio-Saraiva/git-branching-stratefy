import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.send('Hello World para o teste de CI'));

routes.get('/rota1', (req, res) => res.send('Hello World para o teste de CI'));
routes.get('/rota2', (req, res) => res.send('Hello World para o teste de CI'));

export default routes;
