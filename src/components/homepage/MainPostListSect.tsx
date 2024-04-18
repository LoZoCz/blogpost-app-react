import PostBox from './PostBox'
import usePostsList from '../../hooks/usePostsList'
import MainSectionLayout from '../../layouts/MainSectionLayout'
import SkeletonListLoad from './SkeletonListLoad'
import { sortPostsByCreationDate } from '../../utils/sortDates'

const MainSect = () => {
    const postList = usePostsList()

    return (
        <MainSectionLayout>
            {postList === null ? (
                <SkeletonListLoad />
            ) : (
                sortPostsByCreationDate(postList).map((item, index) => (
                    <PostBox key={index} id={index} data={item} />
                ))
            )}
        </MainSectionLayout>
    )
}

export default MainSect
