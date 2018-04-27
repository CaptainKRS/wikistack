const express = require('express');
const wikiRouter = express.Router();
const { Page } = require("../models");
const { addPage } = require('../views');
const {index} = require('../models')

wikiRouter.get('/', (req, res, next)=>{
  // res.send(main());
});

wikiRouter.get('/add', (req, res, next)=>{
  res.send(addPage());
});

wikiRouter.post('/', async (req, res, next)=>{
  let newTitle = await new newSlug(req.body.title);
  let newContent = await req.body.content;
  console.log(newTitle);


  const page = new Page({
    title: newTitle,
    content: newContent,
    slug: ('/')
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

module.exports = wikiRouter;
