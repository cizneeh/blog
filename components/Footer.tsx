import GithubIcon from './icons/GithubIcon'
import TwitterIcon from './icons/TwitterIcon'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.icons}>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <GithubIcon />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
