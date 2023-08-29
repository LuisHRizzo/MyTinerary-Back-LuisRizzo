import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";

const itinerariesSchema = Schema({
    titulo:{type: 'string', required: true},
    name:{type: 'string', required: true},
    photo:{type: 'string', required: true},
    duration:{type: 'number', required: true},
    price:{type: 'number', required: true},
    hashtags:{type: 'Array', required: false},
    city:{type: mongoose.Types.ObjectId, ref: 'City', required: true},
    info:[{type: mongoose.Types.ObjectId, ref: 'Info'}],
})

let Itinerary = model('itineraries', itinerariesSchema)

export default Itinerary