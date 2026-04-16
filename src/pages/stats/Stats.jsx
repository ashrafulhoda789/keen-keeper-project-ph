import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Stats = () => {

    const { timeLine } = useContext(FriendContext);

    const textCount = timeLine.filter(count => count.type === 'text').length;
    const callCount = timeLine.filter(count => count.type === 'call').length;
    const videoCount = timeLine.filter(count => count.type === 'video').length;

    const data = [
        { name: 'text', value: textCount, fill: '#00A300' },
        { name: 'call', value: callCount, fill: '#7f37f5' },
        { name: 'video', value: videoCount, fill: '#004700' },
    ];

    return (
        <div className='w-10/12 mx-auto my-10'>
            <h1 className='text-3xl font-bold mb-5'>Friendship Analytics</h1>

            {
                timeLine.length === 0 ?
                    <div className=" p-10 text-center text-gray-400 shadow rounded-lg text-2xl font-bold">
                        <p className="text-gray-500 font-bold text-3xl">No data to show</p>
                    </div>
                    :
                    <div className=' mt-20 p-8 shadow rounded-lg'>
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', margin: 'auto', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                cornerRadius="10%"
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            
                            <Legend></Legend>
                            <Tooltip></Tooltip>
                        </PieChart>
                    </div>
            }
        </div>
    );
};

export default Stats;