import { useEffect, useState } from 'react'
import db from '../data/firebase'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { postCommentsTypes, postDataTypes } from '../types/types'
import { timeConversion } from '../utils/timeConversion'

const usePost = (postId: string | undefined) => {
    const [postData, setPostData] = useState<postDataTypes | null>(null)
    const [postComments, setPostComments] = useState<
        postCommentsTypes[] | null
    >(null)

    useEffect(() => {
        if (!postId) return

        onSnapshot(
            doc(db, import.meta.env.VITE_BD_POSTS_PATH, postId),
            async (snapshot) => {
                if (!snapshot.exists()) {
                    throw new Error('Post not found')
                }

                const post = snapshot.data()

                setPostData({
                    id: snapshot.id,
                    title: post.title || '',
                    description: post.description || '',
                    creation_date: timeConversion(post.creation_date) || '',
                    author: post.author || '',
                })
            }
        )

        onSnapshot(
            collection(db, import.meta.env.VITE_BD_COMMENTS_PATH),
            (snapshot) => {
                const filteredSnapshot = snapshot.docs.filter(
                    (comm) => comm.data().postID === postId
                )

                setPostComments(
                    filteredSnapshot.map((comm) => ({
                        comment: comm.data().comment || '',
                        creation_date:
                            timeConversion(comm.data().creation_date) || '',
                        author: comm.data().author || '',
                    }))
                )
            }
        )
    }, [postId])

    return { postData, postComments }
}

export default usePost
