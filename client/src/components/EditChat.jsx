import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EditChat = () => {
    let {id}=useParams();
    const navigate=useNavigate()
    //console.log(id)
    const [sender,setSender]=useState("")
    const [receiver,setReceiver]=useState("")
    const [message,setMessage]=useState("")
    const fetchData = async () => {
        try {
            let response=await axios.get("http://localhost:8080/users/"+id)
            //console.log(response?.data?.user)
            let {sender,message,receiver}=response?.data?.user;
            setSender(sender)
            setReceiver(receiver)
            setMessage(message)
        } catch (err) {
            console.log("some error occured while updating particular data in database")
        } 
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:8080/users/edit/${id}`,{
            sender,message,receiver
            })
            navigate('/users')
        }
        catch(err) {
            console.log("some error occured while updating a particular chat");
        }
        
    }
    useEffect(() => {
        fetchData();
    },[])
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
  )
}

export default EditChat