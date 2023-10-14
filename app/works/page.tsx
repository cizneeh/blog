import fs from 'fs/promises'
import path from 'path'

import WorkList from '../../components/page/WorkList'

// TODO: 型どっかにまとめる
export type Work = {
  id: string
  title: string
  techStack: string[]
  category: string
  url: string
  description: string[]
  date: string
  thumbnailUrl?: string
  githubUrl?: string
}

export default async function WorkPage() {
  const works = await fetchPosts()

  return (
    <>
      <h1>作ったものたち</h1>
      <WorkList works={works} />
    </>
  )
}

const fetchPosts = async (): Promise<Work[]> => {
  const worksDirPath = path.join(process.cwd(), 'works')
  const workFileNames = await fs.readdir(worksDirPath)
  const workFiles = workFileNames.map((filename) =>
    filename.replace(/\.ts$/, ''),
  )

  // TODO: 型
  const worksRaw = await Promise.all(
    workFiles.map((file) => import(`../../works/${file}`)),
  )
  return worksRaw
    .map((work) => work.default)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
