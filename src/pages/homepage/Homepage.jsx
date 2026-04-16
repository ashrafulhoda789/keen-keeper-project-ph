import React from 'react';
import Banner from '../../components/homepage/banner/Banner';
import AllFriends from '../../components/homepage/allFriends/AllFriends';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='divider w-10/12 mx-auto'></div>
            <AllFriends></AllFriends>
        </div>
    );
};

export default Homepage;