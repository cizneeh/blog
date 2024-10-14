import '../styles/globals.css'
import 'prismjs/themes/prism-tomorrow.css'
import type { Metadata } from 'next'

import type { ReactNode } from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import styles from '../components/layout/Layout.module.css'

type Props = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Shinjiro Echizen',
  description: "Shinjiro Echizen's website",
}

function Layout({ children }: Props) {
  return (
    // rootレイアウトではhtmlタグとbodyタグが必須
    <html lang="ja">
      <body>
        <Header />
        <main className={styles.container}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
