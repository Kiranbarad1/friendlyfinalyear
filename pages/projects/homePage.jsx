"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import { useState } from "react";
import Image from "next/image";
import FloatingPopup from "@/components/FloatingPopup";

export default function HomePage() {
    const featuredProjects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            technologies: "React, Node.js, MongoDB, Stripe",
            description: "A full-stack e-commerce website with user authentication, payment integration, and admin dashboard.",
            image: "/globe.svg",
        },
        {
            id: 2,
            title: "Portfolio Website",
            technologies: "Next.js, Tailwind CSS, Framer Motion",
            description: "A sleek portfolio website showcasing projects, animations, and interactive UI elements.",
            image: "/globe.svg",
        },
        {
            id: 3,
            title: "Task Management App",
            technologies: "React, Redux, Firebase",
            description: "A productivity tool allowing users to track tasks, set reminders, and collaborate in real-time.",
            image: "/globe.svg",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Hero Section with Gradient */}
            <motion.section
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-300 via-indigo-500 to-purple-400 text-white rounded-lg"
            >
                <h1 className="text-5xl font-extrabold">Welcome to Projects Hub</h1>
                <p className="mt-4 text-lg max-w-2xl">
                    Explore projects developed using modern technologies.
                </p>
                <Link href="/softwareprojects">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
                    >
                        View Projects
                    </motion.button>
                </Link>
            </motion.section>

            {/* Featured Projects Section (Dark Theme) */}
            <section className="py-12 bg-gray-900 text-white rounded-lg mt-10">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                    {featuredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: project.id * 0.2, ease: "easeOut" }}
                            className="bg-gray-800 p-4 rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:shadow-2xl relative"
                        >
                            <Link href={`http://localhost:3000/projects/node%20js/${project._id}`} passHref>
                                {/* Image */}
                                <div className="relative w-[350px] h-[188px] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="rounded-lg object-fit"
                                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Project Details */}
                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{project.technologies}</p>
                                    <p className="text-gray-300 mt-2">{project.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
            <FloatingPopup />
            {/* Dark Themed Contact Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center py-12 bg-gray-900 text-white shadow-lg mt-10 rounded-lg"
            >
                <h2 className="text-3xl font-bold">Contact Me</h2>
                <p className="text-gray-400 mt-4">Get in touch for collaborations or inquiries.</p>
                <div className="mt-6 text-lg text-blue-400 font-semibold">
                    📧 <a href="mailto:kiranbarad121@gmail.com">kiranbarad121@gmail.com</a>
                </div>
            </motion.section>
        </div>
    );
}
