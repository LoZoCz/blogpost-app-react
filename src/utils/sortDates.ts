import { postCommentsTypes, postDataTypes } from '../types/types'

export const sortPostsByCreationDate = (arr: postDataTypes[]) => {
    return [...arr].sort((a, b) => {
        return Number(b.creation_date) - Number(a.creation_date)
    })
}

export const sortCommsByCreationDate = (arr: postCommentsTypes[]) => {
    return [...arr].sort((a, b) => {
        return Number(b.creation_date) - Number(a.creation_date)
    })
}
