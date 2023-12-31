import UserModel from "../models/users.js";
import asyncHandler from "../middlewares/asyncHandler.js";

/*export const fetchUsers = asyncHandler ( async (req, res) => {
    const users = await UserModel.find({});
    res.status(200).json(users);
})

export const fetchUser = asyncHandler ( async (req, res) => {
    const { userId } = req.params;
    const user = await UserModel.findById(userId).select("-password");
    res.status(200).json(user);
})*/

export const updateProfile = asyncHandler ( async (req, res) => {
    const { userId, firstName, lastName, sentAvatar  } = req.body;
    if(!userId){
        res.status(400);
        throw new Error("Resource not found");
    }
    if(!firstName && !lastName && !sentAvatar ){
        res.status(400);
        throw new Error("All form fields cannot be empty.");
    }
    const user = await UserModel.findByIdAndUpdate({_id: userId}, {firstName, lastName, userAvatar: sentAvatar}, { new: true, runValidators: true});
    const userInfo = {userId: user._id, email: user.email, username: user.username, confirmed: user.confirmed, isLoggedIn: true, firstName: user?.firstName, lastName: user?.lastName, userAvatar: user?.userAvatar};
    res.status(200).json({userInfo, message: "Update successful"});
})

/*export const deleteUser = asyncHandler ( async (req, res) => {
    const { userId } = req.params;
    const user = await UserModel.findByIdAndDelete(userId);
    res.status(200).json(user);
})*/