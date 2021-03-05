import React from 'react';
import { Container } from 'react-bootstrap';
import RegisterContainer from '../container/RegisterContainer';

export default function Register() {
  return (
    <Container className="login-box">
      <RegisterContainer />
    </Container>
  );
}
