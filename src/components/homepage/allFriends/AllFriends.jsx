import React, { use } from 'react';
import FriendCard from '../../../ui/FriendCard';

const friendsPromise = fetch('/friendData.json').then(res => res.json());

const AllFriends = () => {

    const friends = use(friendsPromise);
    // console.log(friends);
    return (
        <div className='w-10/12 mx-auto my-10'>
            <h2 className='text-3xl font-bold'>All Friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default AllFriends;