
// export default function handler(req, res) {
//     const projects = [
//         { id: 1, project: 'node js', title: 'AI Chatbot', description: 'An intelligent chatbot using NLP.', technologies: ['React', 'Node.js', 'AI'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 2, project: 'php', title: 'E-Commerce Website', description: 'An online shopping platform.', technologies: ['PHP', 'MySQL', 'Bootstrap'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 3, project: 'python', title: 'Face Recognition System', description: 'A system that detects faces using OpenCV.', technologies: ['Python', 'OpenCV', 'Deep Learning'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 4, project: 'java', title: 'Library Management System', description: 'A system for managing books in a library.', technologies: ['Java', 'Spring Boot', 'MySQL'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 5, project: 'react', title: 'Portfolio Website', description: 'A personal portfolio website for developers.', technologies: ['React', 'Tailwind CSS', 'Next.js'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 6, project: 'node js', title: 'Chat Application', description: 'A real-time chat app using WebSockets.', technologies: ['Node.js', 'Socket.io', 'React'], imageUrl: "/assets/chat-app.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 7, project: 'php', title: 'Blog Website', description: 'A CMS-based blog system.', technologies: ['PHP', 'Laravel', 'MySQL'], imageUrl: "/assets/blog.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 8, project: 'python', title: 'Stock Price Predictor', description: 'Predict stock prices using ML.', technologies: ['Python', 'TensorFlow', 'Flask'], imageUrl: "/assets/stock-predictor.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 9, project: 'java', title: 'Hospital Management System', description: 'A system for managing hospital operations.', technologies: ['Java', 'Spring Boot', 'PostgreSQL'], imageUrl: "/assets/hospital.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 10, project: 'react', title: 'Weather App', description: 'A weather forecasting app.', technologies: ['React', 'OpenWeather API', 'CSS'], imageUrl: "/assets/weather.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 11, project: 'node js', title: 'Expense Tracker', description: 'A budget and expense tracking tool.', technologies: ['Node.js', 'MongoDB', 'React'], imageUrl: "/assets/expense-tracker.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 12, project: 'php', title: 'Job Portal', description: 'A job listing and application platform.', technologies: ['PHP', 'Laravel', 'Bootstrap'], imageUrl: "/assets/job-portal.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 13, project: 'python', title: 'OCR Text Extractor', description: 'Extract text from images.', technologies: ['Python', 'OpenCV', 'Tesseract'], imageUrl: "/assets/ocr.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 14, project: 'java', title: 'Online Quiz System', description: 'A quiz system with multiple categories.', technologies: ['Java', 'Spring Boot', 'React'], imageUrl: "/assets/quiz.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 15, project: 'react', title: 'To-Do List App', description: 'A simple task manager.', technologies: ['React', 'Firebase', 'Material UI'], imageUrl: "/assets/todo.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 16, project: 'node js', title: 'Online Voting System', description: 'A secure online voting platform.', technologies: ['Node.js', 'Blockchain', 'React'], imageUrl: "/assets/voting.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 17, project: 'php', title: 'Event Booking System', description: 'An event management and booking app.', technologies: ['PHP', 'CodeIgniter', 'Bootstrap'], imageUrl: "/assets/event-booking.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 18, project: 'python', title: 'Spam Email Classifier', description: 'Detects spam emails using ML.', technologies: ['Python', 'Scikit-learn', 'Flask'], imageUrl: "/assets/spam-classifier.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 19, project: 'java', title: 'Inventory Management System', description: 'Manages stock and inventory.', technologies: ['Java', 'Hibernate', 'MySQL'], imageUrl: "/assets/inventory.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },
//         { id: 20, project: 'react', title: 'Food Delivery App', description: 'A food ordering and delivery app.', technologies: ['React', 'Redux', 'Firebase'], imageUrl: "/assets/food-delivery.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' }
//     ];

//     res.status(200).json(projects);
// }

import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

export default async function handler(req, res) {
    try {
        await connectDB(); // Connect to MongoDB

        if (req.method === "GET") {
            const projects = await Project.find();
            return res.status(200).json(projects);
        }

        return res.status(405).json({ message: "Method Not Allowed" });
    } catch (error) {
        console.error("API Error:", error);
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}
