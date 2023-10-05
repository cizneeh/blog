'use client'
import { IconContext } from 'react-icons'
import { FaTwitter } from 'react-icons/fa'

function TwitterIcon() {
  return (
    <IconContext.Provider value={{ size: '2rem' }}>
      <a href="https://twitter.com/cizneeh" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </IconContext.Provider>
  )
}

export default TwitterIcon
