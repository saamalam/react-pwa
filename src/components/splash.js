import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
            News API Splash Page
        </h1>
        <h2 className="subtitle">
            Now hundreds of news at your finger tip.
        </h2>
        <Link to="/home" className="button">Go to News Home</Link>
      </div>
    </div>
  </section>
);
