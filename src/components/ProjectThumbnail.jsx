import React from 'react';

const ProjectThumbnail = ({ image, title }) => {
    return (
        <div className="project-thumbnail">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default ProjectThumbnail;
