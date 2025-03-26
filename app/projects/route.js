import { NextResponse } from "next/server";

// Hardcoded projects array
const projects = [
    { id: 1, project: 'node js', title: 'AI Chatbot', description: 'An intelligent chatbot using NLP.', technologies: ['React', 'Node.js', 'AI'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
    { id: 2, project: 'php', title: 'E-Commerce Website', description: 'An online shopping platform.', technologies: ['PHP', 'MySQL', 'Bootstrap'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
    // ... (other projects)
];

// 🚀 Fetch all projects (GET)
export async function GET() {
    return NextResponse.json(projects, { status: 200 });
}

// 🚀 Add a new project (POST)
export async function POST(req) {
    const data = await req.json();
    const newProject = { id: projects.length + 1, ...data }; // Assign a new ID
    projects.push(newProject);
    return NextResponse.json({ message: "Project added successfully", project: newProject }, { status: 201 });
}

// 🚀 Delete a project by id (DELETE)
export async function DELETE(req) {
    const { id } = await req.json();
    const index = projects.findIndex(project => project.id === id);

    if (index === -1) {
        return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    projects.splice(index, 1);
    return NextResponse.json({ message: "Project deleted successfully" }, { status: 200 });
}
