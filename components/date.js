import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  console.log('######### Date > from=', dateString, ', to=', date);
  return <time dateTime={dateString}>{format(date, 'yyyy.MM.dd (EEEE)')}</time>;
}