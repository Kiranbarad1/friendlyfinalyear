
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import styles from "./Navbar.module.css"; // Ensure correct import

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar} style={{ height: "60px" }}>
            {/* Logo */}
            <div className={styles.logo}>
                <Link href="/">Projects Hub</Link>
            </div>

            {/* Desktop & Mobile Navbar Links */}
            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
                <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link href="/softwareprojects" onClick={() => setIsOpen(false)}>All Projects</Link></li>
                <li><Link href="/projects/react" onClick={() => setIsOpen(false)}>React Projects</Link></li>
                <li><Link href="/projects/node%20js" onClick={() => setIsOpen(false)}>Node.js Projects</Link></li>
                <li><Link href="/projects/php" onClick={() => setIsOpen(false)}>PHP Projects</Link></li>
                <li><Link href="/projects/python" onClick={() => setIsOpen(false)}>Python Projects</Link></li>
                <li><Link href="/projects/java" onClick={() => setIsOpen(false)}>Java Projects</Link></li>
                <li><Link href="/contactus" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
        </nav>
    );
}
