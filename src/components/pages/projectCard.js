import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react'; 

function ProjectCard(props) {
    return (
    <Col>
        <Card className="card">
            <Card.Img variant="top" className="projectImg" src={props.image} alt={props.name}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                <a href={props.github} target="_blank" rel="noreferrer">Github</a>
                <br/>
                <a href={props.deploy} target="_blank" rel="noreferrer">Deployed app</a>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )
}


export default ProjectCard;