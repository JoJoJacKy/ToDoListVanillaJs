import Project from "./Project";
import Task from "./Task";
import { initialToDoListStorage, getToDoListStorage, updateToDoListStorage, ToDoList } from "./ToDoList";

/* ========== CREATE INITIAL DATA ON FIRST LOAD ========== */
if (initialToDoListStorage() === null) {
  const toDoList = new ToDoList()
  localStorage.setItem('todolist', JSON.stringify(toDoList));
  console.log("all good mate");
  console.log(getToDoListStorage());
  console.log("all good mate");
}

// const ToDoListTemp = new ToDoList();

/* ========== CACHEDOM ========== */
const sideBarProjectsDOM = document.querySelector(".sidebar-projects");
const mainBodyDOM = document.querySelector(".main-body");
const addNewProjectDOM = document.querySelector(".sidebar-card-add-project");

/* ========== EVENT LISTENERS GLOBAL ========== */

// Clicking ADD NEW PROJECT loads the Project Form
function newProjectListener(addNewProject) {
  addNewProject.addEventListener("click", (e) => {
    console.log("clicked add new project");
    updateCurrentProject(null);
    currentPageRenderer(
      toDoListProjectsTempData,
      renderProjectForm(cancelForm, submitProject)
    );
  });
}

/* ========== DATA HANDLER FUNCTIONS ========== */

// Grabbing Projects From The ToDoList
let toDoListProjectsTempData = ToDoListTemp.getProjects();

// Current Projects and Tasks
let currentProject = null;
let currentTask = null;

// Get Project Data: Returns Object
function grabProjectData(project) {
  const projectObjData = {};
  projectObjData.title = project.getTitle();
  projectObjData.tasks = project.getTasks();
  return projectObjData;
}

// Get Task Data: Returns Object
function grabTaskData(task) {
  const taskObjData = {};
  taskObjData.name = task.getName();
  taskObjData.description = task.getDescription();
  taskObjData.priority = task.getPriority();
  return taskObjData;
}

function updateCurrentProject(selectedProject) {
  currentProject = selectedProject;
  console.log("updated current project!");
}

function updateCurrentTask(selectedTask) {
  currentTask = selectedTask;
  console.log("updated current task!");
}

/* ========== INITIALIZE PAGE LOAD ========== */

function init() {
  initialPageRender(toDoListProjectsTempData);
  newProjectListener(addNewProjectDOM);
}

/* ========== INITIAL AND CURRENT RENDERING ========== */
function initialPageRender(projects) {
  const placeHolder = document.createElement("div");
  renderSideBar(sideBarProjectsDOM, projects);
  renderToMainBody(mainBodyDOM, placeHolder);
}

// This is the function that will be called the majority of the time
function currentPageRenderer(projects, mainContent) {
  renderSideBar(sideBarProjectsDOM, projects);
  renderToMainBody(mainBodyDOM, mainContent);
}

function renderToMainBody(main, content) {
  removeAllChildrenNodesMain(main); // Clears the children nodes then adds the wanted content
  main.appendChild(content);
}

// For removing all the children nodes in Main
function removeAllChildrenNodesMain(parent) {
  while (parent.childNodes.length > 1) {
    parent.removeChild(parent.lastChild);
  }
}

function renderSideBar(side, projects) {
  removeAllChildrenNodesSide(side);
  projects.forEach((project) => {
    const sideprojectcard = renderSideProject(
      project,
      projectSelected,
      projectDeleted
    );
    // side.appendChild(sideprojectcard); // Inserts below new project
    side.insertBefore(sideprojectcard, side.firstChild); // Inserts above new project
  });
}

// For removing all the chidlren nodes in Side
function removeAllChildrenNodesSide(parent) {
  while (parent.childNodes.length > 4) {
    parent.removeChild(parent.firstChild);
  }
}

/* ========== HTML ELEMENT CREATION ========== */
// Includes the event handler on click with creation

