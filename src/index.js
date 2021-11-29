import './style.css';
import { saveLocal, loadLocal, projectList, categoryList } from './storage';
import { displayMultipleProjects } from './display';
import { loadSideNav, toggleCategoryInput } from './sidebar';
import { toggleProjectForm, submitProjectForm, clearProjectForm} from './project';

const viewAllBtn = document.querySelector('#viewAllBtn');
const createProjectBtn = document.querySelector('#createProjectBtn');
const addCatBtn = document.querySelector('#addCatBtn');
const closeModalBtn = document.querySelector('.modal-close');
const categoryInput = document.querySelector('#categoryInput');
const submitCategoryBtn = document.querySelector('#submitCategoryBtn');
const cancelCategoryBtn = document.querySelector('#cancelCategoryBtn');
const submitFormBtn = document.querySelector('#submitProjectForm');
const cancelFormBtn = document.querySelector('#cancelProjectForm');

function renderSite() {
    loadLocal();
    loadSideNav();
    displayMultipleProjects(projectList.projects);
}

viewAllBtn.onclick = () => {
    displayMultipleProjects(projectList.projects);
}

createProjectBtn.onclick = () => toggleProjectForm();

addCatBtn.onclick = () => toggleCategoryInput();

submitCategoryBtn.onclick = () => {
    categoryList.addCategory(categoryInput.value);
    toggleCategoryInput();
    loadSideNav();
    saveLocal();
}

cancelCategoryBtn.onclick = () => toggleCategoryInput()

closeModalBtn.onclick = () => toggleProjectForm();

cancelFormBtn.onclick = () => { clearProjectForm(); toggleProjectForm() };

submitFormBtn.onclick = () => { submitProjectForm(), loadSideNav() };

renderSite();

// Implement dates and form validation
// Work on project edit form