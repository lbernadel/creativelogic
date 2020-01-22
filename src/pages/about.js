import React from "react";
import Head from "next/head";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

import Layout from "../components/layout";

const About = () => (
  <Layout>
    <Head>
      <title>About | Creative Logic</title>
    </Head>

    <h1 className="mt-5">About</h1>
    <h4 style={{ fontFamily: '"Sedgwick Ave", cursive', color: "#88527f" }} className="mb-3">
        ...now I'll tell you all about [array interval of stuff]. How much time do you have?
      </h4>

    <Row className="mb-5">
      <Col lg={4}>
        <Card>
          <Card.Img variant="top" src="https://placedog.net/500?id=4" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
      Other stuff
      </Col>
    </Row>
  </Layout>
);

export default About;
