import Head from "next/head";
import { Jumbotron, Button, Container } from 'react-bootstrap'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>

    <Jumbotron className="mt-5" fluid={true} style={{backgroundColor: "rgba(159, 135, 175, 0.7)"}}>
      <Container style={{paddingRight: "3rem", paddingLeft: "3rem"}}>
      <h1>Hello, I'm Laurie!</h1>
      <br />
      <h5>I enhance web experiences through the magic of code.</h5>
      <br />
      <Button variant="info" href="/creations">Turn <em>ideas</em> into <em>reality</em></Button>
      </Container>
    </Jumbotron>

  </Layout>
);

export default Home;