function renderSideProject(project, selectedFunc, deletedFunc) {
  const data = grabProjectData(project);
  const { title } = data;
  // const tasks = data.tasks;

  // Organizing Element
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("container", "u-full-width", "py-1");

  // Actual Card Element that we use an event listener on
  const sideBarCard = document.createElement("div");
  sideBarCard.classList.add("sidebar-card");
  sideBarCard.innerHTML = `
        <img src="images/list.svg" alt="" class="sidebar-card-icon">
        <div class="sidebar-card-title text-center">
            ${title}
        </div>
        <img src="images/delete.svg" alt="" class="sidebar-card-delete-icon">
    `;
  cardContainer.appendChild(sideBarCard);

  // Handles Selection and Deletion
  sideBarCard.addEventListener("click", (e) => {
    if (e.target.classList.contains("sidebar-card-delete-icon")) {
      deletedFunc(title);
    } else {
      updateCurrentProject(project);
      selectedFunc(data);
    }
  });
  return cardContainer;
}

function renderSelectedProjectTasks(projectData, selectedFunc, deletedFunc) {
  // const data = grabProjectData(project);
  const { title } = projectData;
  const taskData = projectData.tasks;

  const mainContentContainer = document.createElement("div");
  mainContentContainer.classList.add("py-1", "fadeInTransition");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("project-title-container");
  titleContainer.innerHTML = `
        <h6 class="text-center project-title">${title}</h6>
        <img src="images/edit.svg" alt="" class="project-title-edit-icon">
    `;
  mainContentContainer.appendChild(titleContainer);

  titleContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("project-title-edit-icon")) {
      console.log("cliked title edit icon!");
      currentPageRenderer(
        toDoListProjectsTempData,
        renderProjectForm(
          cancelForm,
          submitProject,
          e.target.previousElementSibling.innerText
        )
      );
    }
  });

  const projectTaskListContainer = document.createElement("div");
  projectTaskListContainer.classList.add("project-list", "u-full-width");
  mainContentContainer.appendChild(projectTaskListContainer);

  taskData.forEach((task) => {
    const { name } = task;
    // const description = task.description;
    // const priority = task.priority; // Maybe could add some sick UI to show priority

    const projectListItem = document.createElement("div");
    projectListItem.classList.add("project-list-item", "my-1");

    projectListItem.innerHTML = `
            <img src="images/right-arrow.svg" alt="" class="project-list-item-icon">
            <div class="project-list-item-title">${name}</div>
            <img src="images/delete.svg" alt="" class="project-list-item-delete">
        `;
    // projectTaskListContainer.appendChild(projectListItem);
    projectTaskListContainer.insertBefore(
      projectListItem,
      projectTaskListContainer.firstChild
    ); // Inserts above new project
  });

  // Making sure the last child is the 'Add a new task' task
  const addNewItemLast = document.createElement("div");
  addNewItemLast.classList.add("project-list-add-item");
  addNewItemLast.innerHTML = `
        <img src="images/plus.svg" alt="" class="project-list-item-icon">
        <div class="project-list-item-title add-item-title">Add New Task</div>
    `;
  mainContentContainer.appendChild(addNewItemLast);

  // Event Handling; CHEESING "Add a new task" task
  mainContentContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("project-list-item-delete")) {
      deletedFunc(e.target.previousElementSibling.innerText); // Gets the title of the task
    } else if (
      e.target.classList.contains("project-list-add-item") ||
      e.target.classList.contains("add-item-title")
    ) {
      console.log("adding new item!");
      currentPageRenderer(
        toDoListProjectsTempData,
        renderTaskForm(cancelForm, submitTask)
      );
    } else {
      taskData.forEach((task) => {
        if (e.target.innerText === task.name) {
          updateCurrentTask(task);
          selectedFunc(task, projectData);
        }
      });
    }
  });

  return mainContentContainer;
}

