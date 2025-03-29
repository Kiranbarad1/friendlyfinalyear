import { connectToDatabase } from "../../lib/mongodb";
import Project from "../../model/Project";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            await connectToDatabase();
            const projects = await Project.find({});
            res.status(200).json(projects);
        } catch (error) {
            console.error("Error fetching projects:", error);
            res.status(500).json({ error: "Failed to fetch projects" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}









// Uncommented and modified to use hardcoded projects array
// export default function handler(req, res) {
//     res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
//     const { category } = req.query;
//     const projects = [
//         { _id: 1, id: 1, project: 'node js', title: 'AI Chatbot', description: 'An intelligent chatbot using NLP.', technologies: ['React', 'Node.js', 'AI'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 2, id: 2, project: 'php', title: 'E-Commerce Website', description: 'An online shopping platform.', technologies: ['PHP', 'MySQL', 'Bootstrap'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 3, id: 3, project: 'python', title: 'Face Recognition System', description: 'A system that detects faces using OpenCV.', technologies: ['Python', 'OpenCV', 'Deep Learning'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 4, id: 4, project: 'java', title: 'Library Management System', description: 'A system for managing books in a library.', technologies: ['Java', 'Spring Boot', 'MySQL'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 5, id: 5, project: 'react', title: 'Portfolio Website', description: 'A personal portfolio website for developers.', technologies: ['React', 'Tailwind CSS', 'Next.js'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 6, id: 6, project: 'node js', title: 'Chat Application', description: 'A real-time chat app using WebSockets.', technologies: ['Node.js', 'Socket.io', 'React'], imageUrl: "/assets/chat-app.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 7, id: 7, project: 'php', title: 'Blog Website', description: 'A CMS-based blog system.', technologies: ['PHP', 'Laravel', 'MySQL'], imageUrl: "/assets/blog.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 8, id: 8, project: 'python', title: 'Stock Price Predictor', description: 'Predict stock prices using ML.', technologies: ['Python', 'TensorFlow', 'Flask'], imageUrl: "/assets/stock-predictor.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 9, id: 9, project: 'java', title: 'Hospital Management System', description: 'A system for managing hospital operations.', technologies: ['Java', 'Spring Boot', 'PostgreSQL'], imageUrl: "/assets/hospital.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 10, id: 10, project: 'react', title: 'Weather App', description: 'A weather forecasting app.', technologies: ['React', 'OpenWeather API', 'CSS'], imageUrl: "/assets/weather.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 11, id: 11, project: 'node js', title: 'Expense Tracker', description: 'A budget and expense tracking tool.', technologies: ['Node.js', 'MongoDB', 'React'], imageUrl: "/assets/expense-tracker.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 12, id: 12, project: 'php', title: 'Job Portal', description: 'A job listing and application platform.', technologies: ['PHP', 'Laravel', 'Bootstrap'], imageUrl: "/assets/job-portal.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 13, id: 13, project: 'python', title: 'OCR Text Extractor', description: 'Extract text from images.', technologies: ['Python', 'OpenCV', 'Tesseract'], imageUrl: "/assets/ocr.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 14, id: 14, project: 'java', title: 'Online Quiz System', description: 'A quiz system with multiple categories.', technologies: ['Java', 'Spring Boot', 'React'], imageUrl: "/assets/quiz.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 15, id: 15, project: 'react', title: 'To-Do List App', description: 'A simple task manager.', technologies: ['React', 'Firebase', 'Material UI'], imageUrl: "/assets/todo.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 16, id: 16, project: 'node js', title: 'Online Voting System', description: 'A secure online voting platform.', technologies: ['Node.js', 'Blockchain', 'React'], imageUrl: "/assets/voting.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 17, id: 17, project: 'php', title: 'Event Booking System', description: 'An event management and booking app.', technologies: ['PHP', 'CodeIgniter', 'Bootstrap'], imageUrl: "/assets/event-booking.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 18, id: 18, project: 'python', title: 'Spam Email Classifier', description: 'Detects spam emails using ML.', technologies: ['Python', 'Scikit-learn', 'Flask'], imageUrl: "/assets/spam-classifier.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 19, id: 19, project: 'java', title: 'Inventory Management System', description: 'Manages stock and inventory.', technologies: ['Java', 'Hibernate', 'MySQL'], imageUrl: "/assets/inventory.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

//         { _id: 20, id: 20, project: 'react', title: 'Food Delivery App', description: 'A food ordering and delivery app.', technologies: ['React', 'Redux', 'Firebase'], imageUrl: "/assets/food-delivery.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' }

//     ];

// if (!category) {
//     // No category selected, return all projects
//     return res.status(200).json(projects);
// }

// Filter and sort: first show selected category projects, then the rest
//     const filtered = projects.filter(p => p.project.toLowerCase() === category.toLowerCase());
//     const rest = projects.filter(p => p.project.toLowerCase() !== category.toLowerCase());
//     const sortedProjects = [...filtered, ...rest];

//     res.status(200).json(sortedProjects);
// }



// {  category: 'node js', title: 'AI Chatbot', description: 'An intelligent chatbot using NLP.', technologies: ['React', 'Node.js', 'AI'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'php', title: 'E-Commerce Website', description: 'An online shopping platform.', technologies: ['PHP', 'MySQL', 'Bootstrap'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'python', title: 'Face Recognition System', description: 'A system that detects faces using OpenCV.', technologies: ['Python', 'OpenCV', 'Deep Learning'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'java', title: 'Library Management System', description: 'A system for managing books in a library.', technologies: ['Java', 'Spring Boot', 'MySQL'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'react', title: 'Portfolio Website', description: 'A personal portfolio website for developers.', technologies: ['React', 'Tailwind CSS', 'Next.js'], imageUrl: "/globe.svg", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'node js', title: 'Chat Application', description: 'A real-time chat app using WebSockets.', technologies: ['Node.js', 'Socket.io', 'React'], imageUrl: "/assets/chat-app.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'php', title: 'Blog Website', description: 'A CMS-based blog system.', technologies: ['PHP', 'Laravel', 'MySQL'], imageUrl: "/assets/blog.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'python', title: 'Stock Price Predictor', description: 'Predict stock prices using ML.', technologies: ['Python', 'TensorFlow', 'Flask'], imageUrl: "/assets/stock-predictor.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'java', title: 'Hospital Management System', description: 'A system for managing hospital operations.', technologies: ['Java', 'Spring Boot', 'PostgreSQL'], imageUrl: "/assets/hospital.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'react', title: 'Weather App', description: 'A weather forecasting app.', technologies: ['React', 'OpenWeather API', 'CSS'], imageUrl: "/assets/weather.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'node js', title: 'Expense Tracker', description: 'A budget and expense tracking tool.', technologies: ['Node.js', 'MongoDB', 'React'], imageUrl: "/assets/expense-tracker.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'php', title: 'Job Portal', description: 'A job listing and application platform.', technologies: ['PHP', 'Laravel', 'Bootstrap'], imageUrl: "/assets/job-portal.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'python', title: 'OCR Text Extractor', description: 'Extract text from images.', technologies: ['Python', 'OpenCV', 'Tesseract'], imageUrl: "/assets/ocr.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'java', title: 'Online Quiz System', description: 'A quiz system with multiple categories.', technologies: ['Java', 'Spring Boot', 'React'], imageUrl: "/assets/quiz.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'react', title: 'To-Do List App', description: 'A simple task manager.', technologies: ['React', 'Firebase', 'Material UI'], imageUrl: "/assets/todo.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'node js', title: 'Online Voting System', description: 'A secure online voting platform.', technologies: ['Node.js', 'Blockchain', 'React'], imageUrl: "/assets/voting.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'php', title: 'Event Booking System', description: 'An event management and booking app.', technologies: ['PHP', 'CodeIgniter', 'Bootstrap'], imageUrl: "/assets/event-booking.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'python', title: 'Spam Email Classifier', description: 'Detects spam emails using ML.', technologies: ['Python', 'Scikit-learn', 'Flask'], imageUrl: "/assets/spam-classifier.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'java', title: 'Inventory Management System', description: 'Manages stock and inventory.', technologies: ['Java', 'Hibernate', 'MySQL'], imageUrl: "/assets/inventory.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' },

// {  category: 'react', title: 'Food Delivery App', description: 'A food ordering and delivery app.', technologies: ['React', 'Redux', 'Firebase'], imageUrl: "/assets/food-delivery.webp", videoUrl: "https://www.youtube.com/embed/D_qjmHvD8m8?si=QHSiZcidjb5NSZeM?autoplay=1&mute=1", shortDescription: 'A digital solution for library book tracking.' }