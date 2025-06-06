import { addChat, allUsers , root, showUser , deleteChat, updateChat} from "../controllers/chat.js";
import express from "express";
const router=express.Router();
router.get("/",root);
router.get("/users",allUsers);
router.get("/users/:id",showUser);
router.post("/users/",addChat);
router.delete("/users/delete/:id",deleteChat);
router.patch("/users/edit/:id",updateChat);
export default router;