function renderSelectedTask(task, backFunc, editFunc, deleteFunc, currentProj) {
  const { name } = task;
  const { description } = task;
  const { priority } = task;

  const selectedTaskContainer = document.createElement("div");
  selectedTaskContainer.classList.add("selected-task", "py-4", "my-5", "fadeInTransition");

  selectedTaskContainer.innerHTML = `
        <img src="images/back-button.svg" alt="" class="selected-task-back-icon">
        <img src="images/edit.svg" alt="" class="selected-task-edit-icon">
        <img src="images/delete.svg" alt="" class="selected-task-delete-icon">
        
        <div class="task-title-container">
            <h6 class="text-center task-title">${name}</h6>
        </div>
        <div class="task-description">
            <p>
                ${description}
            </p>
        </div>
        <div class="task-priority">
            <p>Task Priority: ${priority}</p>
        </div>
    `;

  selectedTaskContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("selected-task-back-icon")) {
      console.log("clicked back!");
      backFunc(currentProj);
    }
    if (e.target.classList.contains("selected-task-edit-icon")) {
      // Need to pass editFunc an object filled with the details of the current task
      const taskDetailsObj = {};
      const { childNodes } = e.target.parentNode;
      taskDetailsObj.name = childNodes[7].innerText;
      taskDetailsObj.description = childNodes[9].innerText;
      taskDetailsObj.priority = childNodes[11].innerText;
      editFunc(taskDetailsObj);
    }
    if (e.target.classList.contains("selected-task-delete-icon")) {
      console.log("clicked delete!");
      deleteFunc(name);
    }
  });

  return selectedTaskContainer;
}

function renderProjectForm(cancelFunc, submitFunc, projectTitle = "") {
  const formContainer = document.createElement("form");
  formContainer.classList.add("task-project-form", "my-5", "fadeInTransition");
  formContainer.innerHTML = `
        <h6 class="text-center">New Project</h6>

        <label for="projectName">Project Name</label>
        <input type="text" class="u-full-width project-input" id="projectName" value="${projectTitle}" required maxlength="18">
        
        <button class="button-primary" id="cancel">Cancel</button>
        <input class="button-primary" type="submit" value="submit">
    `;

  formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted!");
    submitFunc(e.path[0].childNodes[5].value); // Passing the text within the project name input
  });

  formContainer.querySelector("#cancel").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("cancelled!");
    cancelFunc();
  });


  return formContainer;
}

function renderTaskForm(cancelFunc, submitFunc, taskDetailsObject = {}) {
  const formContainer = document.createElement("form");
  formContainer.classList.add("task-project-form", "my-5", "fadeInTransition");
  if (Object.keys(taskDetailsObject).length === 0) {
    formContainer.innerHTML = `
        <h6 class="text-center">New Task</h6>

        <label for="taskName">Task Name</label>
        <input type="text" class="u-full-width text-input" id="taskName" required maxlength="30">

        <label for="taskDescription">Description</label>
        <textarea class="u-full-width task-input" placeholder="Describe why you need to finish this task..." id="taskDescription" rows="4" cols="25" wrap="hard" maxlength="574"></textarea>

        <label for="taskPriority">Priority</label>
        <select class="u-full-width task-input" id="taskPriority">
            <option value="Option 1">High</option>
            <option value="Option 2">Medium</option>
            <option value="Option 3">Low</option>
        </select>
        
        <button class="button-primary" id="cancel">Cancel</button>
        <input class="button-primary" type="submit" value="submit">
    `;
  } else {
    formContainer.innerHTML = `
        <h6 class="text-center">New Task</h6>

        <label for="taskName">Task Name</label>
        <input type="text" class="u-full-width text-input" id="taskName" value="${taskDetailsObject.name}" required maxlength="30">

        <label for="taskDescription">Description</label>
        <textarea class="u-full-width task-input" id="taskDescription" placeholder="Describe why you need to finish this task..." rows="4" cols="25" wrap="hard" maxlength="574">${taskDetailsObject.description}</textarea>

        <label for="taskPriority">Priority</label>
        <select class="u-full-width task-input" id="taskPriority">
            <option value="Option 1">High</option>
            <option value="Option 2">Medium</option>
            <option value="Option 3">Low</option>
        </select>
        
        <button class="button-primary" id="cancel">Cancel</button>
        <input class="button-primary" type="submit" value="submit">
    `;
  }

  formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted!");
    const taskName = e.path[0].childNodes[5].value; // name
    const taskDesc = e.path[1].childNodes[1].childNodes[9].value; // desc
    const taskPriority =
      e.path[1].childNodes[1].childNodes[13].options[
        e.path[1].childNodes[1].childNodes[13].selectedIndex
      ].innerText; // prior
      submitFunc(taskName, taskDesc, taskPriority);
  });

  formContainer.querySelector("#cancel").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("cancelled!");
    cancelFunc();
  });

  return formContainer;
}

