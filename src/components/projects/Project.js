import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Project = ({ name, language, image, current }) => {
    return (
        <Link to={`${current}`}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <div className="h-auto w-auto m-3">
                        <img src={image} alt="project screenshot" />
                    </div>
                    <div className="px-6 py-4">
                        <h3 className="font-Montserrat font-semibold text-xl mb-2">{name}</h3>
                        <p className="text-gray-600 text-">
                            {language}
                        </p>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default Project;
