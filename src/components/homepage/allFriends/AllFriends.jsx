import React, { useEffect, useState } from 'react';
import FriendCard from '../../../ui/FriendCard';
import { BeatLoader } from 'react-spinners';

// const friendsPromise = fetch('/friendData.json').then(res => res.json());

const AllFriends = () => {

    // const friends = use(friendsPromise);
    // console.log(friends);

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

    return (
        <div className='w-10/12 mx-auto my-10'>
            <h2 className='text-3xl font-bold'>All Friends</h2>
            {
                loading ? (<div className='flex justify-center items-center'> <BeatLoader color='#00A300'></BeatLoader> </div>) :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        {
                            friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default AllFriends;