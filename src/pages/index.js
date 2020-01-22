import Head from "next/head";
import Link from "next/link";
import { Jumbotron, Button, Container } from "react-bootstrap";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <Head>
      <title>Home | Creative Logic</title>
    </Head>

    <Jumbotron
      className="mt-5"
      fluid={true}
      style={{ backgroundColor: "rgba(159, 135, 175, 0.7)" }}
    >
      <Container style={{ paddingRight: "3rem", paddingLeft: "3rem" }}>
        <h1>Hello, I'm Laurie!</h1>
        <br />
        <h5>I build web experiences through the magic of code.</h5>
        <br />

        <Link href="/creations" passHref>
          <Button
            variant="info"
            size="lg"
            aria-label="link to creations page"
            className="my-auto"
          >
            Turn <em>ideas</em> into <em>reality</em>
          </Button>
        </Link>

        <h6 className="mt-3">
          <Link href="/about" passHref>
            <a aria-label="About" id="whoLink">More about me.</a>
          </Link>
        </h6>
      </Container>
    </Jumbotron>
  </Layout>
);

export default Home;
