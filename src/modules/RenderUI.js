
import Project from "./Project";
import Task from "./Task";

import ToDoListTemp from "./ToDoList";

/* ========== CACHEDOM ========== */
const sideBarProjects = document.querySelector('.sidebar-projects');
const mainBody = document.querySelector('.main-body');
const addNewProject = document.querySelector('.sidebar-card-add-project');

/* ========== EVENT LISTENERS GLOBAL ========== */

function newProjectListener(addNewProject) {
    addNewProject.addEventListener('click', (e) => {
        console.log('clicked add new project');
    });
}


/* ========== DATA HANDLER FUNCTIONS ========== */

// Grabbing Projects From The ToDoList
const toDoListProjects = ToDoListTemp.getProjects();

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

function setProjectData(project, inputs) {

}

function setTaskData(task, inputs) {

}

/* ========== TEST ========== */

function initTest() {
    initialPageRender(toDoListProjects)
    newProjectListener(addNewProject);
}

/* ========== INITIAL AND CURRENT RENDERING ========== */
function initialPageRender(projects) {
    const placeHolder = document.createElement('div');
    renderSideBar(sideBarProjects, projects);
    renderToMainBody(mainBody, placeHolder);
}

function pageRenderer(projects, mainContent) {
    renderSideBar(sideBarProjects, projects);
    renderToMainBody(mainBody, mainContent);
}

function renderToMainBody(main, content) {
    main.appendChild(content);
}

function renderSideBar(side, projects) {
    projects.forEach(project => {
        const sideprojectcard = renderProject(project, projectSelected, projectDeleted);
        side.appendChild(sideprojectcard);
    });
}

/* ========== HTML ELEMENT CREATION ========== */
// Includes the event handler on click with creation

function renderProject(project, selectedFunc, deletedFunc) {
    const data = grabProjectData(project);
    const title = data.title;
    const tasks = data.tasks;

    // Organizing Element
    const cardContainer = document.createElement('div');
    cardContainer.classList.add("container", "u-full-width", "py-1");

    // Actual Card Element that we use an event listener on
    const sideBarCard = document.createElement('div');
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
    sideBarCard.addEventListener('click', (e) => {
        if (e.target.classList.contains('sidebar-card-delete-icon')) {
            deletedFunc(title);
        } else {
            selectedFunc(title);
        }
    });
    return cardContainer;
}

function renderTask(task, selectedFunc, deletedFunc) {

}

/* ========== EVENT HANDLER FUNCIONS ========== */

// These Functions will call pageRenderer()
function projectSelected(projTitle) {
    console.log(`Selected ${projTitle}!`);
}

function projectDeleted(projTitle) {
    console.log(`Deleted ${projTitle}!`);
}

function taskSelected(taskName) {
    console.log(`Selected ${taskName}!`);
}

function taskDeleted(taskName) {
    console.log(`Deleted ${taskName}!`);
}

// These functions are called on Submit of the forms
    // Calls the Data Handler functions of setProject & setTask
function newProject() {
    
}

function newTask() {

}



export { initTest }