/* ========== EVENT HANDLER FUNCIONS ========== */

// These Functions will call pageRenderer()
function projectSelected(projData) {
  console.log(`Selected ${projData.title}!`);
  currentPageRenderer(
    toDoListProjectsTempData,
    renderSelectedProjectTasks(projData, taskSelected, taskDeleted)
  );
}

function projectDeleted(projTitle) {
  console.log(`Deleted ${projTitle}!`);
  ToDoListTemp.deleteProject(projTitle);
  toDoListProjectsTempData = ToDoListTemp.getProjects();
  const placeHolder = document.createElement("div");
  currentPageRenderer(toDoListProjectsTempData, placeHolder);
}

function taskSelected(task, projData) {
  console.log(`Selected ${task.name}!`);
  currentPageRenderer(
    toDoListProjectsTempData,
    renderSelectedTask(
      task,
      backToProjectTasks,
      editTask,
      taskDeleted,
      projData
    )
  );
}

function taskDeleted(taskName) {
  console.log(`Deleted ${taskName}!`);
  currentProject.deleteTask(taskName);
  currentPageRenderer(
    toDoListProjectsTempData,
    renderSelectedProjectTasks(currentProject, taskSelected, taskDeleted)
  );
}

// These functions are called on Submit of the forms
// Calls the Data Handler functions of setProject & setTask
// After creating the new project or task, calls pageRender
function submitProject(projectName) {
  if (currentProject === null) {
    ToDoListTemp.addProject(new Project(projectName));
    toDoListProjectsTempData = ToDoListTemp.getProjects(); // Needed to re-initialize the projects
    const placeHolder = document.createElement("div");
    currentPageRenderer(toDoListProjectsTempData, placeHolder);
  } else {
    ToDoListTemp.updateProject(currentProject, projectName);
    updateCurrentProject(null);
    const placeHolder = document.createElement("div");
    currentPageRenderer(toDoListProjectsTempData, placeHolder);
  }
}

function submitTask(taskName, taskDesc, taskPriority) {
  if (currentTask === null) {
    const newTask = new Task(taskName);
    newTask.setDescription(taskDesc);
    newTask.setPriority(taskPriority);
    currentProject.addTask(newTask);
    updateCurrentTask(null);
    backToProjectTasks(currentProject);
  } else {
    currentProject.updateTask(currentTask, taskName, taskDesc, taskPriority);
    updateCurrentTask(null);
    backToProjectTasks(currentProject);
  }
}

function editTask(taskDetailsObj) {
  currentPageRenderer(
    toDoListProjectsTempData,
    renderTaskForm(cancelForm, submitTask, taskDetailsObj)
  );
}

function cancelForm() {
  const placeHolder = document.createElement("div");
  currentPageRenderer(toDoListProjectsTempData, placeHolder);
}

function backToProjectTasks(project) {
  currentPageRenderer(
    toDoListProjectsTempData,
    renderSelectedProjectTasks(project, taskSelected, taskDeleted)
  );
}

export { init };

