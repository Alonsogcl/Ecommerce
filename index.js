const express = require("express")
const morgan = require("morgan")
const { port } = require("./config")
const { connection } = require("./config/db")

const app = express()

connection()

//Utilizando middleware
app.use(morgan("dev"))

app.get("/", (req, res) => {
  return res.json({
    name: "Ecommerce"
  })
})

app.listen(port, () => {
  console.log("Listening on: http://localhost:" + port)
})