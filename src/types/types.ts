import firebase from 'firebase/compat/app'
import { Timestamp } from 'firebase/firestore'

export type postDataTypes = {
    id: string
    title: string
    description: string
    creation_date: timeTypes
    author: string
}

export type postCommentsTypes = {
    comment: string
    creation_date: timeTypes
    author: string
}

export type timeTypes = {
    seconds: number
    miliseconds: number
}

export type addPostFormFields = {
    title: string
    author: string
    description: string
    creation_date: Timestamp | firebase.firestore.FieldValue
}

export type addCommentFormFields = {
    author: string
    comment: string
    datetime: string
    postID: string | undefined
    creation_date: Timestamp | firebase.firestore.FieldValue
}
