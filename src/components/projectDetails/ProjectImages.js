import React from 'react';
var Carousel = require('react-responsive-carousel').Carousel;

const ProjectImages = ({ project }) => {
    return (
        <Carousel showThumbs={false}>
        {
            project.image.map((img) => (
                <div>
                <img src={img} alt="" />
            </div>
            ))
        }
        </Carousel>
    )
}

export default ProjectImages