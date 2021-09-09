const express = require("express")
const app = express()

app.get("/", function(req, res) {
  res.send("IT WORKED")
})
app.get("/new", function(req, res) {
  res.send("New also worked")
})

const port = process.env.port || 3000
app.listen(port, () => {
  console.log("started backend")
})
module.exports = app
