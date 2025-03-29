import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardComponent from "@/components/CardComponent";
// import Navbar from "@/components/Navbar";
import styles from "@/pages/SoftwareProjects.module.css"; // Import the CSS file
import NavbarPage from "./NavbarPage";

export default function SoftwareProjects() {
    const router = useRouter();
    const { category } = router.query;
    const [projects, setProjects] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        fetch(`/api/projects`, { cache: "no-store" }) // Prevent cached responses
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            })
            .catch((err) => console.error("Error fetching projects:", err));
    }, []);

    const handleCheckboxChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    // Sort projects: Move selected category projects to the top
    const sortedProjects = [...projects].sort((a, b) => {
        const aSelected = selectedCategories.includes(a.category.toLowerCase());
        const bSelected = selectedCategories.includes(b.category.toLowerCase());
        return bSelected - aSelected; // If selected, move up
    });

    return (
        <>
            {/* <Navbar /> */}

            <NavbarPage />

            <div className={styles.maincontainer}>

                <h1 className={styles.title}>Software Projects</h1>
                <div className={styles.container}>
                    {/* Sidebar - Category Selection */}
                    <div className={styles.sidebar}>
                        <h2>Category Select</h2>
                        <div className={styles.checkboxContainer}>
                            <ul>
                                {["php", "python", "node js", "react", "java"].map((cat) => (
                                    <li key={cat}>
                                        <label className={styles.checkboxLabel}>
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(cat)}
                                                onChange={() => handleCheckboxChange(cat)}
                                            />
                                            {cat.toUpperCase()}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Projects Display */}
                    <div className={styles.projects}>
                        {sortedProjects.length === 0 ? (
                            <p>No projects found.</p>
                        ) : (
                            sortedProjects.map((project) => (
                                <CardComponent key={project._id} project={project} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
