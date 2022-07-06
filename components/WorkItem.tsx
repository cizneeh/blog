import { Work } from '../pages/works'
import Image from 'next/image'

type Props = {
  work: Work
}

// TODO: 'id'的な何かを追加した方が良い気がする。ファイル名と同じみたいな。
function WorkItem({ work }: Props) {
  return (
    <li>
      <h2>{work.title}</h2>
      {work.thumbnailUrl && (
        <a href={work.url}>
          <Image src={`/${work.thumbnailUrl}`} alt={work.title} width={600} height={400} />
        </a>
      )}
      <p>使用技術: {work.techStack.join(', ')}</p>
      {work.description.map(desc => (
        <p key={work.id}>{desc}</p>
      ))}
      {work.githubUrl && (
        <p>
          <a href={work.githubUrl}>GitHubで見る</a>
        </p>
      )}
    </li>
  )
}

export default WorkItem
