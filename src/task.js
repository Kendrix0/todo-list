import { saveLocal } from "./storage";

export default class Task {
    constructor(title, desc, time) {
        this.title = title;
        this.desc = desc;
        this.time = time;
        this.completed = false;
        this.id = title.substring(0,3) + Math.floor(Math.random()*1000000).toString();
    }

    changePriority() {

        saveLocal();
    }

    completeTask() {
        this.completed = !this.completed;
        console.log(this.completed)
        saveLocal();
    }

    getTime() {
        return this.time;
    }
}