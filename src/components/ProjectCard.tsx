import { Card, CardContent } from "@/components/ui/card"
import { CiLink } from "react-icons/ci";

export default function ProjectCard( { title, description, github } : { title: string, description: string, github: string }) {
    return (
        <Card className="bg-white dark:bg-black border-black dark:border-gray-500">
            <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <a className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
                    <CiLink className="text-2xl self-center" />
                        <a href={github} target="_black" className="text-xs self-center">View Github</a>
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}