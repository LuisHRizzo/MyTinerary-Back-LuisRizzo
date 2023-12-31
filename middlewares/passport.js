import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from '../models/user.js'

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}

const functionPassport = async (payload, done) => {
    try {
        const user = await User.findById(payload.id);

        if (!user) {
            throw new Error("No user exists with this id")
        };

        done(null, user);
    } catch (error) {
        done(error, null);
    }
}

export default passport.use(new Strategy(options, functionPassport))