import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (

    <section className="call-action">
      <h4>Be where you want to be on time with our confort rides</h4>
      <p>
        <Link className="btn btn-oval" to="/register">Book your ride</Link>
      </p>
    </section>

  );
}
