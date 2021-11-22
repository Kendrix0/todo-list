import './style.css';
import { saveLocal, loadLocal, projectList, categoryList } from './storage';
import Project from './project';
import Task from './task';

const viewAllBtn = document.querySelector('#viewAllBtn');
const createProjectBtn = document.querySelector('#createProjectBtn');
const addCatBtn = document.querySelector('#addCatBtn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-close');
const projectsDisplay = document.querySelector('#projectsDisplay');
const sideNav = document.querySelector('#sideNav');
const categoryInputField = document.querySelector('#inputField');
const categoryInput = document.querySelector('#categoryInput');
const submitCategoryBtn = document.querySelector('#submitCategoryBtn');
const cancelCategoryBtn = document.querySelector('#cancelCategoryBtn');


const projectFormTitle = document.querySelector('#projectFormTitle');
const projectFormDesc = document.querySelector('#projectFormDesc');
const projectFormColor = document.querySelector('#projectFormColor');
const projectFormCategories = document.querySelector('#projectFormCategories');
const submitFormBtn = document.querySelector('#submitProjectForm');
const cancelFormBtn = document.querySelector('#cancelProjectForm');

function formatCategories(categories) {
    let filteredCategories = []
    let splitValues = categories.value.split(' ');
    for (let i = 0; i < splitValues.length; i++) {
        if (splitValues[i] != '') {
            filteredCategories.push(splitValues[i].toLowerCase())
        }
    }
    return filteredCategories
}

function submitProjectForm() {
    projectList.createProject(projectFormTitle.value, projectFormDesc.value, projectFormColor.value, formatCategories(projectFormCategories));
    displayMultipleProjects(projectList.projects);
    clearProjectForm();
    toggleProjectForm();
}

function clearProjectForm() {
    projectFormTitle.value = '';
    projectFormDesc.value = '';
    projectFormColor.value = "white";
    projectFormCategories.value = '';
}

function clearDisplay() {
    displayContainer.innerHTML = '';
    displayContainer.appendChild(projectsDisplay);
    projectsDisplay.innerHTML = '';
}

function deleteProject(projects, projectContainer) {
    projectList.removeProject(projects);
    saveLocal();
    projectsDisplay.removeChild(projectContainer);
}

function deleteCategory(category) {
    categoryList.removeCategory(category);
    for (let i = 0; i < projectList.projects.length; i++) {
        if (projectList.projects[i].categories.includes(category)) {
            projectList.projects[i].removeCategory(category)
        }
    }
}

function createDisplay(projects, single) {
    let projectContainer = document.createElement('div');
    let contentContainer = document.createElement('div');
    let displayTitle = document.createElement('p');
    let projectTasks = displayTasks(projects)
    let deleteProjectBtn = document.createElement('button');

    projectContainer.classList.add('box', 'notification', `is-${projects.color}`, 'is-vertical');
    contentContainer.classList.add('content');
    displayTitle.classList.add('title');

    deleteProjectBtn.classList.add('delete');

    deleteProjectBtn.onclick = () => {
        deleteProject(projects, projectContainer);
        loadSideNav();
    }

    displayTitle.textContent = projects.title;
    displayTitle.onclick = () => {
        focusOneProject(projects)
    }

    contentContainer.appendChild(displayTitle);

    if (single) {
        projectContainer.classList.add('tile');
        projectContainer.id = "largeDisplay"
        let displayCategories = document.createElement('div');

        displayCategories.classList.add('subtitle');
        if (projects.categories.length > 0) {
            displayCategories.textContent = `Categories: ${projects.categories}`
        } else {
            displayCategories.textContent = ''
        }

        let displayDesc = document.createElement('p');
        displayDesc.textContent = projects.desc;
        displayDesc.classList.add('subtitle');

        contentContainer.appendChild(displayDesc);
        contentContainer.appendChild(displayCategories);
        projectTasks.id = "largeTaskContainer"

    } else {
        projectContainer.classList.add('mx-3');
        projectContainer.id = "smallDisplay";
        projectTasks.id = "smallTaskContainer"
        displayTitle.classList.add('projectTitle');

    }

    contentContainer.appendChild(projectTasks);
    projectContainer.appendChild(contentContainer);
    projectContainer.appendChild(deleteProjectBtn);
    projectsDisplay.appendChild(projectContainer);
}

