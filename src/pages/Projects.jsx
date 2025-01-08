import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null); // For error handling
    const [loading, setLoading] = useState(true); // For loading state

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/projects');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h1>Our Projects</h1>
            {loading ? (
                <p>Loading projects...</p>
            ) : error ? (
                <p className="error-message">Error: {error}</p>
            ) : (
                <div className="projects">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3>{project.title}</h3>
                            <h2>{project.description}</h2>
                            <p><strong>Client:</strong> {project.client_name}</p>
                            {/* <p><strong>Contact:</strong> {project.contact}</p> */}
                            <p><strong>Date:</strong> {project.date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
