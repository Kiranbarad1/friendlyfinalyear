import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import styles from "@/pages/projects/ProjectDetails.module.css";

export async function getStaticPaths() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`);
        if (!res.ok) throw new Error("Failed to fetch project paths");

        const projects = await res.json();
        const paths = projects.map(proj => ({
            params: { category: proj.project.toLowerCase(), id: proj._id.toString() }, // ✅ Use _id instead of id
        }));

        return { paths, fallback: "blocking" };
    } catch (error) {
        console.error("Error fetching project paths:", error);
        return { paths: [], fallback: "blocking" };
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`);
        if (!res.ok) throw new Error("Failed to fetch project data");

        const projects = await res.json();
        const project = projects.find(p => p._id.toString() === params.id); // ✅ Use _id instead of id

        if (!project) {
            return { notFound: true };
        }

        return { props: { project } };
    } catch (error) {
        console.error("Error fetching project data:", error);
        return { notFound: true };
    }
}

export default function ProjectDetails({ project }) {
    const router = useRouter();
    const [showVideo, setShowVideo] = useState(false);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h1>Project Not Found</h1>
                <p>Sorry, this project does not exist.</p>
                <button className={styles.button} onClick={() => router.push('/')}>
                    Go to Home
                </button>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>{`${project.title} | Final Year Projects`}</title>
                <meta name="description" content={project.description} />
                <meta property="og:title" content={project.title} />
                <meta property="og:description" content={project.description} />
                <meta property="og:type" content="article" />
            </Head>


            <Navbar />

            <div className={styles.container}>
                <h1 className={styles.title}>{project.title}</h1>

                {/* Media Section */}
                <div className={styles.mediaContainer} onMouseEnter={() => setShowVideo(true)}>
                    {showVideo ? (
                        <div className={styles.videoWrapper}>
                            <iframe
                                className={styles.video}
                                src={project.videoUrl}
                                title={project.title}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                            <button className={styles.closeButton} onClick={() => setShowVideo(false)}>X</button>
                        </div>
                    ) : (
                        <motion.img
                            src={project.imageUrl}
                            alt={project.title}
                            className={styles.image}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setShowVideo(true)}
                        />
                    )}
                </div>

                <p className={styles.description}>{project.description}</p>
                <p className={styles.category}>{project.project}</p>

                <h2 className="text-3xl font-bold">Contact Me</h2>
                <p className="text-gray-400 mt-4">Get in touch for buy or inquiries.</p>
                <div className="mt-6 text-lg text-blue-400 font-semibold">
                    📧 <a href="mailto:kiranbarad121@gmail.com">kiranbarad121@gmail.com</a>
                </div>
                <div className="text-lg">
                    📱 <span className="font-semibold">WhatsApp:</span>
                    <a href="https://wa.me/918660690932" className="text-blue-400 ml-2">+91 8660690932</a>
                </div>

                <button className={styles.button} onClick={() => router.back()}>
                    Go Back
                </button>
            </div>
        </div>
    );
}
