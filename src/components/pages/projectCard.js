import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react'; 

function ProjectCard(props) {
    return (
    <Col>
        <Card>
            <Card.Img variant="top" src={props.image} alt={props.name}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                <a href={props.github}>Github</a>
                <br/>
                <a href={props.deploy}>Deployed app</a>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )
}


export default ProjectCard;