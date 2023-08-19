import { Schema, model, Types } from "mongoose";

let collection = 'cities';

let schema = new Schema({
    name:{type: 'string', required: true},
    image:{type: 'string', required: true},
    description:{type: 'string', required: false},
    coin:{type: 'string', required: false},
})

let City = model(collection, schema)

export default City