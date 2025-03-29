import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    videoUrl: { type: String, required: false },
    price: { type: String, required: true },
    shortDescription: { type: String, required: false }, // ✅ Add this field
    technologies: { type: [String], required: false }, // ✅ Add this field
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
