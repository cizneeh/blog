import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './NavMenu.module.css'

function NavMenu() {
  type Menu = 'home' | 'works' | 'blog'

  const router = useRouter()
  const path = router.pathname.match(/([^/]+?)?$/)![0]
  const currentMenu = (path || 'home') as Menu

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={currentMenu === 'home' ? styles.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={currentMenu === 'works' ? styles.active : ''}>
          <Link href="/works">Works</Link>
        </li>
        <li className={currentMenu === 'blog' ? styles.active : ''}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
