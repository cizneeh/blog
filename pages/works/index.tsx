import { GetStaticProps } from 'next'
import fs from 'fs/promises'
import path from 'path'
import WorkList from '../../components/WorkList'

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

type Props = {
  works: Work[]
}

function WorkPage({ works }: Props) {
  return (
    <>
      <WorkList works={works} />
    </>
  )
}

export default WorkPage

export const getStaticProps: GetStaticProps = async () => {
  const worksDirPath = path.join(process.cwd(), 'works')
  const workFileNames = await fs.readdir(worksDirPath)
  const workFiles = workFileNames.map(filename => filename.replace(/\.ts$/, ''))

  const worksRaw = await Promise.all(workFiles.map(file => import(`../../works/${file}`)))
  const works: Work[] = worksRaw
    .map(work => work.default)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return {
    props: { works },
  }
}
