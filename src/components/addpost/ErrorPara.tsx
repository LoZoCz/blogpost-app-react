type Props = {
    children: React.ReactNode
}

const ErrorPara = ({ children }: Props) => {
    return (
        <p className="text-orangish-600 rounded-md dark:text-red-200">
            {children}
        </p>
    )
}

export default ErrorPara
