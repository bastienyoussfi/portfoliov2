export default function Projects() {
    return (
        <div className="flex flex-col gap-2 justify mt-20 ml-10"> {/* This div is the second section*/}
            <pre className="mt-4 font-bold text-[60px] font-sans">{"My \nProjects"}</pre>
            <div className="grid grid-cols-6 gap-8 mt-4">
                <div className="basis-3/12 text-gray-500 dark:text-gray-400 ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="col-start-2 col-span-2 flex-center">
                </div>
            </div>
        </div>
    )
}