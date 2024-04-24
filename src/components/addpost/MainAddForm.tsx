import { SubmitHandler, useForm } from 'react-hook-form'
import MainSectionLayout from '../../layouts/MainSectionLayout'
import BackBtn from '../BackBtn'
import Spinner from './Spinner'
import ErrorPara from './ErrorPara'
import db from '../../data/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { addPostFormFields } from '../../types/types'
import { useNavigate } from 'react-router-dom'
import { randomAuthor } from '../../utils/randomAuthor'
import { motion } from 'framer-motion'

const formIconVariants = {
    hidden: {
        scale: 1,
    },
    visible: {
        scale: 1.2,
    },
}

const MainAddForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<addPostFormFields>()
    const navigate = useNavigate()

    const onSumbit: SubmitHandler<addPostFormFields> = async (data) => {
        try {
            if (data.author === '') {
                data = {
                    ...data,
                    author: randomAuthor(),
                }
            }

            data = {
                ...data,
                creation_date: serverTimestamp(),
            }

            await addDoc(
                collection(db, import.meta.env.VITE_BD_POSTS_PATH),
                data
            )
            reset()
            navigate('/')
        } catch (error) {
            setError('root', { message: 'Coś poszło nie tak' })
            console.error('Error adding document: ', error)
        }
    }

    return (
        <MainSectionLayout>
            <BackBtn />
            <form
                onSubmit={handleSubmit(onSumbit)}
                className="relative flex max-w-full flex-col gap-6 tablet:flex-row"
            >
                <section className="flex flex-1 flex-col justify-center gap-4">
                    <h1 className="mb-4 text-3xl font-semibold mobile:w-full mobile:text-5xl">
                        Add new Post
                    </h1>
                    <div className="flex flex-col items-start gap-4">
                        <div className="w-full mobile:w-3/4">
                            <input
                                type="text"
                                placeholder="Title"
                                className="block w-full rounded-md bg-contrast/50 p-2 text-xl text-letter outline outline-1 outline-bluish-600/25 placeholder:text-letter/75 dark:outline-contrast/15"
                                {...register('title', {
                                    required: 'Title field is required!',
                                })}
                            />
                            {errors.title && (
                                <ErrorPara>{errors.title.message}</ErrorPara>
                            )}
                        </div>
                        <div className="w-full mobile:w-1/2">
                            <input
                                type="text"
                                placeholder="Author"
                                className="block w-full rounded-md bg-contrast/50 p-2 text-letter outline outline-1 outline-bluish-600/25  placeholder:text-letter/75 dark:outline-contrast/15"
                                {...register('author')}
                            />
                        </div>

                        <div className="w-full">
                            <textarea
                                wrap="soft"
                                rows={10}
                                placeholder="Description"
                                className="mb-2 block w-full rounded-md bg-contrast/50 p-2 text-letter outline outline-1 outline-bluish-600/25  placeholder:text-letter/75 dark:outline-contrast/15"
                                {...register('description', {
                                    required: 'Description field is required!',
                                })}
                            />
                            {errors.description && (
                                <ErrorPara>
                                    {errors.description.message}
                                </ErrorPara>
                            )}
                        </div>
                        <button
                            type="submit"
                            value="Add"
                            disabled={isSubmitting}
                            className="mx-auto block w-fit cursor-pointer rounded-md bg-bluish-300 p-2 px-8 py-2 text-2xl font-semibold text-letter transition-colors duration-300 hover:bg-bluish-600 hover:text-contrast dark:bg-orangish-300 dark:text-basic dark:hover:bg-orangish-600 mobile:mx-0"
                        >
                            {isSubmitting ? (
                                <Spinner size="size-8" />
                            ) : (
                                'Add new post'
                            )}
                        </button>
                        {errors.root && (
                            <ErrorPara>{errors.root.message}</ErrorPara>
                        )}
                    </div>
                </section>
                <section className="absolute -right-1 -top-8 hidden flex-1 place-items-center mobile:grid tablet:static">
                    <motion.div
                        variants={formIconVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            delay: 1,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            repeatDelay: 0.25,
                        }}
                        className="grid aspect-square w-1/2 place-items-center rounded-full bg-bluish-300 dark:bg-orangish-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            className="size-[75%] fill-transparent stroke-basic"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                        </svg>
                    </motion.div>
                </section>
            </form>
        </MainSectionLayout>
    )
}

export default MainAddForm
