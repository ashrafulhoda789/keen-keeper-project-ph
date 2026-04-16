import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {

    const [timeLine, setTimeLine] = useState([]);

    const handleTimeLine = (currFriend, type) =>{
        const newFriend = {
            ... currFriend,
            type: type,
            time: new Date()
        };

        setTimeLine(prev => [...prev, newFriend]);
        toast.success(`${type} with ${currFriend.name}`,{
            position: 'top-center'
        });
    }

    const data = {
        timeLine, setTimeLine, handleTimeLine
    }
    return (
        <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    );
};

export default FriendProvider;