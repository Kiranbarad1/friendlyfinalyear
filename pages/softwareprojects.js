import React, { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import Link from "next/link";
import CardComponent from "@/components/CardComponent";
import Navbar from "@/components/Navbar";

const SoftwareProjects = () => {
    const [projects, setProjects] = useState([]);

    // Fetch projects from API
    useEffect(() => {
        fetch("/api/projects") // Fetch data from API route
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (
        <>
            <SEO
                title={`Major Projects`}
                description={`Explore the best projects for final year students and developers. Major and mini projects for BTECH, MTECH, BE, MCA, BCA, and BSC students.`}
                keywords={`BTECH, MTECH, BE, MCA, BCA, BSC projects, major projects, development`}
            />
            <Navbar />
            <div className="container mt-[60px] mx-auto p-4">
                <h1 className="text-3xl font-bold text-center my-6 text-blue-600">Software Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projects.length === 0 ? (
                        <p className="text-center text-gray-500 text-xl">Loading projects...</p>
                    ) : (
                        projects.map((project) => (
                            <CardComponent key={project.id} project={project} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default SoftwareProjects;
