import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Jumbotron fluid>
      <Container>
        <h1 className="display-3">Rick &amp; Morty Fan Page</h1>
        <p className="lead">Well aren't we having a grand ole time.</p>
      </Container>
      </Jumbotron>
      <nav className="navigation-bar">
        <Link to="/">Home</Link>
        <Link to="/characters/">Characters</Link>
      </nav>
    </div>
  );
}
