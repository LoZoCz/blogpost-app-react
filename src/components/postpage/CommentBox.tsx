import { postCommentsTypes } from '../../types/types'
import { timeConversion } from '../../utils/timeConversion'

type Props = {
    data: postCommentsTypes | null
}

const CommentBox = ({ data }: Props) => {
    return (
        <div className="space-y-2 rounded-md p-2 outline outline-1 outline-bluish-600/25 dark:outline-contrast/15">
            <div className="flex justify-between gap-4">
                <p className="dark: text-letter/70 dark:text-contrast/50">
                    {data?.author}
                </p>
                <p className="dark: text-letter/50 dark:text-contrast/50">
                    {timeConversion(data?.creation_date)}
                </p>
            </div>
            <p className="max-w-[65%] text-letter/85 dark:text-contrast/85">
                {data?.comment}
            </p>
        </div>
    )
}

export default CommentBox
