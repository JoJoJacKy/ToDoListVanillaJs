
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


function updateToDoListStorage(toDoListObj) {
  // Stringify the Object
  const toDoListString = JSON.stringify(toDoListObj);
  // Store the object
  localStorage.setItem('todolist', toDoListString);
  return
}

function getToDoListStorage() {
  const toDoListStored = localStorage.getItem('todolist');
  // Returns the stringified object from localStorage as an actual JS Object
  return JSON.parse(toDoListStored);
}

function initialToDoListStorage() {
  const toDoListStored = localStorage.getItem('todolist');
  if (toDoListStored === null) return null
  return
}

export { initialToDoListStorage, getToDoListStorage, updateToDoListStorage, ToDoList }