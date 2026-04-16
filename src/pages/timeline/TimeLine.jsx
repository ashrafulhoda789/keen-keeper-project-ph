import React from 'react';

const TimeLine = () => {

    

    return (
        <div className='w-10/12 mx-auto my-10'>
            <h1 className='text-3xl font-bold'>Timeline</h1>
            <div>
                <div className='flex justify-end items-center'>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li ><a>Text</a></li>
                            <li ><a>Call</a></li>
                            <li ><a>Video</a></li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default TimeLine;