import React from "react";

export default function Project (props) {

   let name = props.name;
   let info = props.info;
   let link = props.link;
   let image = props.image;
   
    return (
        <div className="project-list">
            <div className="projectCard card w-96 glass">
            <figure><img src={require(`./assets/project-ss/${image}.jpg`)} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{info}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={link}>Visit here</button>
                </div>
            </div>
            </div>
        </div>

    
    )
}


