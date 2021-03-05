import React from 'react';
import { Container } from 'react-bootstrap';
import LoginContainer from '../container/LoginContainer';

export default function Login() {
  return (
    <Container className="login-box">
      <LoginContainer />
    </Container>
  );
}
