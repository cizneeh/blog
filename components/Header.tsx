import Link from 'next/link'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h2 className="title">Echizen no Blog</h2>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
