export type postDataTypes = {
    id: string
    title: string
    description: string
    creation_date: string
    author: string
}

export type postCommentsTypes = {
    comment: string
    creation_date: string
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
}

export type addCommentFormFields = {
    author: string
    comment: string
    datetime: string
}
