import React, { useState } from "react";
import Head from "next/head";

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
        <h1 className="title">Contact</h1>
        <p className="info">
          Thanks for stopping by! You can send me a note with the form below.{" "}
        </p>
        <p>Please remember to be respectful.</p>

        {/* FORM */}
        <form>
          {/* First & Last Names */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Jane"
                onChange={handleInput}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="firstName">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Doe"
                onChange={handleInput}
              />
            </div>
          </div>
          {/* Email */}
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                onChange={handleInput}
              />
            </div>
          </div>
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
          <button type="submit" onClick={handleSubmit} className="btn btn-info btn-block">
            Send
          </button>
        </form>
      </span>

      <style jsx>{`
        form {
          padding: 5vh 20%;
        }
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
      `}</style>
    </Layout>
  );
};

export default Contact;
