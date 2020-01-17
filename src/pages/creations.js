import React from "react";
import Head from "next/head";
import useSWR from "swr";

import Layout from "../components/layout";
import fetch from "node-fetch";

const fetcher = url => fetch(url).then(r => r.json());

function Creations() {
  let { data, error } = useSWR("api/bestCreation", fetcher);

  if (!data) return data = `<h6>Loading...</h6>`;
  if (error) return data = `<h5>Uh-oh! Failed to fetch the creations.</h5>`;

  return (
    <Layout>
      <Head>
        <title>Creations | Creative Logic</title>
        {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        /> */}
      </Head>

      <div className="container">
        <h1>Creations</h1>
        <div className="row">
          {data.map(item => {
            return (
              <div className="media rounded my-4 mx-1 p-3 col-lg-6" key={item.app}>
                <img
                  src="https://placedog.net/150/150?random"
                  alt={`${item.creation}-thumbnail`}
                  className="align-self-center mr-3 img-fluid img-thumbnail"
                />
                <div className="media-body ml-3">
                  <h5 className="mt-0 title">{item.creation}</h5>
                  <p>{item.description}</p>
                  <span
                    className="btn-group py-2"
                    role="group"
                    aria-label="Button links for app info"
                  >
                    <a
                      className="btn"
                      href={item.app}
                      title={item.creation}
                      target="_blank"
                      rel="noreferrer"
                      role="button"
                    >
                      live app
                    </a>
                    <a
                      className="btn"
                      href={item.code}
                      title={`GitHub Repo: ${item.creation}`}
                      target="_blank"
                      rel="noreferrer"
                      role="button"
                    >
                      code
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .media-body {
          text-align: left;
        }
        .media {
          background-color: rgba(159, 135, 175, 0.8);
        }
        .title {
          color: #fff;
        }
        a:hover {
          background-color: #88527f;
          color: #fff;
        }
        a {
          background-color: #614344;
          border: solid 1px #b1ddf1;
          color: #b1ddf1;
          text-decoration: none;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  );
}

export default Creations;
