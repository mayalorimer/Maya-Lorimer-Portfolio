import React from 'react';
import Row from 'react-bootstrap/Row';
import portfolio from '../../portfolio.json'
import ProjectCard from './projectCard';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>

      <Row xs={1} md={2} className="g-4">
      {portfolio.map((project, index) => (
        <ProjectCard key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy}/>
      ))}
    </Row>
  


    </div>
  );
}