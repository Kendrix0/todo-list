import Project from './project';
import Library from './library';

export const projectList = new Library();
let localData = window.localStorage;

export function saveLocal() {
    localData.setItem('projectList', JSON.stringify(projectList.projects))
}

export function loadLocal() {
    const projects = JSON.parse(localData.getItem('projectList'))
    if (projects) {
        projectList.projects = projects.map(project => new Project(project.title, project.desc, project.color, project.time, project.completed, project.tasks, project.categories))
    } else {
        projectList.projects = []
    }
    console.log(projectList.projects)
}