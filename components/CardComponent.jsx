import Link from 'next/link';
import { useMemo } from 'react';
import '@/components/CardComponent.css'; // Ensure it's used only if necessary

const CardComponent = ({ project }) => {
    // Memoize technologies array to avoid unnecessary re-renders
    const techList = useMemo(() => project.technologies, [project.technologies]);

    return (
        // ✅ Use `_id` instead of `id`
        <Link href={`/projects/${project.project.toLowerCase()}/${project.id}`} passHref>
            <div className="card" aria-label={`View details for ${project.title}`}>

                {/* Project Details */}
                <div className="card-header">
                    <h2 className="card-title">{project.title}</h2>
                </div>

                <p className="card-description">{project.shortDescription}</p>

                {/* Technologies */}
                <div className="card-tech">
                    {techList.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default CardComponent;
