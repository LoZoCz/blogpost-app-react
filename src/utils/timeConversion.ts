import moment from 'moment'
import { timeTypes } from '../types/types'

export const timeConversion = (timeData: timeTypes) => {
    const secDate = timeData?.seconds
    const newDate = new Date(secDate * 1000)
    const postFormattedDate = moment(newDate).format('DD MMMM YYYY - HH:mm')

    return postFormattedDate
}
