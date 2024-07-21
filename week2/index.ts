import express from "express"
const app = express()

app.get("/api", (req, res) => {
    res.json({
        message: "This is api endpoint"
    })
})
app.get("/health", (req, res) => {
    // res.status(200)
    res.send("Hello Health is oK")
})

app.listen(3000, () => {
    console.log("server is running at port ")
})