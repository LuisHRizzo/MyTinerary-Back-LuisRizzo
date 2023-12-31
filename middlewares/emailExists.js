import User from "../models/user.js"

export const emailExist = async (req,res,next)=>{
    const exist = await User.findOne({mail:req.body.mail})

    if(!exist){
        return next()
    }

    return res.status(400).json({
        success:false,
        message:'Email already exists'
    })
}