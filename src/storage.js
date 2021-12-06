import Project from './project';
import Library from './library';
import Categories from './categories';

export const projectList = new Library();
export const categoryList = new Categories();
let localData = window.localStorage;

export function saveLocal() {
    localData.setItem('projectList', JSON.stringify(projectList.projects))
    localData.setItem('categoryList', JSON.stringify(categoryList.categories))
}

export function loadLocal() {
    const projects = JSON.parse(localData.getItem('projectList'));
    if (projects) {
        projectList.projects = projects.map(project => new Project(project.title, project.desc, project.color, project.categories, project.date, project.time, project.completed, project.tasks))
    } else {
        projectList.projects = []
    };

    const categories = JSON.parse(localData.getItem('categoryList'));
    if (categories) {
        categoryList.categories = categories.map(category => category)
    }
    console.log(projectList.projects);
    console.log(categoryList.categories);
}