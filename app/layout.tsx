import '../styles/globals.css'
import 'prismjs/themes/prism-tomorrow.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'

import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

import styles from './layout/Layout.module.css'

type Props = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Shinjiro Echizen',
  description: "Shinjiro Echizen's website",
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
