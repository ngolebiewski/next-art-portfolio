"use client"

import figlet from "figlet";
import { useEffect, useState } from "react";

const AboutPage = () => {
    const [figletText, setFigletText] = useState<string>("");

    useEffect(() => {
        figlet.text("About Me", { font: "Larry 3D" }, (err, data) => {
            if (err) {
                console.error("Failed to generate figlet text:", err);
                setFigletText("About Me"); // Fallback text
                return;
            }
            setFigletText(data || "About Me");
        });
    }, []);

    return (
        <div>
            <pre>{figletText}</pre>
            <p>This is the about page content.</p>
        </div>
    );
};

export default AboutPage;