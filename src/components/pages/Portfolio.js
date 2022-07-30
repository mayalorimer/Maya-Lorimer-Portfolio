import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
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
/*         <Col key={index}>
          <Card>
            <Card.Img variant="top" src={project.image}/>
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              {project.image}
              <Card.Text>
                <a href={portfolio.github}>Github </a>
                <a href={portfolio.deployed}>Deployed app</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */
      ))}
    </Row>
  


    </div>
  );
}