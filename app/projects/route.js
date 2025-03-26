import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";
import { Types } from "mongoose"; // Import for ObjectId conversion

// 🚀 Fetch all projects (GET)
export async function GET() {
    try {
        await connectDB();
        const projects = await Project.find();
        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server Error", error: error.message }, { status: 500 });
    }
}

// 🚀 Add a new project (POST)
export async function POST(req) {
    try {
        await connectDB();
        const data = await req.json();
        const newProject = new Project(data);
        await newProject.save();
        return NextResponse.json({ message: "Project added successfully", project: newProject }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Server Error", error: error.message }, { status: 500 });
    }
}

// 🚀 Delete a project by _id (DELETE)
export async function DELETE(req) {
    try {
        await connectDB();
        const { id } = await req.json();

        // Validate ObjectId before deletion
        if (!Types.ObjectId.isValid(id)) {
            return NextResponse.json({ message: "Invalid Project ID" }, { status: 400 });
        }

        const deletedProject = await Project.findByIdAndDelete(new Types.ObjectId(_id));

        if (!deletedProject) {
            return NextResponse.json({ message: "Project not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Project deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server Error", error: error.message }, { status: 500 });
    }
}
