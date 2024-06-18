import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import info from "@/data/info"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import ProjectCard from "./ProjectCard"
 
export function ProjectCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
 
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {info.projects.map((project, index) => (
          <CarouselItem key={index}>
            <ProjectCard key={index} title={project.title} description={project.description} github={project.github}/>
          </CarouselItem>          
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}