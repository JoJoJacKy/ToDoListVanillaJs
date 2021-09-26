import Project from "./Project";
import Task from "./Task";

class ToDoList {
    constructor() {
        this.projects = [];
    }

    getProjects() {
        return this.projects;
    }

    addProject(project) {
        this.projects.push(project)
    }

    deleteProject(projectName) {
        this.projects = this.projects.filter(project => this.project !== projectName);
    }

}

// This is the "Temp Storage"

const ToDoListTemp = new ToDoList();
