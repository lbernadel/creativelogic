import React, { useCallback, useState, useEffect, useRef } from "react";
import Head from "next/head";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

import Layout from "../components/layout";

const About = () => {
  const [topic, setTopic] = useState("me")
  let currentTopic = useRef(0)
  // const topics = ["my life", "my work", "my hobbies"]
  // function changeTopic() {
  //   setTopic(topic + 1);
  // }
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(currentTopic.current)
  //   }, 1000)
  // }, []);

  const handleSwitch = useCallback(() => {
    setTopic(prevTopic => {
      const nextTopic = prevTopic +1;
      currentTopic.current = nextTopic;
      return nextTopic;
    })
  }, []);

  // useEffect(() => {
  //   function newTopic() {
  //     currentTopic.current();
  //   }

  //   let id = setInterval(newTopic, 1000)
  //   return () => clearInterval(id)
  // }, [])

  return (
  <Layout>
    <Head>
      <title>About | Creative Logic</title>
    </Head>

    <h1 className="mt-5">About</h1>
    <h4 style={{ fontFamily: '"Sedgwick Ave", cursive', color: "#88527f" }} className="mb-3">
  ...now I'll tell you all about <span onLoad={handleSwitch}>{topic.toString()}</span>. How much time do you have?
      </h4>

    <Row className="mb-5">
      <Col xs={{span: 10, offset: 1}} lg={{span: 4, offset: 0}}>
        <Card>
          <Card.Img className="headshot" variant="top" alt="Laurie's headshot" src="/static/Laurie_headshot.jpg" style={{border: "solid 2px rgb(136, 82, 127)"}} />
          <Card.Body>
            <Card.Title style={{fontFamily: '"Sedgwick Ave", cursive'}}>Laurie Bernadel</Card.Title>
            <Card.Text>
              Full-stack web developer with an affinity for front-end design, but the ability to do back-end development as well. I earned my full-stack certification through Trilogy Education at UNC Charlotte. I aspire to leverage a background in psychology and utilize over five years of knowledge and skills related to client services and relations in a way driven by technology innovation, curiosity, creativity and passion to build more intuitive user experiences on the web.
            </Card.Text>
          </Card.Body>
          <Card.Text className="mb-1" style={{color: "rgb(69, 63, 55)", fontWeight:"bolder"}}>Top Skills</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="py-2">JavaScript</ListGroupItem>
            <ListGroupItem className="py-2">CSS</ListGroupItem>
            <ListGroupItem className="py-2">Responsive Design</ListGroupItem>
            <ListGroupItem className="py-2">React.js</ListGroupItem>
            <ListGroupItem className="py-2">Database Management</ListGroupItem>
            <ListGroupItem className="py-2">Progressive Web Apps (PWAs)</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Text style={{color: "rgb(69, 63, 55)", fontWeight:"bolder"}}>You can find me here:</Card.Text>
            <Card.Link href="#" title="Laurie's LinkedIn" target="_blank" rel="noreferrer">LinkedIn</Card.Link>
            <Card.Link href="#" title="Laurie's GitHub" target="_blank" rel="noreferrer">GitHub</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
      {/* Other stuff */}
      </Col>
    </Row>
  </Layout>
);}

export default About;
