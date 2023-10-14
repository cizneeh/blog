import Image from 'next/image'

import { Work } from '../../app/works/page'
import ExternalLinkIcon from '../icons/ExternalLinkIcon'

import styles from './WorkItem.module.css'

type Props = {
  work: Work
}

// TODO: 画像サイズちゃんと調整
function WorkItem({ work }: Props) {
  return (
    <li className={styles.work}>
      <h2>
        <a href={work.url}>{work.title}</a>
      </h2>
      {work.thumbnailUrl && (
        <a href={work.url}>
          <Image
            src={`/${work.thumbnailUrl}`}
            alt={work.title}
            width={600}
            height={400}
          />
        </a>
      )}
      <p>使用技術: {work.techStack.join(', ')}</p>
      {work.description.map((desc, i) => (
        <p key={i}>{desc}</p>
      ))}
      {work.githubUrl && (
        <p>
          <a href={work.githubUrl} target="_blank" rel="noreferrer">
            GitHubで見る
          </a>
          <ExternalLinkIcon />
        </p>
      )}
    </li>
  )
}

export default WorkItem
