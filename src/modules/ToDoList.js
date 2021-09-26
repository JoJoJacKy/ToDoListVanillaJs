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

const tempProject1 = new Project("test1");
const tempProject2 = new Project("test2"); 

const tast1 = new Task("cwinge");
tast1.setDescription("OOOOOOOOOOOOOOOOOGA");
tast1.setPriority("High");

const tast2 = new Task("fgnaifgnaEIOLfnile");
tast2.setDescription("OOOOOOOawdaFAEFASEfASEFGOOOOOOOOOGA");
tast2.setPriority("Low");

tempProject1.addTask(tast1);
tempProject2.addTask(tast1);
tempProject1.addTask(tast2);
tempProject2.addTask(tast2);

ToDoListTemp.addProject(tempProject1);
ToDoListTemp.addProject(tempProject2);

export default ToDoListTemp;