import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers.js';
import "../../style.css";

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  function handleChange(e) {
      if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
  
              if(!isValid) {
                  setErrorMessage('please enter a valid email');
              } else {
                  setErrorMessage('');
              }

          } else {
              if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
              } else {
                setErrorMessage('');
              } 
      }

      if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
      }
  }

  function handleSubmit(e) {
      e.preventDefault();
  }







  return (
    <div class='contact'>
      <h1>Contact Me</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name: </Form.Label>
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message: </Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Form.Text className="text-muted">
          This form is not currently connected. Please contact me at maya.lorimer@yahoo.com with any questions.
        </Form.Text>
      </Form.Group>

      {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
      )}


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}
