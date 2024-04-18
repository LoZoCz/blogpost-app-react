import { useEffect, useState } from 'react'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState('light')

    const toggleDarkMode = () => {
        const newDarkMode = darkMode === 'light' ? 'dark' : 'light'
        setDarkMode(newDarkMode)
        localStorage.setItem('theme', newDarkMode)
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme === 'dark') {
            setDarkMode('dark')
            document.documentElement.classList.add('dark')
        } else {
            setDarkMode('light')
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return { darkMode, toggleDarkMode }
}

export default useDarkMode
