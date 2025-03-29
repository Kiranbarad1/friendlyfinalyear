import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CardComponent from '@/components/CardComponent';
import Navbar from '@/components/Navbar';

export default function SoftwareProjects() {
    const router = useRouter();
    const { category } = router.query;
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`/api/projects`)
            .then(res => res.json())
            .then(data => {
                if (category) {
                    setProjects(data.filter(proj => proj.category.toLowerCase() === category.toLowerCase()));
                } else {
                    setProjects(data);
                }
            })
            .catch(err => console.error("Error fetching projects:", err));
    }, [category]);

    const handleCategoryClick = (selectedCategory) => {
        router.push(`/softwareprojects?category=${selectedCategory}`);
    };

    return (
        <div>
            <Navbar />
            <h1>Software Projects</h1>
            <div>
                <button onClick={() => router.push('/softwareprojects')}>All</button>
                {['php', 'java', 'python', 'node js', 'react'].map(cat => (
                    <button key={cat} onClick={() => handleCategoryClick(cat)}>
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>
            <div>
                {projects.map((project) => (

                    <CardComponent key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
}
