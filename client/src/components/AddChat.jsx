import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddChat = () => {
    const [sender, setSender] = useState("");
    const [message, setMessage] = useState("");
    const [receiver, setReceiver] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/users", {
                sender,
                message,
                receiver,
            });
            //alert("data submitted successfully");
            navigate("/users");
        } catch (err) {
            console.log("some error occured while creating a new chat");
        }
    };
    return (
        <div className="bg-red-300 p-3 rounded-lg m-5 flex flex-col gap-10 justify-center items-center w-fit mx-auto">
            <h1 className="text-center text-2xl">ADD CHAT</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Sender:</label>
                    <input
                        className="border-2"
                        type="text"
                        name="sender"
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Reciever:</label>
                    <input
                        className="border-2"
                        type="text"
                        name="receiver"
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Messsage:</label>
                    <textarea
                        cols={30}
                        rows={6}
                        className="border-2"
                        type="text"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <br />
                <button className="bg-green-400 p-2 rounded-lg">Submit</button>
            </form>
        </div>
    );
};

export default AddChat;
