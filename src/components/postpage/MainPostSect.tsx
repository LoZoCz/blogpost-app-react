import BackBtn from '../BackBtn'
import MainSectionLayout from '../../layouts/MainSectionLayout'
import { useParams } from 'react-router-dom'
import usePost from '../../hooks/usePost'
import CommentBox from './CommentBox'
import { PlusCircleIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import AddCommModul from './AddCommModul'
import { AnimatePresence } from 'framer-motion'

const MainPostSect = () => {
    const id = useParams().id
    const { postData, postComments } = usePost(id)
    const [showModule, setShowModule] = useState(false)

    const toggleModule = () => {
        setShowModule(!showModule)
    }

    return (
        <MainSectionLayout>
            <BackBtn />
            <article className="flex justify-between gap-4">
                <div>
                    <h1 className="mb-2 text-4xl font-semibold">
                        {postData?.title}
                    </h1>
                    <p className="text-letter/70 dark:text-contrast/85">
                        {postData?.author}
                    </p>
                </div>
                <p className="text-right text-letter/50 dark:text-contrast/50">
                    {postData?.creation_date}
                </p>
            </article>
            <p className="max-w-[85%] text-letter/85 dark:text-contrast/85">
                {postData?.description}
            </p>
            <h2 className="pt-6 text-2xl">
                Comments{' '}
                <span className="text-letter/50 dark:text-contrast/50">
                    {postComments?.length || 0}
                </span>
            </h2>
            <article className="space-y-6">
                {postComments &&
                    postComments.map((comment, index) => (
                        <CommentBox data={comment} key={index} />
                    ))}
                <div
                    onClick={() => toggleModule()}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-6 outline outline-1 outline-bluish-600/25 transition-colors duration-300 hover:bg-bluish-600/10 dark:outline-contrast/15 dark:hover:bg-contrast/10"
                >
                    <p className="text-xl">Add a comment</p>
                    <PlusCircleIcon className="size-6 text-letter dark:text-contrast" />
                </div>
            </article>
            <div>
                <AnimatePresence>
                    {showModule && (
                        <AddCommModul closeModule={() => toggleModule()} />
                    )}
                </AnimatePresence>
            </div>
        </MainSectionLayout>
    )
}

export default MainPostSect
