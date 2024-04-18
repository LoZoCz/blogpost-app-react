import { postCommentsTypes, postDataTypes } from '../types/types'

export const sortPostsByCreationDate = (arr: postDataTypes[]) => {
    return [...arr].sort((a, b) => {
        const dateA = new Date(a.creation_date)
        const dateB = new Date(b.creation_date)

        return dateB.getTime() - dateA.getTime()
    })
}

export const sortCommsByCreationDate = (arr: postCommentsTypes[]) => {
    return [...arr].sort((a, b) => {
        const dateA = new Date(a.creation_date)
        const dateB = new Date(b.creation_date)

        return dateB.getTime() - dateA.getTime()
    })
}
