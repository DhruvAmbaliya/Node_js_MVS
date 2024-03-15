import express from "express";
import {deleteUser, getAllUsers, getUserDetails, register, specialFunc, updateUser} from "../Controllers/user.js"
const router = express.Router();

// app.get use router.get because need to add prifix /users all time
// /users/all to /all because add prifix in userRouter 
router.get("/all", getAllUsers );

router.post("/new", register);

router.get("/userid/special",specialFunc)

// dynamic routes always put in last 

// router.route("/userid/:id").get(getAllUsers).put(updateUser).delete(deleteUser);
router.get("/userid/:id",getUserDetails)
router.put("/userid/:id",updateUser)
router.delete("/userid/:id",deleteUser) 

export default router
