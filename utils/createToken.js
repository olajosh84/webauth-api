import jwt from "jsonwebtoken";

const createToken = (userId, email, username, confirmed, isLoggedIn, firstName="", lastName="", userAvatar="") => {
    const token = jwt.sign(
        {
            userId, 
            email, 
            username, 
            confirmed, 
            isLoggedIn, 
            firstName, 
            lastName, 
            userAvatar
        }, 
        process.env.JWT_SECRET, 
        {
            expiresIn: process.env.JWT_EXPIRY
        }
    )
    return token;
}

export default createToken;