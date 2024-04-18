import { useEffect, useState } from 'react'
import db from '../data/firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import { postDataTypes } from '../types/types'
import { timeConversion } from '../utils/timeConversion'

const usePostsList = () => {
    const [postList, setPostList] = useState<postDataTypes[] | null>(null)

    useEffect(() => {
        onSnapshot(collection(db, 'posts'), (snapshot) => {
            setPostList(
                snapshot.docs.map((doc) => {
                    const post = doc.data()

                    const postData = {
                        id: doc.id,
                        title: post.title || '',
                        description: post.description || '',
                        creation_date: timeConversion(post.creation_date) || '',
                        author: post.author || '',
                    }

                    return postData
                })
            )
        })
    }, [])

    return postList
}

export default usePostsList
