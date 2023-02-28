const express = require('express')
const morgan = require('morgan')
const path = require('path')  
const handlebars = require('express-handlebars')
const { dirname } = require('path')
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,'public')));
//http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/view'));
console.log(path.join(__dirname, 'resources/view'))

app.get('/', (req, res) => {
  res.render('home')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})