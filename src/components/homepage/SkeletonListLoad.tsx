const SkeletonListLoad = () => {
    return (
        <>
            {Array.from({ length: 4 }, (_, i) => (
                <article
                    key={i}
                    className="bg-contrast/50 outline-bluish-600/25 dark:outline-contrast/75 space-y-4 rounded-md p-4 shadow-lg outline outline-1"
                >
                    <div className="flex justify-between gap-4">
                        <span className="bg-contrast dark:bg-basic/15 block h-8 w-3/4 animate-pulse rounded"></span>
                        <span className="bg-contrast dark:bg-basic/15 block h-6 w-20 animate-pulse rounded"></span>
                    </div>
                    <span className="bg-contrast dark:bg-basic/15 block h-5 w-2/3 animate-pulse rounded"></span>
                    <div className="flex justify-between gap-4">
                        <span className="bg-contrast dark:bg-basic/15 block h-5 w-1/4 animate-pulse rounded"></span>
                        <span className="bg-contrast dark:bg-basic/15 block h-5 w-24 animate-pulse rounded"></span>
                    </div>
                </article>
            ))}
        </>
    )
}

export default SkeletonListLoad
