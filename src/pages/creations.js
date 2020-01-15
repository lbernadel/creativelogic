import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'

import Layout from '../components/layout'

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

function Creations() {
  const {data, error} = useSWR('api/randomCreation', fetcher)
  const author = data?.author
  let creation = data?.creation

    if(!data) creation = "Loading..."
    if(error) creation = "Uh-oh! Failed to fetch the creations."

  return(
  <Layout>
    <Head>
      <title>Creations | Creative Logic</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
    </Head>

    <div className="container">
      <h1>Creations</h1>
      <div>
        {creation}
      </div>
  {author && <span>- {author}</span>}
    </div>
  </Layout>
);
}

export default Creations;