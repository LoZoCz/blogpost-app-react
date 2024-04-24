import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode'

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode()

    return (
        <header className="tablet:max-w-[75%] mx-auto flex w-full flex-col items-center justify-between gap-4 px-4 py-8 mobile:flex-row mobile:px-8">
            <h1 className="text-4xl font-bold transition-colors duration-150 dark:text-contrast">
                BlogNiche
            </h1>
            <div className="flex gap-4">
                <button
                    onClick={() => toggleDarkMode()}
                    className="group rounded-md bg-bluish-300 px-4 py-2 text-lg font-semibold transition-colors duration-300 hover:bg-bluish-600 dark:bg-orangish-300 dark:hover:bg-orangish-600"
                >
                    {darkMode === 'light' ? (
                        <MoonIcon className="size-6 text-letter transition-colors duration-300 group-hover:text-contrast" />
                    ) : (
                        <SunIcon className="size-6 text-basic transition-colors duration-300 group-hover:text-contrast" />
                    )}
                </button>
                <Link
                    to="/add-post"
                    className="rounded-md bg-bluish-300 px-4 py-2 text-lg font-semibold text-letter transition-colors duration-300 hover:bg-bluish-600 hover:text-contrast dark:bg-orangish-300 dark:text-basic dark:hover:bg-orangish-600"
                >
                    Add post
                </Link>
            </div>
        </header>
    )
}

export default Header
