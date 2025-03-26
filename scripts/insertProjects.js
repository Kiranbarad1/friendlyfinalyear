import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

const projects = [
    { project: 'node js', title: 'AI Chatbot', description: 'An intelligent chatbot using NLP.', technologies: ['React', 'Node.js', 'AI'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?autoplay=1&mute=1", shortDescription: 'A smart chatbot.' },
    { project: 'php', title: 'E-Commerce Website', description: 'An online shopping platform.', technologies: ['PHP', 'MySQL', 'Bootstrap'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?autoplay=1&mute=1", shortDescription: 'A shopping site.' },
];

async function insertProjects() {
    try {
        await connectDB();
        await Project.insertMany(projects, { ordered: false });
        console.log("✅ Data inserted successfully!");
        process.exit();
    } catch (error) {
        console.error("❌ Error inserting data:", error);
        process.exit(1);
    }
}

insertProjects();
