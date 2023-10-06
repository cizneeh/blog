import { parseISO, format } from 'date-fns'

import DateIcon from '../icons/DateIcon'

import styles from './DateFormatter.module.css'

type Props = {
  dateString: string
}

function DateFormatter({ dateString }: Props) {
  const date = parseISO(dateString)
  return (
    <div className={styles.date}>
      <DateIcon />
      <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>
    </div>
  )
}

export default DateFormatter
