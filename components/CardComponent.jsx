
import Link from 'next/link';
import { useMemo } from 'react';
import '@/components/CardComponent.css'; // Ensure it's used only if necessary

const CardComponent = ({ project }) => {
    if (!project) return null;
    const techList = useMemo(() => project.technologies || [], [project.technologies]);

    return (
        <Link href={`/projects/${project.category?.toLowerCase()}/${project._id}`} passHref>
            <div className="card" aria-label={`View details for ${project.title}`}>
                {/* Project Details */}
                <div className="card-header">
                    <h2 className="card-title">{project.title || 'Untitled Project'}</h2>
                </div>

                <p className="card-description">{project.description || 'No description available.'}</p>

                {/* Technologies */}
                <div className="card-tech">
                    {techList.length > 0 ? (
                        techList.map((tech, index) => (
                            <span key={index} className="tech-badge">{tech}</span>
                        ))
                    ) : (
                        <span className="tech-badge">No technologies listed</span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default CardComponent;