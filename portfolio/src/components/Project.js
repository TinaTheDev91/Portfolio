import React from "react";
import { projectData } from "./ProjectData";

export default function Project (props) {


   let name = props.name;
   let image = props.image;
   let link = props.link;

   
    return (
        <div className="project-list">
            <div className="projectCard card w-96 glass">
            <figure><img src={image} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Site Information here</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={link}>Visit here</button>
                </div>
            </div>
            </div>
        </div>

    
    )
}


