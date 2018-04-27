const express = require('express');
const wikiRouter = express.Router();

wikiRouter.get('/', (req, res, next)=>{
  res.send('');
});

wikiRouter.post('/', (req, res, next)=>{
  res.send('');
});

wikiRouter.get('/add', (req, res, next)=>{
  res.send('');
});

module.exports = wikiRouter;
