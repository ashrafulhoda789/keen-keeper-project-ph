import React from 'react';

const FriendCard = ({friend}) => {
    // console.log(friend);
    const {picture, name, tags, days_since_contact, status} = friend;

    return (
        <div className='flex flex-col justify-center items-center shadow-xl p-8 space-y-5'>
            <div>
                <img className="w-38 h-38 rounded-full mx-auto object-cover " src={picture} alt="profile image" />
            </div>
             <div className='flex flex-col justify-center items-center space-y-5'>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <h4 className='text-gray-500'>{days_since_contact}d ago</h4>
                <div className='flex gap-3'>
                    {
                        tags.map((tag,index) => <div className='bg-green-100 text-green-600 rounded-full px-2 py-1' key={index}>
                            <p>{tag}</p>
                        </div> )
                    }
                </div>
                <p className={`w-fit px-2 py-1 rounded-full font-medium text-white ${status === 'On-track' ? 'bg-green-500': status === 'Almost due' ? 'bg-yellow-500' : 'bg-red-400'} `} >{status}</p>
             </div>

        </div>
    );
};

export default FriendCard;