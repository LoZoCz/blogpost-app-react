type Props = {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <main className="relative min-h-screen w-full bg-basic font-merri text-letter transition-colors duration-150 dark:bg-bluish-600 dark:text-contrast">
            {children}
        </main>
    )
}

export default MainLayout
