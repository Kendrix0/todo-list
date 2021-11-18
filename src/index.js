import './style.css';
import { saveLocal, loadLocal, projectList } from './storage';

const viewAllBtn = document.querySelector('#viewAllBtn');
const addCatBtn = document.querySelector('#addCatBtn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-close');

projectList.createProject('Test', 'This is a test');
projectList.projects[0].addCategory('TEST');
projectList.projects[0].addTask('Test task', 'This is a test task', 1);
console.log(projectList);

function toggleModal() {
    modal.classList.toggle('is-active')
}

viewAllBtn.addEventListener('click', saveLocal);
addCatBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
