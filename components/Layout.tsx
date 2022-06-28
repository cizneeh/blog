import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.css'

type Props = {
  children: ReactNode
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