function focusOneProject(project) {
    clearDisplay();
    createDisplay(project, true);
}

function displayCategory(category) {
    let categoryProjects = [];
    for (let i = 0; i < projectList.projects.length; i++) {
        if (projectList.projects[i].categories.includes(category)) {
            categoryProjects.push(projectList.projects[i])
        }
    }
    let categoryTitle = document.createElement('p');
    categoryTitle.classList.add('title', 'is-1');
    categoryTitle.textContent = category;
    displayMultipleProjects(categoryProjects);
    displayContainer.prepend(categoryTitle, projectsDisplay);
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

function displayMultipleProjects(list) {
    clearDisplay();
    for (let i = 0; i < list.length; i++) {
        createDisplay(list[i], false)
    }
}

function createSideNavProjectLinks(projects, categories, i, parent) {
    for (let j = 0; j < projects.length; j++) {
        if (projects[j].categories.includes(categories[i])) {
            let projectLinkUl = document.createElement('ul');
            let projectLinkLi = document.createElement('li');
            let projectLink = document.createElement('a');

            projectLinkUl.classList.add('menu-list');
            projectLink.classList.add('my-0');
            projectLink.onclick = () => { focusOneProject(projects[j]) }
            projectLink.textContent = `·${projects[j].title}`;
            projectLinkLi.appendChild(projectLink);
            projectLinkUl.appendChild(projectLinkLi);
            parent.appendChild(projectLinkUl);
        }
    }
}

function loadSideNav() {
    sideNav.innerHTML = '';
    for (let i = 0; i < categoryList.categories.length; i++) {
        let categorySection = document.createElement('section');
        let categoryLabel = document.createElement('p');
        let deleteBtn = document.createElement('button');
        let categorySpan = document.createElement('span');

        deleteBtn.classList.add('delete', 'is-small', 'hidden');
        function toggleBtn() { deleteBtn.classList.toggle('hidden') };
        deleteBtn.onclick = () => { deleteCategory(categoryList.categories[i]), loadSideNav() }

        categorySpan.textContent = categoryList.categories[i];
        categorySpan.onclick = () => {
            displayCategory(categoryList.categories[i]);
        }

        categoryLabel.classList.add('menu-label', 'mb-0');
        categoryLabel.appendChild(categorySpan);
        categoryLabel.appendChild(deleteBtn);

        categorySection.classList.add('mb-2');
        categorySection.addEventListener('mouseover', toggleBtn);
        categorySection.addEventListener('mouseout', toggleBtn);
        categorySection.appendChild(categoryLabel);
        categoryLabel.appendChild(deleteBtn);
        createSideNavProjectLinks(projectList.projects, categoryList.categories, i, categorySection)
        sideNav.appendChild(categorySection);
    }
}

function renderSite() {
    loadLocal();
    loadSideNav();
    displayMultipleProjects(projectList.projects);
}

function toggleProjectForm() {
    modal.classList.toggle('is-active')
}

function toggleCategoryInput() {
    categoryInput.value = '';
    categoryInputField.classList.toggle('hidden');
}

viewAllBtn.onclick = () => {
    displayMultipleProjects(projectList.projects);
}

createProjectBtn.addEventListener('click', toggleProjectForm);

addCatBtn.onclick = () => { toggleCategoryInput() };

submitCategoryBtn.onclick = () => {
    categoryList.addCategory(categoryInput.value);
    toggleCategoryInput();
    loadSideNav();
}

cancelCategoryBtn.onclick = () => { toggleCategoryInput() }

closeModalBtn.onclick = () => { toggleProjectForm() };

cancelFormBtn.onclick = () => { clearProjectForm(); toggleProjectForm() };

submitFormBtn.onclick = () => { submitProjectForm(), loadSideNav() };

renderSite();


// Work on sidebar (displaying categories and corresponding projects, ability to click on category, ability to click on projects, ability to remove category, ability to remove project from category & vice-versa)
// Work on tasks (creating tasks from project page, expanding tasks in project page for more detail(also button to edit))