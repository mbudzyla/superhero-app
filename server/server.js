const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/mock-bazy.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.get('/slugs', (req, res) => {
  const results = router.db
    .get('heroes')
    .__wrapped__.heroes.map(({ slug }) => slug);
  res.jsonp(results);
});

server.use(router);
server.listen(3001, () => {
  console.info('JSON Server is running');
});
