import { parseISO, format } from 'date-fns'
import styles from './DateFormatter.module.css'

type Props = {
  dateString: string
}

function DateFormatter({ dateString }: Props) {
  console.log(dateString)
  const date = parseISO(dateString)
  return (
    <div className={styles.date}>
      <time dateTime={dateString}>{format(date, 'yyyy/MM/dd')}</time>
    </div>
  )
}

export default DateFormatter
