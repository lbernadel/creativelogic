import React, { useState } from "react";
import Head from "next/head";
import { Form, Col } from "react-bootstrap"

import Layout from "../components/layout";

const Contact = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactReason: "",
    message: ""
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        contactReason: state.contactReason,
        message: state.message
      })
    }).catch(error => console.log(error));
  };

  return (
    <Layout>
      <Head>
        <title>Contact | Creative Logic</title>
      </Head>

      <span>
        <h1 className="title mt-3">Contact</h1>
        <p className="info">
          Thanks for stopping by! You can send me a note with the form below.{" "}
        </p>
        <p>Please remember to be respectful.</p>

        {/* FORM */}
        <Form>
          {/* First & Last Names */}
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label column md="6">First Name</Form.Label>
              <Form.Control as="input"
                type="text"
                name="firstName"
                placeholder="Jane"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label column md={6}>Last Name</Form.Label>
              <Form.Control as="input"
                type="text"
                name="lastName"
                placeholder="Doe"
                onChange={handleInput}
              />
            </Form.Group>
          </Form.Row>
          {/* Email */}
          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label column xs={12}>Email</Form.Label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                onChange={handleInput}
              />
            </Form.Group>
          </Form.Row>
          {/* Contact Reason */}
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="contactReason">Reason for Contact</label>
              <select
                className="form-control"
                id="contactReason"
                name="contactReason"
                value={state.contactReason}
                onChange={handleInput}
              >
                <option value="general">General</option>
                <option value="job">Job Inquiry</option>
                <option value="issue">Site issue</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          {/* Message Area */}
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Drop me a note"
                rows="6"
                onChange={handleInput}
              ></textarea>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-info btn-block mb-3">
            Send
          </button>
        </Form>
      </span>

      {/* <style jsx>{`
        .form-group {
          width: 100%;
        }
        // label {
        //   padding: 2% 0;
        // }
        p > .info {
          line-height: 2rem;
          padding-top: 1rem;
        }
      `}</style> */}
    </Layout>
  );
};

export default Contact;
