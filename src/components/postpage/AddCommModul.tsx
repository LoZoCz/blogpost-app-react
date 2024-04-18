import { SubmitHandler, useForm } from 'react-hook-form'
import ErrorPara from '../addpost/ErrorPara'
import Spinner from '../addpost/Spinner'
import { addCommentFormFields } from '../../types/types'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import db from '../../data/firebase'
import { randomAuthor } from '../../utils/randomAuthor'

type Props = {
    closeModule: () => void
}

const formVariants = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
    out: {
        opacity: 0,
    },
}

const AddCommModul = ({ closeModule }: Props) => {
    const id = useParams().id
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<addCommentFormFields>()

    const onSumbit: SubmitHandler<addCommentFormFields> = async (data) => {
        try {
            if (data.author === '') {
                data = {
                    ...data,
                    author: randomAuthor(),
                }
            }

            data = {
                ...data,
                postID: id,
                creation_date: serverTimestamp(),
            }

            await addDoc(
                collection(db, import.meta.env.VITE_BD_COMMENTS_PATH),
                data
            )
            reset()
            closeModule()
        } catch (error) {
            setError('root', { message: 'Something went wrong' })
        }
    }

    return (
        <>
            <motion.form
                variants={formVariants}
                initial="initial"
                animate="in"
                exit="out"
                className="absolute left-1/2 top-1/3 z-10 m-0 w-[95%] -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-md bg-basic p-4 dark:bg-bluish-600 mobile:w-[70%] tablet:top-1/2 tablet:max-w-[35%]"
                onSubmit={handleSubmit(onSumbit)}
            >
                <div className="flex justify-between gap-2">
                    <h1 className="text-3xl">Add new comment</h1>
                    <button
                        type="button"
                        onClick={() => closeModule()}
                        className="group rounded-md bg-bluish-300 p-2 text-lg font-semibold transition-colors duration-300 hover:bg-bluish-600 dark:bg-redish-300 dark:hover:bg-redish-600"
                    >
                        <XMarkIcon className="size-6 text-letter transition-colors duration-300 group-hover:text-contrast dark:text-basic" />
                    </button>
                </div>
                <div className="space-y-2">
                    <label className="block">Author</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="mb-2 block rounded-md bg-contrast/50 p-2 text-letter outline outline-1 outline-bluish-600/25  placeholder:text-letter/75 dark:outline-contrast/15"
                        {...register('author')}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block">Comment</label>
                    <textarea
                        wrap="soft"
                        rows={7}
                        placeholder="Enter your comment here"
                        className="mb-2 block w-full rounded-md bg-contrast/50 p-2 text-letter outline outline-1 outline-bluish-600/25  placeholder:text-letter/75 dark:outline-contrast/15"
                        {...register('comment', {
                            required: 'Comment field is required!',
                        })}
                    />
                    {errors.comment && (
                        <ErrorPara>{errors.comment.message}</ErrorPara>
                    )}
                </div>
                <button
                    type="submit"
                    value="Add"
                    disabled={isSubmitting}
                    className="mx-auto block w-fit cursor-pointer rounded-md bg-bluish-300 p-2 px-8 py-2 text-2xl font-semibold text-letter transition-colors duration-300 hover:bg-bluish-600 hover:text-contrast dark:bg-redish-300 dark:text-basic dark:hover:bg-redish-600"
                >
                    {isSubmitting ? <Spinner size="size-8" /> : 'Add comment'}
                </button>
                {errors.root && <ErrorPara>{errors.root.message}</ErrorPara>}
            </motion.form>
            <span
                onClick={() => closeModule()}
                className="absolute inset-0 bg-letter/40"
            />
        </>
    )
}

export default AddCommModul
