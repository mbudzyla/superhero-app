const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(__dirname + '/mock-bazy.json');
const middlewares = jsonServer.defaults();

const getRandomSet = amount => {
  const numbers = Array(amount)
    .fill()
    .map((_, index) => index + 1);
  numbers.sort(() => Math.random() - 0.5);
  return numbers.slice(0, 3);
};

server.use(middlewares);

server.get('/slugs', (req, res) => {
  const results = router.db
    .get('heroes')
    .value()
    .map(({ slug }) => slug);

  res.jsonp(results);
});

server.get('/get_randoms', (req, res) => {
  const results = router.db.get('heroes').value();
  const randoms = getRandomSet(results.length);

  res.jsonp(randoms.map(idx => results[idx]));
});

server.use(router);

server.listen(3001, () => {
  console.info('JSON Server is running');
});
