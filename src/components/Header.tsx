import { toast } from 'sonner'

export default function Header() {

    return (
        <header className="relative flex justify-between dark:text-white font-mono text-xl mt-4">
            <a href="#" className="text-md font-semibold transition-transform hover:translate-x-1 hover:translate-y-1 ml-10 mt-5 hover:cursor-pointer">by'</a>
            <div className="flex gap-6 mr-10 mt-5">
                <div className="flex gap-6 text-gray-500">
                        <a href="#" 
                        onClick={() =>
                            toast("Resume is downloading", {
                            description: "Sunday, December 03, 2023 at 9:00 AM",
                            action: {
                                label: "Undo",
                                onClick: () => console.log("Undo"),
                            },
                            })
                        } 
                        className="hover:text-black dark:text-gray-400 hover:dark:text-white transition duration-300 text-lg">[resume]</a>
                </div>
            </div>
        </header>
    )
}