type Props = {
    children: React.ReactNode
    overflow?: boolean
}

const MainLayout = ({ children, overflow }: Props) => {
    return (
        <main
            className={`${!overflow ? 'overflow-hidden' : ''} relative min-h-screen w-full bg-basic font-merri text-letter transition-colors duration-150 dark:bg-bluish-600 dark:text-contrast`}
        >
            {children}
        </main>
    )
}

export default MainLayout
