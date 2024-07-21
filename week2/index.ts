import express from "express"
const app = express()
app.use(express.json())
app.get("/api", (req, res) => {
    res.json({
        message: "This is api endpoint"
    })
})
app.get("/health", (req, res) => {
    // res.status(200)
    res.send("Hello Health is oK")
})

//handling a post request
const textContent: string[] = []
app.post("/submit-data", (req, res) => {
    const data = req.body.textContent
    if (!textContent) {
        return res.status(304).json({
            message: "Text content is not provided"
        })
    }
    textContent.push(data)
    res.status(200).json({
        message: "Thank You for the text content",
        allTextContent: textContent
    })
})
app.listen(3000, () => {
    console.log("server is running at port ")
})