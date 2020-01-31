import Head from "next/head";
import useSWR from "swr";
import fetch from "node-fetch";
import {
  Row,
  Col,
  Card,
  CardImg,
  Button,
  ButtonGroup,
  Spinner,
  Alert
} from "react-bootstrap";

import Layout from "../components/layout";

const fetcher = url => fetch(url).then(r => r.json());

function Creations() {
  let { data, error } = useSWR("api/bestCreation", fetcher);
  //splitting items into even and odd indexes for better layout control
  const odd = data?.filter((v, i) => {
    return i % 2 == 1;
  });
  const even = data?.filter((v, i) => {
    return i % 2 == 0;
  });
  // console.log("ODD VALUES", odd);
  // console.log("EVEN VALUES", even);

  return (
    <Layout>
      <Head>
        <title>Creations | Creative Logic</title>
      </Head>

      <h1 className="mt-5">Creations</h1>
      <h4 style={{ fontFamily: '"Sedgwick Ave", cursive', color: "#88527f" }}>
        ...where the magic of code transforms ideas into reality!
      </h4>

      <Row>
        <Col>
        {/* display error message if loading properly can't happen */}
          {error ? (
            <Alert
              variant="danger"
              className="mx-auto"
              style={{ maxWidth: "50vw", padding: "2rem" }}
            >
              <Alert.Heading>
                <strong>Oh no!</strong>
              </Alert.Heading>
              <small>
                Failed to fetch the creations. Please reload the page to try
                again or come back later.
                <br />
                If the issue persists, please{" "}
                <a href="/contact">send me a note</a> to let me know!
              </small>
            </Alert>
          ) : !data ? (
            // Display loading message while connected but still gathering data
            <h4>
              {" "}
              <Spinner
                as="span"
                animation="border"
                variant="info"
                role="status"
                aria-hidden="true"
              />{" "}
              Loading...
            </h4>
          ) : (
            // Display the data if everything is all good
            <Row>
              <Col xs={12} lg={6}>
                {even.map((project, index) => (
                  <Card
                    className="rounded my-4 mx-1"
                    style={{ backgroundColor: "rgba(159, 135, 175, 0.8)" }}
                    key={project.app}
                  >
                    <Card.Header style={{ color: "#fff" }}>
                      {project.role}
                    </Card.Header>
                    <Card.Body className="pl-3" style={{ textAlign: "left" }}>
                      <CardImg
                        className="project-img mr-3 mb-3"
                        src={project.img}
                        alt={`${project.creation}-thumbnail`}
                        style={{ backgroundColor: "white" }}
                      />
                      <Card.Title className="mt-0" style={{ color: "#B1DDF1" }}>
                        {project.creation}
                      </Card.Title>
                      <Card.Text>
                        <em>Description</em>: {project.description}
                      </Card.Text>
                      <Card.Text>
                        <strong>Contributions</strong>: {project.roleDetail}
                      </Card.Text>
                      <Card.Text
                        className="mx-auto"
                        style={{
                          width: "33.33%",
                          color: "#fff",
                          textAlign: "center"
                        }}
                      >
                        <small>Take a look!</small>
                        <br />
                        <ButtonGroup
                          as="span"
                          className="py-2"
                          role="group"
                          aria-label="Button links for app info"
                        >
                          <Button
                            className="project-link"
                            href={project.app}
                            title={project.creation}
                            target="_blank"
                            rel="noreferrer"
                          >
                            app
                          </Button>
                          <Button
                            className="project-link"
                            href={project.code}
                            title={`GitHub Repo: ${project.creation}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            code
                          </Button>
                        </ButtonGroup>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted creation-tech">{`Tech Topics: ${project.tech}`}</small>
                    </Card.Footer>
                  </Card>
                ))}
              </Col>
              <Col xs={12} lg={6}>
                {odd.map((project, index) => (
                  <Card
                    className="rounded my-4 mx-1"
                    style={{ backgroundColor: "rgba(159, 135, 175, 0.8)" }}
                    key={project.app}
                  >
                    <Card.Header style={{ color: "#fff" }}>
                      {project.role}
                    </Card.Header>
                    <Card.Body className="pl-3" style={{ textAlign: "left" }}>
                      <CardImg
                        className="project-img mr-3 mb-3"
                        src={project.img}
                        alt={`${project.creation}-thumbnail`}
                        style={{ backgroundColor: "white" }}
                      />
                      <Card.Title className="mt-0" style={{ color: "#B1DDF1" }}>
                        {project.creation}
                      </Card.Title>
                      <Card.Text>
                        <em>Description</em>: {project.description}
                      </Card.Text>
                      <Card.Text>
                        <strong>Contributions</strong>: {project.roleDetail}
                      </Card.Text>
                      <Card.Text
                        className="mx-auto"
                        style={{
                          width: "33.33%",
                          color: "#fff",
                          textAlign: "center"
                        }}
                      >
                        <small>Take a look!</small>
                        <br />
                        <ButtonGroup
                          as="span"
                          className="py-2"
                          role="group"
                          aria-label="Button links for app info"
                        >
                          <Button
                            className="project-link"
                            href={project.app}
                            title={project.creation}
                            target="_blank"
                            rel="noreferrer"
                          >
                            app
                          </Button>
                          <Button
                            className="project-link"
                            href={project.code}
                            title={`GitHub Repo: ${project.creation}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            code
                          </Button>
                        </ButtonGroup>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted creation-tech">{`Tech Topics: ${project.tech}`}</small>
                    </Card.Footer>
                  </Card>
                ))}
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Layout>
  );
}

export default Creations;
