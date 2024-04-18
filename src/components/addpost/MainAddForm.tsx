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
                className="mx-auto flex max-w-full flex-col items-center justify-center space-y-6 tablet:max-w-[50%]"
            >
                <h1 className="text-center text-3xl font-semibold mobile:text-5xl">
                    Add new Post
                </h1>
                <div className="space-y-4">
                    <div className="flex w-full flex-col items-center justify-between gap-4 tablet:flex-row">
                        <div>
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
                        <div>
                            <input
                                type="text"
                                placeholder="Author"
                                className="block w-full rounded-md bg-contrast/50 p-2 text-letter outline outline-1 outline-bluish-600/25  placeholder:text-letter/75 dark:outline-contrast/15"
                                {...register('author')}
                            />
                        </div>
                    </div>
                    <div className="mobile:w-full">
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
                            <ErrorPara>{errors.description.message}</ErrorPara>
                        )}
                    </div>
                    <button
                        type="submit"
                        value="Add"
                        disabled={isSubmitting}
                        className="mx-auto block w-fit cursor-pointer rounded-md bg-bluish-300 p-2 px-8 py-2 text-2xl font-semibold text-letter transition-colors duration-300 hover:bg-bluish-600 hover:text-contrast dark:bg-redish-300 dark:text-basic dark:hover:bg-redish-600"
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
            </form>
        </MainSectionLayout>
    )
}

export default MainAddForm
