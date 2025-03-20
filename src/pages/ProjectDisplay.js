import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub'
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams()
    const project = ProjectList[id]
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <a href='' target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} />
            </a>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <p>
                <b>Description:</b> {project.description}
            </p>
            <a href='https://github.com/Victorjota-web' target="_blank" rel="noopener noreferrer" ><GitHubIcon /></a>
        </div>
    )
}

export default ProjectDisplay
