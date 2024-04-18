import { useNavigate } from 'react-router-dom'
import { postDataTypes } from '../../types/types'
import usePost from '../../hooks/usePost'

type Props = {
    id: number
    data: postDataTypes | null
}

const PostBox = ({
    data = {
        id: '',
        title: '',
        description: '',
        creation_date: '',
        author: '',
    },
}: Props) => {
    const { postComments } = usePost(data?.id)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/post/${data?.id}`)
    }

    return (
        <article
            onClick={() => handleClick()}
            className="cursor-pointer space-y-4 rounded-md bg-contrast/50 p-4 shadow-lg outline outline-1 outline-bluish-600/25 dark:outline-contrast/15"
        >
            <div className="flex justify-between gap-4">
                <h2 className="text-2xl font-semibold text-letter">
                    {data?.title}
                </h2>
                <p className="text-right text-letter/85">
                    {data?.creation_date}
                </p>
            </div>
            <p className="max-w-[75%] truncate text-letter/85">
                {data?.description}
            </p>
            <div className="flex justify-between gap-4">
                <p className="text-sm text-letter/50">{data?.author}</p>
                <p className="text-right text-sm text-letter/70">
                    Comments: {postComments?.length || 0}
                </p>
            </div>
        </article>
    )
}

export default PostBox
