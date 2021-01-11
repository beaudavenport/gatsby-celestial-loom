import moment from 'moment';

export const isPastEvent = (eventDate) => {
  return moment().isAfter(moment(eventDate, 'MMMM DD, YYYY').add(1, 'days'))
}