import React from 'react';
import "../../style.css";

export default function Resume() {
  return (
    <div class="resume">
      <h1>Resume</h1>
      <hr></hr>
      <p>
        Download my <a href="https://drive.google.com/file/d/1akc0q7YuutOclF3g8qeFacJINTox7KzV/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
      </p>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul>
      <li>APIs</li>
      <li>Node</li>
      <li>Express</li>
      <li>REST</li>
      <li>MySQL, Sequelize</li>
      <li>NoSQL</li>
      <li>MongoDB, Mongoose</li>
      </ul>
    </div>
  );
}