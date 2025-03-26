"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
                <motion.section
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-3xl text-center"
                >
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <p className="mt-4 text-gray-400">
                        Reach out for project purchases or inquiries about unavailable technologies.
                    </p>

                    {/* Contact Info */}
                    <div className="mt-6 space-y-4">
                        <div className="text-lg">
                            📧 <span className="font-semibold">Email:</span>
                            <a href="mailto:kiranbarad121@gmail.com" className="text-blue-400 ml-2">kiranbarad121@gmail.com</a>
                        </div>
                        <div className="text-lg">
                            📱 <span className="font-semibold">WhatsApp:</span>
                            <a href="https://wa.me/918660690932" className="text-blue-400 ml-2">+91 8660690932</a>
                        </div>
                    </div>
                </motion.section>

                {/* Additional Contact Details */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl mt-8 text-center"
                >
                    <h2 className="text-2xl font-bold">Contact for:</h2>
                    <ul className="mt-4 space-y-2 text-gray-300">
                        <li>✅ Buying pre-built projects</li>
                        <li>✅ Custom projects in technologies not listed on the website</li>
                    </ul>
                </motion.section>
            </div>
        </>
    );
}
