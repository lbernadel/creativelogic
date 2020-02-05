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
      const nextTopic = prevTopic + 1;
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
        <Col xs={{ span: 12, offset: 0, order: 2 }} lg={{ span: 3, offset: 0, order: 1 }}  className="mt-4">
          <Card>
            <Card.Img className="headshot" variant="top" alt="Laurie's headshot" src="/static/Laurie_headshot.jpg" style={{ border: "solid 2px rgb(136, 82, 127)" }} />
            <Card.Body>
              <Card.Title style={{ fontFamily: '"Sedgwick Ave", cursive', color: "#88527f", fontSize: "1.7rem" }}>
                Laurie Bernadel
              </Card.Title>

              <Card.Text style={{ fontSize: "0.9rem" }}>
                A twenty-something full-stack web developer currently based in the Charlotte, North Carolina area.
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Subtitle className="mb-2 about">Find me</Card.Subtitle>
              <Card.Link href="https://www.linkedin.com/in/lauriebernadel/" title="Laurie's LinkedIn" target="_blank" rel="noreferrer">LinkedIn</Card.Link>
              <Card.Link href="https://github.com/lbernadel" title="Laurie's GitHub" target="_blank" rel="noreferrer">GitHub</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 10, offset: 1, order: 1 }} lg={{ span: 9, offset: 0, order: 2 }}>
          <Card>
            <Card.Body>
              <Card.Title>What do I do?</Card.Title>
              <Card.Text>
              With an affinity for front-end design, I aim to turn ideas into reality. There's nothing more thrilling than seeing dreams evolve into tangible celebrations. Leveraging a background in psychology and utilizing over five years of knowledge and skills related to client services and relations in a way driven by technology innovation, curiosity, creativity and passion to build more intuitive user experiences on the web.
              </Card.Text>
            </Card.Body>
            <Card.Subtitle className="mb-1 about">Top Skills</Card.Subtitle>
            <ul className="px-3 mx-2" style={{ fontSize: "0.85rem", listStyleType: "none", display: "inline" }}>
              <li className="py-1">JavaScript</li>
              <li className="py-1">CSS</li>
              <li className="py-1">Responsive Design</li>
              <li className="py-1">React.js</li>
              <li className="py-1">Database Management</li>
              <li className="py-1">Progressive Web Apps (PWAs)</li>
            </ul>

            <Card.Body>
              <Card.Title>How did I get into web development?</Card.Title>
              <Card.Text>
                Inspired by a love of creativity and driven by curiosity, web development came as an unexpected part of my journey. Three years out of undergrad with a Psychology, BS and working in the medical world of ophthalmology, I was looking for my next step and then one day the magic of cookies and Facebook ads brought me to a boot camp. Combined with my vast curiosity in how things work and the puzzles of life, web development opened up a brand new world of intriguing frustration and excitement.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default About;
