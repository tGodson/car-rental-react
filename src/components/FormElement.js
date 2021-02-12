import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FormElement({
  type, handleSubmit, username, password,
}) {
  useEffect(() => {
    username.current.focus();
  }, []);

  return (
    <Form className="w-50" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter username" ref={username} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" ref={password} />
      </Form.Group>
      <Button className="btn-oval pl-4 pr-4" type="submit">
        { type }
      </Button>
      <Link className="nav-link text-danger" to="/">
        &larr; Back to home
      </Link>
    </Form>
  );
}

FormElement.propTypes = {
  type: PropTypes.string.isRequired,
  username: PropTypes.instanceOf(Object).isRequired,
  password: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormElement;
