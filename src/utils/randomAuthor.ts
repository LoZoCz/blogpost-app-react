export const randomAuthor = () => {
    const randomNums = Math.floor(Math.random() * 200) + 100

    return `Anonymous_${randomNums}`
}
