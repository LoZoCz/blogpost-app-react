import { FC } from 'react'
import SkeletonListLoad from './SkeletonListLoad'
import PostBox from './PostBox'
import { sortPostsByCreationDate } from '../../utils/sortDates'
import usePostsList from '../../hooks/usePostsList'

const PostsList: FC = () => {
    const postList = usePostsList()

    return (
        <section className="grid grid-cols-1 gap-4 tablet:grid-cols-2">
            {postList === null ? (
                <SkeletonListLoad />
            ) : (
                sortPostsByCreationDate(postList).map((item, index) => (
                    <PostBox key={index} id={index} data={item} />
                ))
            )}
        </section>
    )
}

export default PostsList
