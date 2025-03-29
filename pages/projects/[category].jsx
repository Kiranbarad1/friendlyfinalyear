
import { useMemo } from 'react';
import Navbar from '@/components/Navbar';
import CardComponent from '@/components/CardComponent';
import SEO from '@/components/SEO';
import "@/pages/projects/CategoryPage.css"; // Use CSS Modules for scoped styling
export async function getServerSideProps({ params }) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`);
        if (!res.ok) throw new Error("Failed to fetch projects");

        const projects = await res.json();
        const formatCategory = (cat) => cat.toLowerCase().replace(/\s+/g, "-");
        const categoryLower = formatCategory(params.category);

        const filteredProjects = projects.filter(proj => formatCategory(proj.category) === categoryLower);

        return { props: { projects: filteredProjects, category: params.category } };
    } catch (error) {
        return { props: { projects: [], category: params.category } };
    }
}



export default function CategoryPage({ projects, category }) {
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
