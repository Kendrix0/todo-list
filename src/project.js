import Task from './task';

export default class Project {
    constructor(title, desc, color, time, completed, tasks, categories) {
        this.title = title;
        this.desc = desc;
        this.color = color;
        this.time = time;
        this.completed = completed;
        this.tasks = tasks;
        this.categories = categories;
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
                this.categories.splice(i, 1);
            }
        }
    }

}