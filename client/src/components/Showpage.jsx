import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Showpage = () => {
    const navigate=useNavigate()
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        try {
            let response = await axios.get("http://localhost:8080/users");
            //console.log(response.data.data)
            setUsers(response.data.data);
        } catch (err) {
            console.log(
                "some error occured while fetching data form the chat api"
            );
        }
    };
    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8080/users/delete/"+id)
            window.location.reload();
        }
        catch(err) {
            console.log("some error occured while deleting a particular chat",err);
        }  
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl text-center">All Chats</h1>
            <h1 className="bg-green-600 p-2 rounded-lg cursor-pointer">
                <Link to="/users/addChat">Add Chat+</Link>
            </h1>
            {users.map((user, index) => (
                <div className="bg-red-200 w-fit p-4 rounded-lg" key={index}>
                    <div className="text-right">
                        <button className="bg-green-400 p-2 rounded-lg cursor-pointer">
                            <Link to={"/users/editChat/"+user._id}>Edit</Link>
                        </button>
                        <button className="bg-red-400 p-2 rounded-lg ml-3 cursor-pointer">
                            <div onClick={() => handleDelete(user._id)}>Delete</div>
                        </button>
                    </div>
                    <div className="underline">Sender:{user.sender}</div>
                    <div className="font-semibold">Message:{user.message}</div>
                    <div className="underline">
                        Receiver:{user.receiver || "N/A"}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Showpage;
