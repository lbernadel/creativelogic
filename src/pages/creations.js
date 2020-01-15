import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'

import Layout from '../components/layout'

function fetcher(url) {
  return fetch(url).then(res => res.json())
}

const Creations = () => {
  const {data, error} = useSWR('api/randomCreation', fetcher)

  {data && data.author
    if(!data) creation = "Loading..."
    if(error) creation = "Failed to fetch the creation."
  }

  return(
  <Layout>
    <Head>
      <title>Creations | Creative Logic</title>
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