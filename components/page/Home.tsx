import Head from 'next/head'
import Link from 'next/link'

import ExternalLinkIcon from '../icons/ExternalLinkIcon'

import styles from './Home.module.css'

function Home() {
  return (
    <>
      <Head>
        <title>Echizen no Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article className={styles.home}>
        <h1>Shinjiro Echizen</h1>
        <section>
          <h2>About Me</h2>
          <p>Webエンジニアです。Node.js, React, TypeScriptを触っていることが多いです。</p>
          <ul className={styles.list}>
            <li>
              <Link href="/works">今までに作ったもの</Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>Links</h2>
          <ul className={styles.list}>
            <li>
              <address>
                <a href="https://twitter.com/cizneeh" target="_blank" rel="noreferrer">
                  Twitter
                </a>
                <ExternalLinkIcon />
              </address>
            </li>
            <li>
              <address>
                <a href="https://github.com/cizneeh" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <ExternalLinkIcon />
              </address>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}

export default Home
