export const truncateText = (text: string | undefined, maxLength: number) => {
    if (!text) return ''

    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'
    }

    return text
}
