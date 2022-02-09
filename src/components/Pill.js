import React from 'react';

const Pill = ({ name, Icon }) => {
    return (
        <p className="px-4 py-2 mx-2 my-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full inline-block">
            <Icon className=" mr-1 inline-block text-lg" /> {name}
        </p>
    );
};

export default Pill;
