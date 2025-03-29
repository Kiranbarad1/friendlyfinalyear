import Link from 'next/link';
import { useMemo } from 'react';
import '@/components/CardComponent.css';

const CardComponent = ({ project }) => {
    if (!project) return null;

    const techList = useMemo(() => project.technologies || [], [project.technologies]);

    return (
        <Link href={`/projects/${project.category?.toLowerCase()}/${project._id}`} passHref>
            <div className="card" aria-label={`View details for ${project.title}`}>
                {/* Price in Top Right */}
                <div className="card-price">{project.price || 'FREE '}</div>

                {/* Title */}
                <h2 className="card-title">{project.title || 'Untitled Project'}</h2>

                {/* Short Description */}
                <p className="card-description">{project.shortDescription || 'No description available.'}</p>

                {/* Technologies List */}
                <div className="card-tech">
                    {techList.length > 0 ? (
                        techList.map((tech, index) => (
                            <span key={index} className="tech-badge">{tech}</span>
                        ))
                    ) : (
                        <span className="tech-badge">No tech listed</span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default CardComponent;
