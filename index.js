const express = require('express')
const cors = require('cors')
const app = express()
const chef = require('./data/chef.json')
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
  res.send("hello world")
})

app.get('/chef', (req, res) => {
  res.send(chef)
})

app.get('/chef/:id', (req,res) => {
  const id = parseInt(req.params.id);
  const chefId = chef.filter(data => data.id === id)
  res.send(chefId)
})

app.listen(port, () => {
  console.log(`post is ${port}`)
})