import { Work } from '../../pages/works'
import Image from 'next/image'

type Props = {
  work: Work
}

// TODO: 画像サイズちゃんと調整
function WorkItem({ work }: Props) {
  return (
    <li>
      <h2>
        <a href={work.url}>{work.title}</a>
      </h2>
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
