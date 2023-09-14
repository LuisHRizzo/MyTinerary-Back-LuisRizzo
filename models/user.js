import { Schema, model } from "mongoose";

const userSchema = Schema({
    firstName: { type: String },
    lastName: { type: String },
    mail: { type: String },
    password: { type: String },
    photo: { type: String, default: "https://www.pngmart.com/files/22/User-Avatar-Profile-Transparent-Isolated-PNG.png"},
    country: { type: String },
    age: { type: Number },
    phone: { type: Number },
    verified: { type: Boolean, default: false }
}, {
    timestamps: true
})

const User = model('user', userSchema)

export default User