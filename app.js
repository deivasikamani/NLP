const express = require('express');
const app = express();

const data = [
  { title: "Apple", description: "Fruit" },
  { title: "Banana", description: "Yellow fruit" },
  { title: "Carrot", description: "Vegetable" }
];

app.get('/', (req, res) => {
  res.send(`<form action="/search" method="get">
    <input name="q" placeholder="Search...">
    <button type="submit">Search</button>
  </form>`);
});

app.get('/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const results = data.filter(
    item => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
  );
  res.send(results.length ? results.map(r => `<div>${r.title}: ${r.description}</div>`).join('') : "No results found.");
});

app.listen(3000, () => console.log("Search engine running on http://localhost:3000"));