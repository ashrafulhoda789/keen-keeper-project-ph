import React, { useContext } from 'react';
import { FaArchive, FaVideo } from 'react-icons/fa';
import { HiBellSnooze } from 'react-icons/hi2';
import { IoMdText } from 'react-icons/io';
import { IoCallSharp } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../../context/FriendContext';
import textImage from '../../assets/text.png'
import callImage from '../../assets/call.png'
import videoImage from '../../assets/video.png'

const FriendDetails = () => {
    const { friendId } = useParams();

    const friends = useLoaderData();
    // console.log(friends, id);

    const expectedFriend = friends.find(friend => friend.id == friendId);
    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = expectedFriend;

    const { handleTimeLine } = useContext(FriendContext);
    // console.log(friendContext);
    return (
        <div className='w-10/12 mx-auto my-10 grid gap-7 grid-rows-3 grid-cols-1 md:grid-cols-3'>
            <div className='row-span-2 flex flex-col justify-center items-center shadow-xl p-8 space-y-5 rounded-2xl'>
                <div>
                    <img className="w-42 h-42 rounded-full mx-auto  object-center " src={picture} alt="" />
                </div>

                <div className='space-y-5 flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-2xl text-center'>{name}</h1>
                    <p className={`w-fit px-2 py-1 rounded-full font-medium text-white ${status === 'On-track' ? 'bg-green-500' : status === 'Almost due' ? 'bg-yellow-500' : 'bg-red-400'} `} >{status}</p>

                    <div className='flex flex-col lg:flex-row items-center gap-3'>
                        {
                            tags.map((tag, index) => <div className='bg-green-100 text-green-600 rounded-full px-2 py-1' key={index}>
                                <p>{tag}</p>
                            </div>)
                        }
                    </div>

                    <p className='text-gray-600 text-center'>"{bio}"</p>
                    <p className='text-gray-600'>Preferred: {email}</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 col-span-2'>
                <div className='flex flex-col justify-center items-center  col-span-1 shadow-xl shadow-gray-200 p-7 rounded-2xl'>
                    <h3 className='text-xl md:text-3xl font-semibold'>{days_since_contact}</h3>
                    <h4 className='text-lg text-gray-500 text-center'>Days Since Contact</h4>
                </div>
                <div className='flex flex-col justify-center items-center col-span-1 text-center shadow-xl shadow-gray-200 p-7 rounded-2xl'>
                    <h3 className='text-xl md:text-3xl font-semibold'>{goal}</h3>
                    <h4 className='text-lg text-gray-500'>Goal (Days)</h4>
                </div>
                <div className='flex flex-col justify-center items-center col-span-1 text-center shadow-xl shadow-gray-200 p-7 rounded-2xl'>
                    <h3 className='text-xl md:text-3xl font-semibold'>{next_due_date}</h3>
                    <h4 className='text-lg text-gray-500'>Next Due</h4>
                </div>
            </div>
            <div className='col-span-2 flex justify-between items-center shadow-xl p-8 rounded-2xl'>
                <div>
                    <h3 className='text-xl text-green-950 font-medium'>Relationship Goal</h3>
                    <p className='text-lg text-gray-500'>Connect every <span className='text-green-950 font-bold'>{goal} Days</span></p>
                </div>

                <div>
                    <button className='btn'>Edit</button>
                </div>
            </div>
            <div className='row-span-1 flex justify-center items-center flex-col gap-5'>
                <button className='w-full btn bg-white p-6 font-semibold text-lg'><HiBellSnooze></HiBellSnooze> Snooze 2 weeks</button>
                <button className='w-full btn bg-white p-6 font-semibold text-lg'><FaArchive></FaArchive>Archive</button>
                <button className='w-full btn bg-white p-6 font-semibold text-lg text-red-500'><MdDelete></MdDelete>Delete</button>
            </div>
            <div className='col-span-2 flex flex-col justify-around shadow-xl shadow-gray-200 p-7 rounded-2xl '>
                <h2 className='text-2xl font-semibold'>Quick Check-In</h2>
                <div className='grid grid-cols-3 gap-5'>
                    <Link onClick={() => handleTimeLine(expectedFriend, 'call', callImage)} className='border border-gray-200 flex flex-col justify-center items-center gap-4 col-span-1 shadow-xl shadow-gray-200 p-5 bg-gray-50 rounded-2xl hover:bg-gray-100'> <IoCallSharp></IoCallSharp> Call</Link>
                    <Link onClick={() => handleTimeLine(expectedFriend, 'text', textImage)} className='border border-gray-200 flex flex-col justify-center items-center gap-4 col-span-1 shadow-xl shadow-gray-200 p-7 bg-gray-50 rounded-2xl hover:bg-gray-100'> <IoMdText></IoMdText> Text</Link>
                    <Link onClick={() => handleTimeLine(expectedFriend, 'video', videoImage)} className='border border-gray-200 flex flex-col justify-center items-center gap-4 col-span-1 shadow-xl shadow-gray-200 p-7 bg-gray-50 rounded-2xl hover:bg-gray-100'> <FaVideo></FaVideo> Video</Link>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;