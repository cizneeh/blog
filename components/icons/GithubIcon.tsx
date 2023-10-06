'use client'
import { IconContext } from 'react-icons'
import { FaGithub } from 'react-icons/fa'

// TODO: iconはSVGで作る
function GithubIcon() {
  return (
    <IconContext.Provider value={{ size: '2rem' }}>
      <a href="https://github.com/cizneeh" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </IconContext.Provider>
  )
}

export default GithubIcon
