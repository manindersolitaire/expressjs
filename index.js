import express from 'express'
import { searchController, userLogin, usernameController } from './controllers.js'
import router from './routes.js'
import { connectDB } from './config/db.js'
import Person from './models/Person.js'
// import multer from 'multer'
// import storage from './config/multer.js'
// import mongoose from 'mongoose'


const app =  express()
// const upload =  multer(
//     {
//     storage : storage,
//     limits : {
//         fileSize : 1024000
//     }

// })
const PORT = 3000

// Database Connect
await connectDB()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
// app.use(upload.single('image'))
// app.use(express.static('public'))
// app.use('/images', express.static('images'))

// Set EJS

// app.set('view engine', 'ejs')


// app.use((req,res,next)=>{
//     console.log('Start')

//     res.on('finish', ()=>{
//         console.log('End')
//     })
//     next()
// })
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

// app.post('/create', express.json() , (req,res)=>{
//     const {name, email} = req.body

//     res.json({
//         message : `User ${name} and Email ${email}`
//     })
// })

// app.post('/form', (req,res)=>{
//     console.log(req.body)
//     console.log(req.file)
//     res.send('Form Submitted..')
// })


// app.put('/create/:id', express.json() ,(req,res) =>{
//     const userId =  req.params.id
//     const {name,email} = req.body

//     res.json({
//         message : `User ${userId} updated to ${name}, ${email}`
//     })

// })

// app.delete('/delete/:id', (req,res)=>{
//     const userId = req.params.id
//     res.json({
//         message : `User with ID ${userId} deleted Successfully`
//     })
// } )

// Create person
app.post('/person', async (req,res)=>{
    console.log(req.body)

    const {email , name , age} = req.body
    const newPerson = new Person({
        email,
        name,
        age
    })
    await newPerson.save()
    res.send('Person Added')
})
// Update Record
app.put('/person', async (req,res)=>{
    const {id} = req.body

    const personData =  await Person.findByIdAndUpdate(id,{
        age : '25'
    })
   
    personData.save()
    console.log(personData)
   
    res.send('Person Added')
})


// Delete 

app.delete('/person/:id', async (req,res)=>{
    const {id} = req.params
    await Person.findByIdAndDelete(id)
    res.send('Person Deleted')
})
app.listen(PORT, ()=> {
    console.log(`Server Running on port ${PORT}`)
})

