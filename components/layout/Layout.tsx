import { ReactNode } from 'react'
import Footer from './Footer'
import MyHead from './MyHead'
import Header from './Header'
import styles from './Layout.module.css'

type Props = {
  children: ReactNode
  title?: string
}

function Layout({ children, title }: Props) {
  return (
    <>
      <MyHead title={title} />
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
