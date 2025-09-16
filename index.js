import express from 'express'

const app =  express()

const PORT = 3000

// Define a simple route

app.get('/', (req,res)=> {
    res.send("API Worked...")
})

app.listen(PORT, ()=> {
    console.log(`Server Running on port ${PORT}`)
})

