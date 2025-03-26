import { useRouter } from "next/router";
import projects from "../../data/projects";
import Image from "next/image";
import SEO from "@/components/SEO";
const ProjectDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return <h1 className="text-center text-red-500">Project Not Found</h1>;
    }

    return (
        <>
            <SEO
                title={`${category} Projects`}
                description={`Explore the best ${category} projects for final year student developers .`}
                keywords={`${category}, projects, major projects, development`}
            />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                {/* <Image
                src={project.imageUrl}
                alt={project.title}
                width={700}
                height={400}
                className="rounded-lg my-4"
            /> */}
                <p className="text-gray-600">{project.description}</p>
                <p className="text-gray-600">{project.description}</p>
                <p className="mt-2"><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
                <div className="mt-4">
                    <iframe
                        width="700"
                        height="400"
                        src={project.videoUrl}
                        title="Project Video"
                        allowFullScreen
                        className="rounded-lg"
                    />
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;
