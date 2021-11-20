import './style.css';
import { saveLocal, loadLocal, projectList } from './storage';
import Project from './project';
import Task from './task';

const viewAllBtn = document.querySelector('#viewAllBtn');
const addCatBtn = document.querySelector('#addCatBtn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-close');
const projectsDisplay = document.querySelector('#projectsDisplay');
loadLocal();

function focusOneProject(project) {
    projectsDisplay.innerHTML = '';
    let displayContainer = document.createElement('div');
    let contentContainer = document.createElement('div');
    let displayTitle = document.createElement('p');
    let displayDesc = document.createElement('p');
    let displayCategories = document.createElement('div');
    let projectTasks = displayTasks(project)

    displayContainer.classList.add('tile', 'box', `is-${project.color}`, 'is-vertical');
    contentContainer.classList.add('content');
    displayTitle.classList.add('title');
    displayDesc.classList.add('subtitle');
    displayCategories.classList.add('subtitle');

    displayTitle.textContent = project.title;
    displayTitle.onclick = () => {
        focusOneProject(project)
    }
    displayDesc.textContent = project.desc;
    displayCategories.textContent = `Categories: ${project.categories}`

    contentContainer.appendChild(displayTitle);
    contentContainer.appendChild(displayDesc);
    contentContainer.appendChild(displayCategories);
    contentContainer.appendChild(projectTasks);
    displayContainer.appendChild(contentContainer);
    projectsDisplay.appendChild(displayContainer);
}

function displayCategory(category) {
    projectsDisplay.innerHTML = '';
    let categoryProjects = [];
    for (let i = 0; i < projectList.projects.length; i++) {
        if (projectList.projects[i].categories.includes(category)) {
            categoryProjects.push(projectList.projects[i])
        }
    }
    displayProjects(categoryProjects);
}

function displayTasks(project) {
    let displayContent = document.createElement('div');
    displayContent.classList.add('content');
    for (let j = 0; j < project.tasks.length; j++) {
        let taskField = document.createElement('div');
        let taskCheck = document.createElement('input');
        let taskTitle = document.createElement('label');

        taskField.classList.add('field');
        taskCheck.classList.add('is-checkradio', 'is-circle');
        taskCheck.setAttribute('type', 'checkbox');
        taskCheck.setAttribute('name', `${project.tasks[j].id}`);

        if (project.tasks[j].completed) {
            taskCheck.setAttribute('checked', 'true')
        }

        taskCheck.onclick = () => {
            project.tasks[j].completed = !project.tasks[j].completed;
            saveLocal();
            console.log(project.tasks[j])
        }

        taskTitle.setAttribute('for', `${project.tasks[j].id}`);
        taskTitle.textContent = project.tasks[j].title;

        taskField.appendChild(taskCheck);
        taskField.appendChild(taskTitle);
        displayContent.appendChild(taskField);
    }
    return displayContent;
}

function displayProjects(list) {
    for (let i = 0; i < list.length; i++) {
        let displayContainer = document.createElement('div');
        let contentContainer = document.createElement('div');
        let displayTitle = document.createElement('p');
        let displayDesc = document.createElement('p');
        let projectTasks = displayTasks(list[i])

        displayContainer.classList.add('box', 'notification', `is-${list[i].color}`, 'mx-3');
        contentContainer.classList.add('content');
        displayTitle.classList.add('title','projectTitle');
        displayDesc.classList.add('subtitle');

        displayTitle.textContent = list[i].title;
        displayTitle.onclick = () => {
            focusOneProject(list[i])
        }
        displayDesc.textContent = list[i].desc;

        contentContainer.appendChild(displayTitle);
        contentContainer.appendChild(displayDesc);
        contentContainer.appendChild(projectTasks);
        displayContainer.appendChild(contentContainer);
        projectsDisplay.appendChild(displayContainer);
    }
}

function loadSidebar() {

}
/* projectList.createProject('Test3', 'This is a test3');
projectList.projects[1].addCategory('TEST3');
projectList.projects[2].addCategory('TEST3');
projectList.projects[2].addTask('Test task', 'This is a test task', 1); */
console.log(projectList.projects);

function renderSite() {
    loadSidebar();
    displayProjects(projectList.projects);
}

function toggleModal() {
    modal.classList.toggle('is-active')
}

viewAllBtn.onclick = () => {
    projectsDisplay.innerHTML = '';
    displayProjects(projectList.projects);
}

addCatBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

renderSite();

let testCategory = document.querySelector('.menu-label');
testCategory.onclick = () => {
    displayCategory('TEST')
}