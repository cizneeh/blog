import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'

const Home = () => {
  return (
    <>
      <Head>
        <title>Echizen no Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article>
        <h1>Shinjiro Echizen</h1>
        <h2>About Me</h2>
        <p>Webエンジニアです。Node.js, React, TypeScriptを主に描いています。</p>
        <p>詳しい職務経歴書はこちら</p>
        <ol>
          <li>Works</li>
          <li>Resume</li>
        </ol>
      </article>
    </>
  )
}

export default Home
