import React from "react";
import Head from "next/head";

import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>

    <>
      <h1 className="title">Hi, I'm Laurie.</h1>
    </>

    <style jsx>{`
      .title {
        width: 100%;
        padding-top: 4vh;
        line-height: 1.5;
      }
      .title,
      .description {
        text-align: center;
      }
      // .row {
      //   max-width: 880px;
      //   margin: 80px auto 40px;
      //   display: flex;
      //   flex-direction: row;
      //   justify-content: space-around;
      // }
      // .card {
      //   padding: 18px 18px 24px;
      //   width: 220px;
      //   text-align: left;
      //   text-decoration: none;
      //   color: #434343;
      //   border: 1px solid #9b9b9b;
      // }
      // .card:hover {
      //   border-color: #067df7;
      // }
      // .card h3 {
      //   margin: 0;
      //   color: #067df7;
      //   font-size: 18px;
      // }
      // .card p {
      //   margin: 0;
      //   padding: 12px 0 0;
      //   font-size: 13px;
      //   color: #333;
      // }
    `}</style>
  </Layout>
);

export default Home;
