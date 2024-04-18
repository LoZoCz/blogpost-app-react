import moment from 'moment'
import { timeTypes } from '../types/types'

export const timeConversion = (timeData: timeTypes) => {
    const secDate = timeData.seconds
    const newDate = new Date(secDate * 1000)
    const postFormattedDate = moment(newDate).format('YYYY-MM-DD HH:mm:ss')

    return postFormattedDate
}
