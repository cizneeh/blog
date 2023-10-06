import GithubIcon from '../icons/GithubIcon'
import TwitterIcon from '../icons/TwitterIcon'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.icons}>
        <li>
          <address>
            <TwitterIcon />
          </address>
        </li>
        <li>
          <address>
            <GithubIcon />
          </address>
        </li>
      </ul>
      <p className={styles.copyright}>
        <small>&copy; 2023 Echizen</small>
      </p>
    </footer>
  )
}

export default Footer
