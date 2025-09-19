import express from 'express'
import { searchController, userLogin, usernameController } from './controllers.js'
import router from './routes.js'

const app =  express()

const PORT = 3000

// Set EJS

app.set('view engine', 'ejs')


app.use((req,res,next)=>{
    console.log('Start')

    res.on('finish', ()=>{
        console.log('End')
    })
    next()
})
// Define a simple route

// app.get('/', (req,res)=> {
//     console.log('Middle')
//     res.send("API Worked...")
// })

app.get('/',(req,res)=>{
    const userName = 'John Doe'
    res.render('index', {userName})
})
app.get('/welcome', (req,res)=> {
    res.send("Welcome to express app")
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

// POST

app.post('/create', express.json() , (req,res)=>{
    const {name, email} = req.body

    res.json({
        message : `User ${name} and Email ${email}`
    })
})


app.put('/create/:id', express.json() ,(req,res) =>{
    const userId =  req.params.id
    const {name,email} = req.body

    res.json({
        message : `User ${userId} updated to ${name}, ${email}`
    })

})

app.delete('/delete/:id', (req,res)=>{
    const userId = req.params.id
    res.json({
        message : `User with ID ${userId} deleted Successfully`
    })
} )

app.listen(PORT, ()=> {
    console.log(`Server Running on port ${PORT}`)
})

