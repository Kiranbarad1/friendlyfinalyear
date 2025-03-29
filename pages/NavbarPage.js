"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./NavbarPage.module.css"; // Ensure correct import

export default function NavbarPage() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle Menu with Safe State Update
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <div className={styles.logo}>
                <Link href="/">Projects Hub</Link>
            </div>

            {/* Navbar Links */}
            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
                <li>
                    <span onClick={() => setIsOpen(false)}>
                        <Link href="/">Home</Link>
                    </span>
                </li>
                <li>
                    <span onClick={() => setIsOpen(false)}>
                        <Link href="/softwareprojects">All Projects</Link>
                    </span>
                </li>
                <li>
                    <span onClick={() => setIsOpen(false)}>
                        <Link href="/projects/react">React Projects</Link>
                    </span>
                </li>
                <li>
                    <span onClick={() => setIsOpen(false)}>
                        <Link href="/projects/node%20js">Node.js Projects</Link>
                    </span>
                </li>
                <li>
                    <span onClick={() => setIsOpen(false)}>
                        <Link href="/projects/php">PHP Projects</Link>
                    </span>
                </li>
                <li>
                    <span onClick={() => setIsOpen(false)}>
                        <Link href="/projects/python">Python Projects</Link>
                    </span>
                </li>
                <li>
                    <span onClick={() => setIsOpen(false)}>
                        <Link href="/projects/java">Java Projects</Link>
                    </span>
                </li>
                <li>
                    <span onClick={() => setIsOpen(false)}>
                        <Link href="/contactus">Contact Us</Link>
                    </span>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
        </nav>
    );
}
