import { Link } from 'react-router-dom'
import { ArrowUturnLeftIcon } from '@heroicons/react/16/solid'

const BackBtn = () => {
    return (
        <Link
            to="/"
            className="group mb-10 flex w-fit gap-4 rounded-md bg-bluish-300 px-4 py-2 text-lg font-semibold text-letter transition-colors duration-300 hover:bg-bluish-600 hover:text-contrast dark:bg-redish-300 dark:text-basic dark:hover:bg-redish-600"
        >
            <ArrowUturnLeftIcon className="size-6 text-letter transition-colors duration-300 group-hover:text-contrast dark:text-basic dark:group-hover:text-contrast" />{' '}
            Back
        </Link>
    )
}

export default BackBtn
