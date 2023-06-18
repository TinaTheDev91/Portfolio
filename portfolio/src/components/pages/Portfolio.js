import React from 'react';
import Projects from '../Project';
import { projectData } from '../ProjectData';

export default function Portfolio({ info, name, link, image }) {

  return (
    <div className='flex flex-wrap auto-cols-auto justify-center'>
      {projectData.map(project => {
        return (
        <Projects 
        name={project.name}
        link={project.link}
        info={project.info}
        image={project.image} />
        )
      })}
    </div>
  );
}
