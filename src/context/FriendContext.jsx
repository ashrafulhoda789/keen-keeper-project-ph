import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {

    const [call, setCall] = useState([]);
    const [text, setText] = useState([]);
    const [video, setVideo] = useState([]);

    const handleCall = (currentFriend) =>{
        toast.success(`Call with ${currentFriend.name}`,{
            position: "top-center"
        });
    };

    const handleText = (currentFriend) =>{
        toast.success(`Text with ${currentFriend.name}`,{
            position: "top-center"
        });
    };

    const handleVideo = (currentFriend) =>{
        toast.success(`Video with ${currentFriend.name}`,{
            position: "top-center"
        });
    };

    const data = {
        call, setCall, handleCall,
        text, setText, handleText,
        video, setVideo, handleVideo
    }
    return (
        <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    );
};

export default FriendProvider;