

const Message = ({ message }) => {
    const { id,name,email,body } = message;
    return (
        <div className="text-center border m-4 p-4 rounded-2xl border-cyan-600">
            <h1><b>id:</b> {id}</h1>
            <h1><b>name:</b> {name}</h1>
            <p><b>Email:</b> {email}</p><hr className="my-4"/>
            <p><small>{body}</small></p>
        </div>
    );
};

export default Message;