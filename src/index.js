import './style.css';

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

class Library {
    constructor() {
        this.projects = [];
    }

    createProject(title, desc, categories, color = "white", priority = this.projects.length) {
        let project = new Project(title, desc, color);
        if (categories) {
            categories.map(cat => project.addCategory(cat));
        }
        if (priority < this.projects.length) {
            this.projects.splice(priority, 0, project);
        } else {
            this.projects.push(project);
        }
    }

    findProject() {

    }

    removeProject() {

    }
}

class Project {
    constructor(title, desc, color) {
        this.tasks = [];
        this.categories = [];
        this.title = title;
        this.desc = desc;
        this.color = color;
        this.time = 0;
        this.completed = false;
    }

    addTask(title, desc, time = 0, priority = this.tasks.length) {
        let task = new Task(title, desc, time);
        if (priority < this.tasks.length) {
            this.tasks.splice(priority, 0, task);
        } else {
            this.tasks.push(task);
        }
        this.time += task.time;
    }

    findTask() {

    }

    removeTask(priority) {
        this.time -= this.tasks[priority].getTime();
        this.tasks.splice(priority, 1);
    }

    getTimeEstimate() {
        return this.time;
    }

    completeProject() {
        this.completed = !this.completed;
    }

    addCategory(category) {
        this.categories.push(category)
    }

    removeCategory(category) {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i] == category) {
                this.categories.splice(i,1);
            }
        }
    }

}

class Task {
    constructor(title, desc, time) {
        this.title = title;
        this.desc = desc;
        this.time = time;
        this.completed = false;
    }

    changePriority() {

    }

    completeTask() {
        this.completed = !this.completed;
    }

    getTime() {
        return this.time;
    }
}

const library = new Library();
library.createProject('Test','This is a test', []);
library.projects[0].addCategory('TEST');
library.projects[0].addTask('Test task', 'This is a test task', 1);
console.log(library);