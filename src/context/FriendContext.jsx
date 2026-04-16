import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {

    const [timeLine, setTimeLine] = useState([]);

    const handleTimeLine = (currFriend, type, image) => {
        const newFriend = {
            ...currFriend,
            type: type,
            image,
            time: new Date()
        };

        setTimeLine(prev => [...prev, newFriend]);
        toast.success(`${type} with ${currFriend.name}`, {
            position: 'top-center'
        });
    };

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friendData.json');
            const data = await res.json();

            setFriends(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const data = {
        timeLine, setTimeLine, handleTimeLine,
        friends, setFriends , loading, setLoading
    }
    return (
        <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    );
};

export default FriendProvider;