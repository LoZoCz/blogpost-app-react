import { useNavigate } from 'react-router-dom'
import { postDataTypes } from '../../types/types'
import usePost from '../../hooks/usePost'
import { truncateText } from '../../utils/truncateText'

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
            className="flex min-h-[12rem] cursor-pointer flex-col gap-4 rounded-md bg-contrast/50 p-4 shadow-lg outline outline-1 outline-bluish-600/25 dark:outline-contrast/15"
        >
            <div className="flex justify-between gap-4">
                <h2 className="w-[65%] text-2xl font-semibold text-letter">
                    {truncateText(data?.title, 70)}
                </h2>
                <p className="text-right text-letter/85">
                    {data?.creation_date}
                </p>
            </div>
            <p id="description" className="max-w-[75%] text-letter/85">
                {truncateText(data?.description, 80)}
            </p>
            <div className="mt-auto flex justify-between gap-4 justify-self-end">
                <p className="text-sm text-letter/50">{data?.author}</p>
                <p className="text-right text-sm text-letter/70">
                    Comments: {postComments?.length || 0}
                </p>
            </div>
        </article>
    )
}

export default PostBox
