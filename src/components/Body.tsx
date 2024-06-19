import React, { useState, useEffect } from 'react';
import BackgroundContainer from './BackgroundContainer';

export default function Body() {
    const [selectedIndex, setSelectedIndex] = useState(0);
  const menuItems = ["Projects", "About Me", "Get in touch", "Blog", "Resume"];

  useEffect(() => {
        const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            setSelectedIndex((selectedIndex + 1) % menuItems.length);
        } else if (event.key === 'ArrowUp') {
            setSelectedIndex((selectedIndex - 1 + menuItems.length) % menuItems.length);
        }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Cleanup event listener on component unmount
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedIndex, menuItems.length]);
        
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
                    <div className="bg-transparent ">
                        <div 
                            className="flex justify-end ml-52 text-5xl px-24 mt-24"
                            >
                            <ul className="">
                                {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`p-2 cursor-pointer font-mono ${selectedIndex === index ? 'animate-bounce' : ''}`}
                                >
                                    {selectedIndex === index && <span className="mr-2">&gt;</span>}
                                    {item}
                                </li>
                                ))}
                                <li className="p-2 mt-4 text-gray-300 text-lg bg-gray-700 rounded bg-opacity-40 font-mono pl-3 max-w-[220px]">Use arrows to move</li>
                            </ul>
                        </div>
                    </div>
                    <BackgroundContainer />
                </div>                
            </div>
    )
}