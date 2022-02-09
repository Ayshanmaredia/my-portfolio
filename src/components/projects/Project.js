import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ id, name, language, image }) => {
    return (
        <Link to={`projectDetail?id=${id}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <div className="h-auto w-auto m-3">
                    <img src={image} alt="project screenshot" />
                </div>
                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2">{name}</h3>
                    <p className="text-gray-700 text-base">
                        {language}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Project;
