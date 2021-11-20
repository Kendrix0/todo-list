import './style.css';
import { saveLocal, loadLocal, projectList } from './storage';
import Project from './project';
import Task from './task';

const viewAllBtn = document.querySelector('#viewAllBtn');
const addCatBtn = document.querySelector('#addCatBtn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-close');
const projectsDisplay = document.querySelector('#projectsDisplay');

const projectFormTitle = document.querySelector('#projectFormTitle');
const projectFormDesc = document.querySelector('#projectFormDesc');
const projectFormColor = document.querySelector('#projectFormColor');
const projectFormCategories = document.querySelector('#projectFormCategories');
const submitFormBtn = document.querySelector('#submitProjectForm');
const cancelFormBtn = document.querySelector('#cancelProjectForm');


function submitProjectForm() {

}

function clearProjectForm() {
    projectFormTitle.value = '';
    projectFormDesc.value = '';
    projectFormColor.value = "white";
    projectFormCategories.value = '';
}

function createDisplay(projects, single) {
    let displayContainer = document.createElement('div');
    let contentContainer = document.createElement('div');
    let displayTitle = document.createElement('p');
    let displayDesc = document.createElement('p');
    let projectTasks = displayTasks(projects)

    displayContainer.classList.add('box', 'notification', `is-${projects.color}`, 'is-vertical');
    contentContainer.classList.add('content');
    displayTitle.classList.add('title');
    displayDesc.classList.add('subtitle');


    displayTitle.textContent = projects.title;
    displayTitle.onclick = () => {
        focusOneProject(projects)
    }
    displayDesc.textContent = projects.desc;

    contentContainer.appendChild(displayTitle);
    contentContainer.appendChild(displayDesc);
    if (single) {
        displayContainer.classList.add('tile');
        
        let displayCategories = document.createElement('div');
        displayCategories.classList.add('subtitle');
        displayCategories.textContent = `Categories: ${projects.categories}`
        contentContainer.appendChild(displayCategories);

    } else {
        displayContainer.classList.add('mx-3');
        displayTitle.classList.add('projectTitle');
        
    }
    contentContainer.appendChild(projectTasks);
    displayContainer.appendChild(contentContainer);
    projectsDisplay.appendChild(displayContainer);
}

function focusOneProject(project) {
    projectsDisplay.innerHTML = '';
    createDisplay(project, true);
}

function displayCategory(category) {
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
    projectsDisplay.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
        createDisplay(list[i], false)
    }
}

function loadSidebar() {

}

/* projectList.createProject('Test3', 'This is a test3');
projectList.projects[1].addCategory('TEST3');
projectList.projects[2].addCategory('TEST3');
projectList.projects[2].addTask('Test task', 'This is a test task', 1);
console.log(projectList.projects); */

function renderSite() {
    loadLocal();
    loadSidebar();
    displayProjects(projectList.projects);
}

function toggleProjectForm() {
    modal.classList.toggle('is-active')
}

viewAllBtn.onclick = () => {
    projectsDisplay.innerHTML = '';
    displayProjects(projectList.projects);
}

addCatBtn.addEventListener('click', toggleProjectForm);
closeModalBtn.onclick = () => {toggleProjectForm()};
cancelFormBtn.onclick = () => {clearProjectForm(); toggleProjectForm()};
submitFormBtn.onclick = () => {
    projectList.createProject(projectFormTitle.value,projectFormDesc.value, projectFormColor.value, projectFormCategories.value.split(' '));
    displayProjects(projectList.projects);
    clearProjectForm();
    toggleProjectForm()
};
renderSite();

let testCategory = document.querySelector('.menu-label');
testCategory.onclick = () => {
    displayCategory('test2');

}