import { FC } from 'react'
import video from '../../assets/images/blogVideo.mp4'

const HeroSection: FC = () => {
    return (
        <section className="grid h-96 place-items-center gap-2">
            <h1 className="z-10 text-center text-4xl font-semibold">
                ChatNiche - Blog about everything
            </h1>
            <div className="absolute left-0 top-[10rem] h-96 w-full mobile:top-[7rem]">
                <video
                    className="h-full w-full object-cover opacity-70 dark:opacity-40"
                    autoPlay
                    loop
                    muted
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default HeroSection
