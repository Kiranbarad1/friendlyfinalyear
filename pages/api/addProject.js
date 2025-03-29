
// // to add project go to postman select post method add the link : http://localhost:3000/api/addProject  and in body select raw and paste or write : {
//   "title": "Chat Application",
//   "description": "A real-time chat app using WebSockets.",
//   "category": "Node.js",
//   "technologies": ["Node.js", "Socket.io", "React"],
//   "imageUrl": "/assets/chat-app.webp",
//   "videoUrl": "https://www.youtube.com/embed/D_qjmHvD8m8?autoplay=1&mute=1",
//   "shortDescription": "A digital solution for real-time messaging."
// }



import { connectToDatabase } from "../../lib/mongodb";
import Project from "../../model/Project";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        await connectToDatabase();

        const { title, description, category, technologies, imageUrl, videoUrl, shortDescription, price } = req.body;

        // console.log("📨 Received Data:", req.body); // ✅ Check Incoming Data

        const newProject = new Project({
            title,
            description,
            category,
            technologies,
            imageUrl,
            videoUrl,
            shortDescription,
            price
        });

        await newProject.save();

        console.log("✅ Saved Project:", newProject); // ✅ Check Stored Data
        res.status(201).json({ message: "Project added successfully", project: newProject });

    } catch (error) {
        console.error("❌ Error adding project:", error);
        res.status(500).json({ error: "Failed to add project" });
    }
}






