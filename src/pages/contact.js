import React from "react";
import Head from "next/head";

import Layout from "../components/layout";

const Contact = () => (
  <Layout>
    <Head>
      <title>Contact | Creative Logic</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      ></link>
    </Head>

    <span>
      <h1 className="title">Contact</h1>
      <p className="info">
        Thanks for stopping by! You can send me a note with the form below.{" "}
      </p>
      <p>Please remember to be respectful.</p>
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
            />
          </div>
          
          <div className="form-group col-md-6">
            <label htmlFor="firstName">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Doe"
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
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-info btn-block">Send</button>
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

export default Contact;
