import React from 'react';
import Projects from '../Project';
import { projectData } from '../ProjectData';

const projectList = projectData.map(project => Projects)

export default function Portfolio({ image, name, link }) {

  return (
    <div>
      <Projects 
      name={name}
      link={link}
      image={image} />
    </div>
  );
}
