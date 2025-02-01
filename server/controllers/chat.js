import Chat from "../Models/chat.js";
export const root = async (req, res) => {
    try {
        res.send({
            success: true,
            message: "root route is working well",
        });
    } catch (err) {
        console.log("some error occured in the routre route", err);
        res.send({
            success: false,
            message: err.message,
        });
    }
};
export const allUsers = async (req, res) => {
    try {
        let users = await Chat.find({});
        res.send({
            success: true,
            data: users,
        });
    } catch (err) {
        console.log("some error occured while listing all users", err);
        res.send({
            success: false,
            message: err.message,
        });
    }
};
export const showUser = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await Chat.findById(id);
        //console.log(user)
        if (!user) {
            return res.send({
                success: false,
                message: "user does not exist woth this id",
            });
        }
        res.send({
            success: true,
            user,
        });
    } catch (err) {
        console.log("some error occured while showing one chat");
        res.send({
            success: false,
            message: err.message,
        });
    }
};
export const addChat = async (req, res) => {
    try {
        let data = req.body;
        //console.log(data);
        let newChat = await Chat.create(data);
        console.log(newChat);
        res.send({
            success: true,
            newChat,
        });
    } catch (err) {
        console.log("some error occured while adding new chart");
        res.send({
            success: false,
            message: err.message,
        });
    }
};
export const deleteChat = async (req, res) => {
    try {
        let { id } = req.params;
        console.log(id);
        let deletedChat = await Chat.findByIdAndDelete(id);
        if (!deletedChat) {
            return res.send({
                success: false,
                message: "Chat not found",
            });
        }
        console.log(deletedChat);
        res.send({
            success: true,
            chat: deletedChat,
        });
    } catch (err) {
        console.log("some error occured while deleting this chat");
        res.send({
            success: false,
            message: err.message,
        });
    }
};
export const updateChat = async (req,res) => {
    try {
        let { id } = req.params;
        let updatedChat =await Chat.findByIdAndUpdate(id, req.body);
        if (!updatedChat) {
            return res.send({
                success: true,
                message: "Chat does not exist",
            });
        }
        res.send({
            success: true,
            message: updatedChat,
        });
    } catch (err) {
        console.log("some error occured while updating the chat ");
        res.send({
            success:false,
            message:err.message
        })
    }
};
