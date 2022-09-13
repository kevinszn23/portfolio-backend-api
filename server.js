// import dependencies
const express = require("express")
const cors = require("cors")

// import json files
const projects = require("./projects.json")
const about = require("./about.json")

// creating app object
const app = express()

// PORT
const PORT = process.env.PORT || 4000

// middleware
app.use(cors())

// home route for testing app
app.get("/", (req, res) => {
    res.send("Hello World")
})

// route for retrieving projects
app.get("/projects", (req, res) => {
    res.json(projects)
})

// route for retrieving about info
app.get("/about", (req, res) => {
    res.json(about)
})

// listener
app.listen(PORT, () => console.log(`Listening on ${PORT}`))