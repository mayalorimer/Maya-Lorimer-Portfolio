import React from "react";
import "../style.css";
import github from '../images/github.jpg';
import linkedin from '../images/linkedin.jpg';
import email from '../images/email.jpg';

export default function Footer() {
    return (
        <div class="footer">
          <div class="footer-content-right">
            <a href="https://github.com/mayalorimer" target="_blank" rel="noreferrer"><img src={github} class="icon-style" alt="Github icon"></img></a>
            <a href="https://www.linkedin.com/in/maya-lorimer/" target="_blank" rel="noreferrer"><img src={linkedin} class="icon-style" alt="Linkedin icon"></img></a>
            <a href=" mailto: maya.lorimer@yahoo.com" target="_blank" rel="noreferrer"><img src={email} class="icon-style" alt="Emailicon"></img></a>
        </div>
        </div>
    );
}



