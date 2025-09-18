import express from 'express'
import { searchController, userLogin, usernameController } from './controllers.js'
import router from './routes.js'

const app =  express()

const PORT = 3000

// Define a simple route

app.get('/', (req,res)=> {
    res.send("API Worked...")
})

app.get('/about', (req,res)=>{
    res.send('This is a About Page')
})

app.get('/contact', (req,res)=>{
    res.send('This is a Contact Page')
})

// app.get('/user/:username', usernameController)

app.get('/search', searchController)

app.use('/user', router)
// app.get('/user/signup', userSignup)

app.listen(PORT, ()=> {
    console.log(`Server Running on port ${PORT}`)
})

