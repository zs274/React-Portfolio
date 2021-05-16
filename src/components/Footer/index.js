import React from "react";
import "./style.css";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";


function Footer() {
    return (
        <IconContext.Provider value={{ size: "2em" }}>
            <footer className="footer">
                <span className="fa-stack">
                    <a href="https://github.com/zs274">
                        <FaGithub /></a> </span>
                <span className="fa-stack">
                    <a href="https://www.linkedin.com/in/zarin-salim-0107871bb">
                        <FaLinkedin /></a></span>
                <span className="fa-stack">
                <a href="https://drive.google.com/file/d/13-_HL_4i1glhJXXfCgqHtEcVRuJvAgEe/view?usp=sharing">
                    <FaRegFileAlt /></a></span>
            </footer>
        </IconContext.Provider>
    );
}

export default Footer;
