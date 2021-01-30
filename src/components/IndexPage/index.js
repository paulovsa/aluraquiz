import React from 'react';
import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Alura Quiz - Breaking Bad</title>
        <meta property="og:title" content="Alura Quiz - Breaking Bad" key="title" />
        <meta property="og:description" content="Projeto desenvolvido durante a Imersão React/NextJs by Alura." key="title" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" key="title" />
      </Head>
    </div>
  );
}

export default IndexPage;
