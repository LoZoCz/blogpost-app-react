import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Props = {
    message: string
}

const toastVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

const Notification = ({ message }: Props) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <motion.div
            variants={toastVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="absolute bottom-4 left-4 overflow-hidden rounded-md bg-bluish-300 p-2 px-4 py-2 text-lg font-semibold text-letter dark:bg-orangish-300 dark:text-contrast"
        >
            <span className="toastSpanAnimation absolute left-0 top-0 h-1 bg-orangish-300 dark:bg-bluish-300" />
            {message}
        </motion.div>
    )
}

export default Notification
