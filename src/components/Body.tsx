import { ProjectCarousel } from "./ProjectCarousel";

export default function Body() {
    
    return (
        <div className="flex flex-col bg-white dark:bg-black mt-44 dark:text-white">
            <div className="flex flex-col gap-2 justify-center m-auto"> {/* This div is the first section*/}
                <div className="">
                    <pre className="font-bold text-[60px] font-sans text-center">{"Hi, I'm Bastien"}</pre>
                    <div className="mt-1 text-2xl text-gray-500 dark:text-gray-400 relative w-[max-content] caret-gray-500 dark:caret-gray-400 before:absolute before:inset-0 before:animate-typewriter dark:before:bg-black before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-gray-400 caret-block">
                        I like to write nice code. Welcome to my portfolio.
                        </div>
                </div>
                <div></div>
                <div className="">
                    <iframe src="_.gif" height={540} width={540} className="rounded invert dark:invert-0"></iframe>
                </div>
            </div>

            <div className="flex flex-col gap-8 justify-evenly mt-44"> {/* This div is the second section*/}
                <pre className="mt-4 font-bold text-[40px] font-sans ml-48">{"About \nMe"}</pre>
            </div>

            <div className="flex flex-col gap-2 justify mt-44 ml-10"> {/* This div is the second section*/}
                <pre className="mt-4 font-bold text-[40px] font-sans">{"My \nProjects"}</pre>
                <div className="grid grid-cols-4 gap-8 mt-4">
                    <div className="basis-3/12 text-gray-500 dark:text-gray-400 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className="col-start-2 col-span-2 flex-center">
                        <ProjectCarousel />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 justify-evenly mt-44"> {/* This div is the second section*/}
                <pre className="mt-4 font-bold text-[40px] font-sans ml-48">{"Skills"}</pre>
            </div>


        </div>
    )
}