import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import FormElement from '../components/FormElement';
import { loginUser } from '../redux/actions';

function LoginContainer({ logUserIn, userData }) {
  const username = useRef();
  const password = useRef();

  const handleLogin = e => {
    e.preventDefault();

    const data = {
      username: username.current.value,
      password: password.current.value,
    };

    logUserIn(data);
  };

  let error = '';
  if (userData.error) {
    error = userData.error;
  }

  // eslint-disable-next-line no-nested-ternary
  return userData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="orange" />
    </h2>
  ) : userData.token === undefined || userData.token === 'undefined'
    ? (
      <>
        <h2 className="about-section__primary">Sign in</h2>
        <p className="mb-3">Hello there! Sign in and book your ride</p>
        <p className="text-danger">{ error}</p>
        <FormElement username={username} password={password} type="Sign in" handleSubmit={handleLogin} />
      </>
    )
    : (
      <Redirect to="/cars" />
    );
}

const mapStateToProps = state => ({
  userData: state.user,
});

const mapDispatchToProps = dispatch => ({
  logUserIn: data => dispatch(loginUser(data)),
});

LoginContainer.propTypes = {
  logUserIn: PropTypes.func.isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
