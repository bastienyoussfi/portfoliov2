export default function Body() {
    
    return (
            <div className="flex flex-col relative mb-[100px] mt-24">
                <div className="flex gap-8"> 
                    <div className="ml-52">
                        <div className="flex flex-col justify-start max-w-[350px] border rounded border-gray-500 px-12 py-4">
                            <pre className="font-bold text-[60px] font-mono text-center flex hover:opacity-0 hover:cursor-none transition-all duration-500">{"Hi,"}</pre>
                            <pre className="font-bold text-[60px] font-mono text-center flex hover:opacity-0 hover:cursor-none transition-all duration-500">{"I'm"}</pre>
                            <pre className="font-bold text-[60px] font-mono text-center flex hover:opacity-0 hover:cursor-none transition-all duration-500">{"Bastien"}</pre>
                            <pre className="font-bold text-[60px] font-mono text-center flex hover:opacity-0 hover:cursor-none transition-all duration-500">{"Youssfi"}</pre>
                        </div>
                        <div className="ml-[30px] mt-7">
                            <img src="1.jpeg" className="bg-transparent p-4 grayscale hover:grayscale-0 transition-all duration-1000 text-gray-400 text-mono mt-6 ml-32 border rounded border-gray-500 max-w-[200px]">
                            </img>
                        </div>
                    </div>
                    <div className="pt-[150px]">
                        <div className="bg-transparent w-auto h-auto p-8 text-gray-300 text-mono mt-20 overflow-auto border rounded border-gray-500 max-w-[200px]">
                            I am a full-stack developer with a passion for creating beautiful things. I like art, alternative ideas, video games and getting inspired by others.
                        </div>
                    </div>
                    <div className="bg-black ">

                    </div>
                </div>
                
            </div>

    )
}