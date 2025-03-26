import { useMemo } from 'react';
import Navbar from '@/components/Navbar';
import CardComponent from '@/components/CardComponent';
import dotenv from 'dotenv';
import SEO from '@/components/SEO';
import "@/pages/projects/CategoryPage.css"; // Use CSS Modules for scoped styling

export async function getStaticPaths() {
    const categories = ['node js', 'php', 'python', 'java', 'react'];
    const paths = categories.map(category => ({ params: { category } }));
    return { paths, fallback: 'blocking' };
}
export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`http://localhost:3000/api/projects`);
        if (!res.ok) throw new Error("Failed to fetch projects");

        const projects = await res.json();
        const categoryLower = params.category.toLowerCase();
        const filteredProjects = projects.filter(proj => proj.project.toLowerCase() === categoryLower);

        return { props: { projects: filteredProjects, category: params.category } };
    } catch (error) {
        console.error("Error fetching projects:", error);
        return { props: { projects: [], category: params.category } };
    }
}

export default function CategoryPage({ projects, category }) {
    // Memoize category title to avoid unnecessary re-renders
    const categoryTitle = useMemo(() => category.toUpperCase(), [category]);

    return (
        <div className='category-page'>
            <SEO
                title={`${categoryTitle} Projects`}
                description={`Explore the best ${categoryTitle} projects for developers.`}
                keywords={`${categoryTitle}, projects, development`}
            />
            <Navbar />

            <div className="container mx-auto px-6">
                <h1 className="mt-[80px]">{categoryTitle} Projects</h1>

                {projects.length === 0 ? (
                    <p className="text-center text-gray-400 text-lg">No projects found.</p>
                ) : (
                    <div className="projects-grid">
                        {projects.map(project => (
                            <CardComponent key={project._id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
