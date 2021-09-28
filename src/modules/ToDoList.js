import Project from "./Project";
import Task from "./Task";

class ToDoList {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getTitle() === projectName);
  }

  addProject(newProject) {
    if (
      this.projects.find(
        (project) => project.getTitle() === newProject.getTitle()
      )
    )
      return;
    this.projects.push(newProject);
  }

  deleteProject(projectName) {
    this.projects = this.projects.filter(
      (project) => project.getTitle() !== projectName
    );
  }

  updateProject(currentProject, newProjectName) {
    const proj = this.projects.find(
      (project) => project.getTitle() === currentProject.getTitle()
    );
    this.deleteProject(currentProject.getTitle());
    proj.setTitle(newProjectName);
    this.projects.push(proj);
  }
}

// This is the "Temp Storage"

const ToDoListTemp = new ToDoList();

const tempProject1 = new Project("test1");
const tempProject2 = new Project("test2");
const tempProject3 = new Project("test3");

const tast1 = new Task("cwinge");
tast1.setDescription("tast3tast3tast3tast3tast3tast3tast3tast3");
tast1.setPriority("High");

const tast2 = new Task("fgnaifgnaEIOLfnile");
tast2.setDescription("OOOOOOOawdaFAEFASEfASEFGOOOOOOOOOGA");
tast2.setPriority("Low");

const tast3 = new Task("vyak");
tast3.setDescription("em Ipsum has been the industry's standard dummy text ever since the 1500");
tast3.setPriority("Low");

tempProject1.addTask(tast1);
tempProject2.addTask(tast2);
tempProject3.addTask(tast3);

ToDoListTemp.addProject(tempProject1);
ToDoListTemp.addProject(tempProject2);
ToDoListTemp.addProject(tempProject3);

export default ToDoListTemp;
