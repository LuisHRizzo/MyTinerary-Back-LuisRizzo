import { Schema, model, Types } from "mongoose";

const citiesSchema = Schema({
    name:{type: 'string', required: true},
    image:{type: 'string', required: true},
    description:{type: 'string', required: false},
    coin:{type: 'string', required: false},
})

let City = model('cities', citiesSchema)

export default City