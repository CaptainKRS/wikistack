const express = require('express');
const morgan = require('morgan');
const wikiRouter = require('./routes/wiki.js');
const userRouter = require('./routes/user.js');
const app = express();
const bodyParser = require('body-parser');
const { db } = require('./models');

const PORT  = 3000;

db.authenticate().
then(() => {
  console.log('connected to the database');
});

app.get('/', (req,res,next) => {
  res.redirect('/wiki');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use('/wiki', wikiRouter);
app.use('./user', userRouter);

const init = async () => {
  await db.sync({force: true});
  // await db.Page.sync();
  app.listen(PORT, () =>{
    console.log(`The somber tones of port ${PORT}`);
  });
}

init();
