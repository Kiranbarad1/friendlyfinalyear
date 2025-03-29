"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingPopup() {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowAnimation(false), 3000); // Animation lasts 3 sec
    }, []);

    return (
        <motion.div
            initial={{ bottom: "5%", right: "5%", scale: 1, opacity: 1 }}
            animate={
                showAnimation
                    ? {
                        left: "50%", // Move to center horizontally
                        top: "50%",  // Move to center vertically
                        scale: [1, 1.8, 1], // Expand and shrink
                        opacity: [1, 0.6, 1], // Blink effect
                    }
                    : { bottom: "5%", right: "5%", scale: 1, opacity: 1 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed bg-black text-white px-4 py-2 rounded-full cursor-pointer shadow-lg flex items-center justify-center"
            style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)", // Adjusts for true centering
                position: "fixed",
            }}
            onClick={() => (window.location.href = "/contact-us")}
        >
            📩
        </motion.div>
    );
}
