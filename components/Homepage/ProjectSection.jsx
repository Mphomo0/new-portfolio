import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./projects/ProjectCard";

export default function ProjectSection() {
  return (
    <div id='projects' className='relative z-50  my-12 lg:my-24'>
      <div className='sticky top-10 mb-40'>
        <div className='w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30'></div>
        <div className='flex items-center justify-start relative'>
          <span className='bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md'>
            PROJECTS
          </span>
          <span className='w-full h-[2px] bg-[#1a1443]'></span>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-4 mx-auto justify-items-center justify-content-center'>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
