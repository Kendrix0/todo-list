import './style.css';
import { saveLocal, loadLocal, projectList, categoryList } from './storage';
import { displayMultipleProjects } from './display';
import { loadSideNav, toggleCategoryInput } from './sidebar';
import { toggleProjectForm, submitProjectForm, clearProjectForm} from './project';
import * as dayjs from 'dayjs';

const viewAllBtn = document.querySelector('#viewAllBtn');
const createProjectBtn = document.querySelector('#createProjectBtn');
const addCatBtn = document.querySelector('#addCatBtn');
const closeModalBtn = document.querySelector('.modal-close');
const categoryInput = document.querySelector('#categoryInput');
const submitCategoryBtn = document.querySelector('#submitCategoryBtn');
const cancelCategoryBtn = document.querySelector('#cancelCategoryBtn');
const submitFormBtn = document.querySelector('#submitProjectForm');
const cancelFormBtn = document.querySelector('#cancelProjectForm');
let today = dayjs();


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
console.log(today.isBefore('2021-12-07')) //YYYY-MM-DD;
console.log(today.isBefore(today.day(6)))
// Implement dates and form validation
// Work on project edit form
// Submit task, load correct display