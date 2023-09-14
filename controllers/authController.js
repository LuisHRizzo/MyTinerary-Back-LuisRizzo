import User from "../models/user.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'

const authController = {

    signUp: async(req,res,next)=>{
        try{
            let newUser = { ...req.body };

            const pwdHash = bcrypt.hashSync(req.body.password, 10);
    
            newUser.password = pwdHash;
            if(newUser.photo == ""){delete newUser.photo}
            newUser = await User.create(newUser);
    
            let userData = {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                photo: newUser.photo,
                userId: newUser._id
            }
    
            const token = jwt.sign({ id: newUser._id, name: newUser.firstName + ' ' + newUser.lastName }, process.env.SECRET_KEY, { expiresIn: '2h' })
    
            return res.json({
                success: true,
                token: token,
                userData: userData
            });

        }catch(error){
            console.log(error);
            next(error)

        }
    },
    signIn:async(req,res,next)=>{
        try {

            const { mail, password } = req.body
    
            const userInDB = await User.findOne({ mail: mail })
    
            if (!userInDB) {
                throw new Error("There is no user with that email.")
            }
    
            let passwordValidated = bcrypt.compareSync(password, userInDB.password)
    
            if (!passwordValidated) {
                throw new Error("The email/password is incorrect")
            }
    
            let userData = {
                firstName: userInDB.firstName,
                lastName: userInDB.lastName,
                photo: userInDB.photo,
                userId: userInDB._id
            }
    
            const token = jwt.sign({ id: userInDB._id, name: userInDB.firstName + ' ' + userInDB.lastName }, process.env.SECRET_KEY, { expiresIn: '2h' })
    
            return res.json({
                success: true,
                token: token,
                userData: userData
            })
    
        } catch(error){
            console.log(error);
            next(error)
        }
        
    },
    getUsers: async(req,res) => {
        try {
            const users = await User.find();
    
            res.json({
                success: true,
                response: users,
            })
        } catch(error){
            console.log(error);
            next(error)
        }
    },
    getUser: async(req,res) => {
        let user;
    const { _id } = req.user;

    try {
        user = await User.findById(_id);

        user.password = '';

        res.json({
            success: true,
            response: user
        });
    } catch(error){
        console.log(error);
        next(error)
    }
    },
    updateUser: async(req,res) => {
        let updateUser = {... req.body};
        const { id } = req.user;
    
        if (updateUser.likes) {
            delete updateUser.likes;
        }
        
        try {
            updateUser = await User.findByIdAndUpdate({ _id: id }, updateUser, { new: true });
            
            res.json({
                success: true,
                response: updateUser
            });
    } catch(error){
        console.log(error);
        next(error)
    }
    },
    deleteUser: async(req,res) => {
        let userDeleted;
        const { _id } = req.user;

    try {
        userDeleted = await User.findByIdAndDelete(_id);

        res.json({
            success: true,
            response: userDeleted
        });
    } catch(error){
        console.log(error);
        next(error)
    }
    }
}


export default authController