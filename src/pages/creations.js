import Head from "next/head";
import useSWR from "swr";
import fetch from "node-fetch";
import { Row, Col, Card, CardImg, Button, ButtonGroup } from "react-bootstrap";

import Layout from "../components/layout";

const fetcher = url => fetch(url).then(r => r.json());

function Creations() {
  let { data, error } = useSWR("api/bestCreation", fetcher);

  if (error)
    return (data = (
      <h5>
        Aw, snap! Failed to fetch the creations. Please reload the page to try
        again or come back later. If the issue persists, please send me a note
        to <a href="/contact">let me know</a>let me know!
      </h5>
    ));

  return (
    <Layout>
      <Head>
        <title>Creations | Creative Logic</title>
      </Head>

      <h1 className="mt-5">Creations</h1>
      <Row>
        <Col lg>
          {!data ? (
            <h4>Loading...</h4>
          ) : (
            data.map(item => {
              return (
                <Card
                  className="rounded my-4 mx-1"
                  style={{ backgroundColor: "rgba(159, 135, 175, 0.8)" }}
                  key={item.app}
                >
                  <Row className="no-gutters">
                    <Col xs={3} lg={2} className="my-auto">
                      <CardImg
                        className="project-img"
                        src={item.img}
                        alt={`${item.creation}-thumbnail`}
                        style={{ backgroundColor: "white" }}
                      />
                    </Col>
                    <Col xs={9} lg={10}>
                      <Card.Header style={{ color: "#fff" }}>
                        {item.role}
                      </Card.Header>
                      <Card.Body className="ml-3" style={{ textAlign: "left" }}>
                        <Card.Title
                          className="mt-0"
                          style={{ color: "#B1DDF1" }}
                        >
                          {item.creation}
                        </Card.Title>
                        <Card.Text>
                          <em>Description</em>: {item.description}
                          <br />
                        </Card.Text>
                        <Card.Text>
                          <strong>Contributions</strong>: {item.roleDetail}
                        </Card.Text>
                        <ButtonGroup
                          className="py-2"
                          role="group"
                          aria-label="Button links for app info"
                        >
                          <Button
                            className="project-link"
                            href={item.app}
                            title={item.creation}
                            target="_blank"
                            rel="noreferrer"
                          >
                            app
                          </Button>
                          <Button
                            className="project-link"
                            href={item.code}
                            title={`GitHub Repo: ${item.creation}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            code
                          </Button>
                        </ButtonGroup>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted creation-tech">{`Tech Topics: ${item.tech}`}</small>
                      </Card.Footer>
                    </Col>
                  </Row>
                </Card>
              );
            })
          )}
        </Col>
      </Row>
    </Layout>
  );
}

export default Creations;
