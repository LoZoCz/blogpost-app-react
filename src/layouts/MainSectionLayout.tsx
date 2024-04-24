import { motion } from 'framer-motion'

type Props = {
    children: React.ReactNode
}

const mainVariants = {
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

const MainSectionLayout = ({ children }: Props) => {
    return (
        <motion.section
            initial="initial"
            animate="in"
            exit="out"
            variants={mainVariants}
            className="mx-auto max-w-[90rem] space-y-4 p-4 tablet:p-6"
        >
            {children}
        </motion.section>
    )
}

export default MainSectionLayout
