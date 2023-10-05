import { ReactNode } from 'react'

import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.css'
import MyHead from './MyHead'

type Props = {
  children: ReactNode
  title?: string
}

// TODO: App Routerへの以降が完了したら消す
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
