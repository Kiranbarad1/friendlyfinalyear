import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    technologies: [{ type: String, required: true }],
    imageUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
    shortDescription: { type: String, required: true, trim: true }
});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
