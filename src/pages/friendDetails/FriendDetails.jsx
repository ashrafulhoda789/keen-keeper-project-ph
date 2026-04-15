import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const {id} = useParams();

    const friends = useLoaderData();
    console.log(friends, id);
    return (
        <div>
            
        </div>
    );
};

export default FriendDetails;