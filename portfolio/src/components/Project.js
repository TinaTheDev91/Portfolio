import React from "react";

export default function Project (props) {

   let name = props.name;
   let info = props.info;
   let link = props.link;
   let image = props.image;
   
    return (
        <div className="project-list flex">
            <div className="projectCard card w-96 glass">
            <figure><img src={require(`./assets/project-ss/${image}.jpg`)} alt="application screenshot"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{info}</p>
                <div className="card-actions justify-end">
                    <a href={`${link}`} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary">Visit here</button>
                    </a>
                </div>
            </div>
            </div>
        </div>

    
    )
}


