import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendContext';
import { IoIosArrowDown } from 'react-icons/io';


const TimeLine = () => {

    const { timeLine } = useContext(FriendContext);
    // console.log(timeLine);

    const [filter, setFilter] = useState('Default');

    const filterFriend = timeLine.filter(friend => {
        if (filter === 'Default') return true;
        else {
            return friend.type === filter;
        }
    })

    const sortedFriend = [...filterFriend].sort((a, b) => new Date(b.time) - new Date(a.time));

    // console.log(sortedFriend.time);

    return (
        <div className='w-10/12 mx-auto my-10'>
            <h1 className='text-3xl font-bold'>Timeline</h1>
            <div>
                <div className='flex justify-end items-center'>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Filter Timeline: {filter} <IoIosArrowDown></IoIosArrowDown> </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => setFilter('Default')}><a>Default</a></li>
                            <li onClick={() => setFilter('text')}><a>Text</a></li>
                            <li onClick={() => setFilter('call')}><a>Call</a></li>
                            <li onClick={() => setFilter('video')}><a>Video</a></li>
                        </ul>
                    </div>
                </div>

                <div className='my-5 flex flex-col gap-4'>
                    {
                        sortedFriend.length === 0 ?
                            <div className='p-10 text-center text-gray-400 shadow rounded-lg text-2xl font-bold'>
                                No Timeline Data Available
                            </div>

                            :

                            sortedFriend.map((friend, index) => <div key={index} className='flex gap-5 p-6 shadow rounded-xl'>
                                <div>
                                    <img src={friend.image} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-gray-600'><span className='text-lg font-bold'>{friend.type.toUpperCase()}</span> with {friend.name}</h3>
                                    <p className='text-gray-600'>{new Date(friend.time).toLocaleString()}</p>
                                </div>
                            </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default TimeLine;