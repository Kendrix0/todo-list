import Project from './project';
import { saveLocal } from './storage';

export default class Library {
    constructor() {
        this.projects = [];
    }

    createProject(title, desc, color = "white", categories = [], date, time = 0, completed = false, tasks = [], priority = this.projects.length) {
        let project = new Project(title, desc, color, categories, date, time, completed, tasks);
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

    /*
    createProject(title, desc, color = "white", categories = [], priority = this.projects.length, time = 0, completed = false, tasks = []) {
        let project = new Project(title, desc, color, categories, time, completed, tasks);
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
    */

    removeProject(project) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i] == project) {
                this.projects.splice(i,1);
            }
        }
    }
}
