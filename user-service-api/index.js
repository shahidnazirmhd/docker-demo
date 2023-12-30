const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
    name: "Mohamed",
    email: "mohamed@email.com"
  }, {
    name: "ahmed",
    email: "ahmed@email.com"
  }, {
    name: "Ali",
    email: "ali@email.com"
  }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
