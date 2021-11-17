import './style.css';
import { saveLocal, loadLocal, projectList } from './storage';


let viewAllBtn = document.querySelector('#viewAllBtn');
let addCatBtn = document.querySelector('#addCatBtn');

/* Workflow:
1.  Create project page where a single project is loaded on-screen. User should be able to expand
    tasks to view more details such as description, date, approx time?, images?
2.  Create category page where all projects with corresponding category are shown. User should be
    able to directly check off tasks within projects or click on project title to load the project
    page.
3. Create an "All" page which displays all projects and oragnizes them by category, importance?, time?


Things that are needed:
    Tasks:      Should have priority, desc, date, approx time, option for image, and "Checked/Completed" value
    
    Projects:   Should have priority?, desc, date, cumulative approx time?, ability to add/remove categories
        Page:   Should allow tasks to be expanded. Option to complete, remove project and complete,add,remove
                tasks.
    
    Categories: Ability to create or remove categories. Option to add color associated with category?
        Page:   Loads all projects that are within the category. User can click title of project to load
                project page. User can delete, complete, or add projects and tasks.

    All:        Load all categories. Ability to order page alphabetically or by # of projects?
*/

projectList.createProject('Test', 'This is a test');
projectList.projects[0].addCategory('TEST');
projectList.projects[0].addTask('Test task', 'This is a test task', 1);
console.log(projectList);


viewAllBtn.addEventListener('click', saveLocal());

addCatBtn.addEventListener('click', loadLocal());