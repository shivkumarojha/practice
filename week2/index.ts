import 'dotenv/config'
import express from "express"

const app = express()

// parse json data
app.use(express.json())

// Parse form data
app.use(express.urlencoded({ extended: true }))

app.get("/api", (req, res) => {
    const header1 = req.headers['user-agent']
    res.json({
        message: "This is api endpoint",
        header1: header1,
        language: req.headers['accept-language'],
        ip: req.ip
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

// encode form data

app.listen(process.env.PORT, () => {
    console.log(`server is running at port ${process.env.PORT}`)
})