import mongoose from 'mongoose'

const personSchema = new mongoose.Schema({
    name : { type: String , require : true},
    age : { type: Number , require : true},
    email :  { type: String , require : true , unique: true},
})

const Person = mongoose.model('Person', personSchema)

export default Person