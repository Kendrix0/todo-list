export default class Task {
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