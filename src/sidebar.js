import { focusOneProject, displayMultipleProjects } from "./display";
import { categoryList, projectList } from "./storage";
import { displayedProject } from "./display";
import * as dayjs from 'dayjs';

const categoryInput = document.querySelector('#categoryInput');
const categoryInputField = document.querySelector('#inputField');
const sideNav = document.querySelector('#sideNav');

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

function deleteCategory(category) {
    categoryList.removeCategory(category);
    for (let i = 0; i < projectList.projects.length; i++) {
        if (projectList.projects[i].categories.includes(category)) {
            projectList.projects[i].removeCategory(category)
        }
    }
    if (displayedProject.length == 1) {
        focusOneProject(displayedProject[0])
    } else {
        displayMultipleProjects(displayedProject);
    }
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

export function toggleCategoryInput() {
    categoryInput.value = '';
    categoryInputField.classList.toggle('hidden');
};

export function loadSideNav() {
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

        categoryLabel.classList.add('menu-label', 'mb-0', 'is-flex', 'is-justify-content-space-between');
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