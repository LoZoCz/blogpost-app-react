type Props = {
    children: React.ReactNode
}

const ErrorPara = ({ children }: Props) => {
    return (
        <p className="rounded-md text-redish-600 dark:text-red-200">
            {children}
        </p>
    )
}

export default ErrorPara
