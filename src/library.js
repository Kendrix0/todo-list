import Project from './project';
import { saveLocal } from './storage';

export default class Library {
    constructor() {
        this.projects = [];
    }

    createProject(title, desc, color = "white", time = 0, completed = false, tasks = [], categories = [], priority = this.projects.length) {
        let project = new Project(title, desc, color, time, completed, tasks, categories);
        if (categories) {
            categories.map(cat => project.addCategory(cat));
        }
        if (priority < this.projects.length) {
            this.projects.splice(priority, 0, project);
        } else {
            this.projects.push(project);
        }
        saveLocal();
    }

    findProject() {

    }

    removeProject() {

    }
}
