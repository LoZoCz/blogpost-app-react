type Props = {
    size: string
}

const Spinner = ({ size }: Props) => {
    return (
        <span
            className={`mx-5 block animate-spin rounded-full border-4 border-solid border-contrast/25 border-t-bluish-600 dark:border-t-orangish-600 ${size}`}
        />
    )
}

export default Spinner
