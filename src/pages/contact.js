import React, { useState } from "react";
import Head from "next/head";
import { Form, Col, Button, Alert, Spinner } from "react-bootstrap";

import Layout from "../components/layout";

const Contact = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactReason: "",
    message: ""
  });

  const [status, setStatus] = useState({
    sentNote: false,
    sendingNote: false,
    info: {
      error: false,
      msg: null
    }
  });

  const handleResponse = (status, msg) => {
    {
      status === 202
        ? setStatus({
            sentNote: true,
            sendingNote: false,
            info: {
              error: false,
              msg: msg
            }
          }) &&
          setInputs({
            firstName: "",
            lastName: "",
            email: "",
            contactReason: "",
            message: ""
          })
        : setStatus({
            info: {
              error: true,
              msg: msg
            }
          });
    }
  };

  const handleInputChange = event => {
    event.persist();

    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));

    setStatus({
      sentNote: false,
      sendingNote: false,
      info: { error: false, msg: null }
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, sendingNote: true }));

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs)
    });

    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <Layout>
      <Head>
        <title>Contact | Creative Logic</title>
      </Head>

      <main>
        <h1 className="mt-5">Let's talk!</h1>
        <h4 style={{ fontFamily: '"Sedgwick Ave", cursive', color: "#88527f" }}>
          ...new ideas, old ideas, magic, life musings or even coffee.
        </h4>
        <p
          style={{ padding: "0 1rem", margin: "0.5rem 1.5rem 1.75rem 1.5rem" }}
        >
          Send me a note using the form below. Thanks for stopping by!
        </p>

        {/* FORM */}
        <Form onSubmit={handleSubmit}>
          {/* First & Last Names */}
          <Form.Row>
            <Form.Group as={Col} xs={12} md={6} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                as="input"
                type="text"
                value={inputs.firstName}
                placeholder="Jane"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                as="input"
                type="text"
                value={inputs.lastName}
                placeholder="Doe"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form.Row>
          {/* Email */}
          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label column xs={12}>
                Email
              </Form.Label>
              <Form.Control
                required
                as="input"
                type="email"
                value={inputs.email}
                placeholder="name@example.com"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form.Row>
          {/* Contact Reason */}
          <Form.Row>
            <Form.Group as={Col} controlId="contactReason">
              <Form.Label>Reason for Contact</Form.Label>
              <Form.Control
                required
                as="select"
                value={inputs.contactReason}
                onChange={handleInputChange}
              >
                <option>Choose a reason...</option>
                <option>General</option>
                <option>Job Inquiry</option>
                <option>Site issue</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          {/* Message Area */}
          <Form.Row>
            <Form.Group as={Col} controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows="6"
                value={inputs.message}
                placeholder="Please remember to be respectful."
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form.Row>
          <Button
            type="submit"
            variant="info"
            block
            className="mb-5"
            disabled={status.sendingNote}
          >
            {!status.sendingNote ? (
              !status.sentNote ? (
                "Send"
              ) : (
                "Sent!"
              )
            ) : (
              <>
                <Spinner
                  as="span"
                  animation="grow"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Sending...
              </>
            )}
          </Button>
        </Form>

        {status.info.error === true ? (
          <Alert
            variant="danger"
            className="mx-auto"
            style={{ maxWidth: "66.66vw" }}
          >
            <Alert.Heading>Aw, snap!</Alert.Heading>
            <small>
              {status.info.msg}{" "}
              <Alert.Link href="mailto:hello@creativelogic.dev">
                hello@creativelogic.dev
              </Alert.Link>
              .
            </small>
          </Alert>
        ) : (
          status.info.error === false &&
          status.info.msg && (
            <Alert
              variant="success"
              className="mx-auto"
              style={{ maxWidth: "66.66vw" }}
            >
              <Alert.Heading>Hooray!</Alert.Heading>
              <small>{status.info.msg}</small>
            </Alert>
          )
        )}
      </main>
    </Layout>
  );
};

export default Contact;
