const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/list', (req, res) => {
  res.json([
      { id: 'test1', name: 't1' },
      { id: 'test2', name: 't2' },
      { id: 'test3', name: 't3' },
      { id: 'test4', name: 't4' },
  ]);
});

app.get('/api/item', (req, res) => {
  res.json({
      id: 'test1',
      name: 'tt1'
  });
});

app.listen(8080, (err) => {
  if (err) {
      console.log('error', err);
  }

  console.log('8080 port listening');
});