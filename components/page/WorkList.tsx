import { Work } from '../../app/works/page'

import WorkItem from './WorkItem'

type Props = {
  works: Work[]
}

function WorkList({ works }: Props) {
  return (
    <ul>
      {works.map((work) => (
        <WorkItem key={work.title} work={work} />
      ))}
    </ul>
  )
}

export default WorkList
