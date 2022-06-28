import { FaGithub, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://twitter.com/cizneeh" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/cizneeh" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
