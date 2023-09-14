import { useEffect, useState } from "react";
import Message from "../Message/Message";


const Messages = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('message.json')
            .then(res => res.json())
        .then(data=>setMessages(data))
    },[])



    return (
        <div>
            <div>
                <h1>show all messages</h1>
            </div>
            <div className="border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    messages.map((message)=><Message key={message.id} message={message}></Message>)
                }
            </div>
        </div>
    );
};

export default Messages;