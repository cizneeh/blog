import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import HamburgerIcon from '../icons/HamburgerIcon'
import XIcon from '../icons/XIcon'
import styles from './Header.module.css'
import NavMenu from './NavMenu'

function Header() {
  const router = useRouter()
  const [navActive, setNavActive] = useState(false)

  // set the mobile nav menu hidden after navigating a page
  const handleComplete = () => {
    setNavActive(false)
  }
  useEffect(() => {
    router.events.on('routeChangeComplete', handleComplete)

    return () => {
      router.events.off('routeChangeComplete', handleComplete)
    }
  }, [])

  function toggelNavVisibility() {
    setNavActive(!navActive)
  }

  return (
    <header>
      <div className={styles.header}>
        <h2 className="title">
          <Link href="/">Echizen no Blog</Link>
        </h2>

        <div className={styles.nav_menu_pc}>
          <NavMenu />
        </div>

        <button className={styles.nav_button} onClick={toggelNavVisibility}>
          {navActive ? <XIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {navActive && (
        <div className={styles.nav_menu_mobile}>
          <NavMenu />
        </div>
      )}
    </header>
  )
}

export default Header
