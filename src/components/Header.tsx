import ToggleTheme from './ui/ToggleTheme'
import { toast } from 'sonner'
import { AppContext } from '../App'
import { useContext } from 'react'

export default function Header() {
    const {theme, switchTheme} = useContext(AppContext);

    return (
        <header className="flex justify-between dark:bg-black mb-32 dark:text-white">
            <div className="text-md font-semibold transition-transform hover:translate-x-1 hover:translate-y-1 ml-5 mt-5">bastien</div>
            <div className="flex gap-6 mr-5 mt-5">
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
                        className="hover:text-black dark:text-gray-400 hover:dark:text-white transition duration 300">Resume</a>
                    <a href="#" className="hover:text-black dark:text-gray-400 hover:dark:text-white transition duration 300">Projects</a>
                    <a href="#" className="hover:text-black dark:text-gray-400 hover:dark:text-white transition duration 300">Contact</a>
                    <ToggleTheme switchTheme={switchTheme} />
                </div>
            </div>
        </header>
    )
}