
import Project from "./Project";
import Task from "./Task";

import ToDoListTemp from "./ToDoList";

/* ========== CACHEDOM ========== */
const sideBarProjectsDOM = document.querySelector('.sidebar-projects');
const mainBodyDOM = document.querySelector('.main-body');
const addNewProjectDOM = document.querySelector('.sidebar-card-add-project');

/* ========== EVENT LISTENERS GLOBAL ========== */

function newProjectListener(addNewProject) {
    addNewProject.addEventListener('click', (e) => {
        console.log('clicked add new project');
    });
}


/* ========== DATA HANDLER FUNCTIONS ========== */

// Grabbing Projects From The ToDoList
const toDoListProjectsTempData = ToDoListTemp.getProjects();

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
    initialPageRender(toDoListProjectsTempData)
    newProjectListener(addNewProjectDOM);
}

/* ========== INITIAL AND CURRENT RENDERING ========== */
function initialPageRender(projects) {
    // const placeHolder = document.createElement('div');
    renderSideBar(sideBarProjectsDOM, projects);
    renderToMainBody(mainBodyDOM, renderSelectedProjectTasks(toDoListProjectsTempData[0]));
}

function pageRenderer(projects, mainContent) {
    renderSideBar(sideBarProjectsDOM, projects);
    renderToMainBody(mainBodyDOM, mainContent);
}

function renderToMainBody(main, content) {
    main.appendChild(content);
}

function renderSideBar(side, projects) {
    projects.forEach(project => {
        const sideprojectcard = renderSideProject(project, projectSelected, projectDeleted);
        // side.appendChild(sideprojectcard); // Inserts below new project
        side.insertBefore(sideprojectcard, side.firstChild) // Inserts above new project
    });
}


/* ========== HTML ELEMENT CREATION ========== */
// Includes the event handler on click with creation

function renderSideProject(project, selectedFunc, deletedFunc) {
    const data = grabProjectData(project);
    const title = data.title;
    // const tasks = data.tasks;

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

// function renderSelectedProjectTasks(project, selectedFunc, deletedFunc) {
function renderSelectedProjectTasks(project) {
    const data = grabProjectData(project);
    const title = data.title;
    const taskData = data.tasks;

    const mainContentContainer = document.createElement('div');
    mainContentContainer.classList.add('py-2');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('project-title-container');
    titleContainer.innerHTML = `
        <h6 class="text-center project-title">${title}</h6>
        <img src="images/edit.svg" alt="" class="project-title-edit-icon">
    `
    mainContentContainer.appendChild(titleContainer);

    const projectTaskListContainer = document.createElement('div');
    projectTaskListContainer.classList.add('project-list', 'u-full-width');
    mainContentContainer.appendChild(projectTaskListContainer);

    taskData.forEach(task => {
        const name = task.name;
        // const description = task.description;
        // const priority = task.priority; // Maybe could add some sick UI to show priority

        const projectListItem = document.createElement('div');
        projectListItem.classList.add('project-list-item', 'my-1');

        projectListItem.innerHTML = `
            <img src="images/right-arrow.svg" alt="" class="project-list-item-icon">
            <div class="project-list-item-title">${name}</div>
            <img src="images/delete.svg" alt="" class="project-list-item-delete">
        `
        projectTaskListContainer.appendChild(projectListItem);

    });

    // Making sure the last child is the 'Add a new task' task
    const addNewItemLast = document.createElement('div');
    addNewItemLast.classList.add('project-list-add-item');
    addNewItemLast.innerHTML = `
        <img src="images/plus.svg" alt="" class="project-list-item-icon">
        <div class="project-list-item-title">Add a new task</div>
    `
    mainContentContainer.appendChild(addNewItemLast);


    // Event Handling
    mainContentContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-list-item-delete')) {
            console.log("Delete Clicked!");
        } else {
            console.log(e.target);
            console.log("clicked task");
        }
    })

    return mainContentContainer;
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
    // After creating the new project or task, calls pageRender
function newProject() {
    
}

function newTask() {

}



export { initTest }