/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_RenderUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/RenderUI */ "./src/modules/RenderUI.js");\n\r\n\r\n(0,_modules_RenderUI__WEBPACK_IMPORTED_MODULE_0__.init)();\r\n\r\nconsole.log("index cringe");\n\n//# sourceURL=webpack://todolistproject/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/modules/Project.js":
      /*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nclass Project {\r\n\r\n    constructor(title) {\r\n        this.title = title;\r\n        this.tasks = [];\r\n    }\r\n\r\n    getTitle() {\r\n        return this.title;\r\n    }\r\n\r\n    setTitle(title) {\r\n        this.title = title;\r\n    }\r\n\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n\r\n    findTask(taskName) {\r\n        return this.tasks.find((task) => task.getName() === taskName);\r\n    }\r\n\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    deleteTask(taskName) {\r\n        this.tasks = this.tasks.filter(task => task.name !== taskName);\r\n    }\r\n\r\n    updateTask(currentTask, newTaskName, newTaskDesc, newTaskPriority) {\r\n        const task = this.tasks.find((task) => task.getName() === currentTask.getName());\r\n        this.deleteTask(currentTask.getName());\r\n        task.setName(newTaskName);\r\n        task.setDescription(newTaskDesc);\r\n        task.setPriority(newTaskPriority);\r\n        this.tasks.push(task);\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todolistproject/./src/modules/Project.js?'
        );

        /***/
      },

    /***/ "./src/modules/RenderUI.js":
      /*!*********************************!*\
  !*** ./src/modules/RenderUI.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "init": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoList */ "./src/modules/ToDoList.js");\n\n\n\n\n\n/* ========== CACHEDOM ========== */\nconst sideBarProjectsDOM = document.querySelector(\'.sidebar-projects\');\nconst mainBodyDOM = document.querySelector(\'.main-body\');\nconst addNewProjectDOM = document.querySelector(\'.sidebar-card-add-project\');\n\n/* ========== EVENT LISTENERS GLOBAL ========== */\n\n// Clicking ADD NEW PROJECT loads the Project Form\nfunction newProjectListener(addNewProject) {\n  addNewProject.addEventListener(\'click\', (e) => {\n    console.log(\'clicked add new project\');\n    updateCurrentProject(null);\n    currentPageRenderer(toDoListProjectsTempData, renderProjectForm(cancelForm, submitProject));\n  });\n}\n\n/* ========== DATA HANDLER FUNCTIONS ========== */\n\n// Grabbing Projects From The ToDoList\nlet toDoListProjectsTempData = _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();\n\n// Current Projects and Tasks\nlet currentProject = null;\nlet currentTask = null;\n\n// Get Project Data: Returns Object\nfunction grabProjectData(project) {\n  const projectObjData = {};\n  projectObjData.title = project.getTitle();\n  projectObjData.tasks = project.getTasks();\n  return projectObjData;\n}\n\n// Get Task Data: Returns Object\nfunction grabTaskData(task) {\n  const taskObjData = {};\n  taskObjData.name = task.getName();\n  taskObjData.description = task.getDescription();\n  taskObjData.priority = task.getPriority();\n  return taskObjData;\n}\n\nfunction updateCurrentProject(selectedProject) {\n  currentProject = selectedProject;\n  console.log(\'updated current project!\');\n}\n\nfunction updateCurrentTask(selectedTask) {\n  currentTask = selectedTask;\n  console.log(\'updated current task!\');\n}\n\n/* ========== INITIALIZE PAGE LOAD ========== */\n\nfunction init() {\n  initialPageRender(toDoListProjectsTempData);\n  newProjectListener(addNewProjectDOM);\n}\n\n/* ========== INITIAL AND CURRENT RENDERING ========== */\nfunction initialPageRender(projects) {\n  const placeHolder = document.createElement(\'div\');\n  renderSideBar(sideBarProjectsDOM, projects);\n  renderToMainBody(mainBodyDOM, placeHolder);\n  // renderToMainBody(mainBodyDOM, renderSelectedProjectTasks(toDoListProjectsTempData[0], taskSelected, taskDeleted));\n  // renderToMainBody(mainBodyDOM, renderSelectedTask(toDoListProjectsTempData[0].getTasks()[1]));\n  // renderToMainBody(mainBodyDOM, renderProjectForm());\n  // renderToMainBody(mainBodyDOM, renderTaskForm());\n}\n\n// This is the function that will be called the majority of the time\nfunction currentPageRenderer(projects, mainContent) {\n  renderSideBar(sideBarProjectsDOM, projects);\n  renderToMainBody(mainBodyDOM, mainContent);\n}\n\nfunction renderToMainBody(main, content) {\n  removeAllChildrenNodesMain(main); // Clears the children nodes then adds the wanted content\n  main.appendChild(content);\n}\n\n// For removing all the children nodes in Main\nfunction removeAllChildrenNodesMain(parent) {\n  while (parent.childNodes.length > 1) {\n    parent.removeChild(parent.lastChild);\n  }\n}\n\nfunction renderSideBar(side, projects) {\n  removeAllChildrenNodesSide(side);\n  projects.forEach((project) => {\n    const sideprojectcard = renderSideProject(project, projectSelected, projectDeleted);\n    // side.appendChild(sideprojectcard); // Inserts below new project\n    side.insertBefore(sideprojectcard, side.firstChild); // Inserts above new project\n  });\n}\n\n// For removing all the chidlren nodes in Side\nfunction removeAllChildrenNodesSide(parent) {\n  while (parent.childNodes.length > 4) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\n/* ========== HTML ELEMENT CREATION ========== */\n// Includes the event handler on click with creation\n\nfunction renderSideProject(project, selectedFunc, deletedFunc) {\n  const data = grabProjectData(project);\n  const { title } = data;\n  // const tasks = data.tasks;\n\n  // Organizing Element\n  const cardContainer = document.createElement(\'div\');\n  cardContainer.classList.add(\'container\', \'u-full-width\', \'py-1\');\n\n  // Actual Card Element that we use an event listener on\n  const sideBarCard = document.createElement(\'div\');\n  sideBarCard.classList.add(\'sidebar-card\');\n  sideBarCard.innerHTML = `\n        <img src="images/list.svg" alt="" class="sidebar-card-icon">\n        <div class="sidebar-card-title text-center">\n            ${title}\n        </div>\n        <img src="images/delete.svg" alt="" class="sidebar-card-delete-icon">\n    `;\n  cardContainer.appendChild(sideBarCard);\n\n  // Handles Selection and Deletion\n  sideBarCard.addEventListener(\'click\', (e) => {\n    if (e.target.classList.contains(\'sidebar-card-delete-icon\')) {\n      deletedFunc(title);\n    } else {\n      updateCurrentProject(project);\n      selectedFunc(data);\n    }\n  });\n  return cardContainer;\n}\n\nfunction renderSelectedProjectTasks(projectData, selectedFunc, deletedFunc) {\n  // const data = grabProjectData(project);\n  const { title } = projectData;\n  const taskData = projectData.tasks;\n\n  const mainContentContainer = document.createElement(\'div\');\n  mainContentContainer.classList.add(\'py-1\');\n\n  const titleContainer = document.createElement(\'div\');\n  titleContainer.classList.add(\'project-title-container\');\n  titleContainer.innerHTML = `\n        <h6 class="text-center project-title">${title}</h6>\n        <img src="images/edit.svg" alt="" class="project-title-edit-icon">\n    `;\n  mainContentContainer.appendChild(titleContainer);\n\n  titleContainer.addEventListener(\'click\', (e) => {\n    if (e.target.classList.contains(\'project-title-edit-icon\')) {\n      console.log(\'cliked title edit icon!\');\n      currentPageRenderer(toDoListProjectsTempData, renderProjectForm(cancelForm, submitProject, e.target.previousElementSibling.innerText));\n    }\n  });\n\n  const projectTaskListContainer = document.createElement(\'div\');\n  projectTaskListContainer.classList.add(\'project-list\', \'u-full-width\');\n  mainContentContainer.appendChild(projectTaskListContainer);\n\n  taskData.forEach((task) => {\n    const { name } = task;\n    // const description = task.description;\n    // const priority = task.priority; // Maybe could add some sick UI to show priority\n\n    const projectListItem = document.createElement(\'div\');\n    projectListItem.classList.add(\'project-list-item\', \'my-1\');\n\n    projectListItem.innerHTML = `\n            <img src="images/right-arrow.svg" alt="" class="project-list-item-icon">\n            <div class="project-list-item-title">${name}</div>\n            <img src="images/delete.svg" alt="" class="project-list-item-delete">\n        `;\n    // projectTaskListContainer.appendChild(projectListItem);\n    projectTaskListContainer.insertBefore(projectListItem, projectTaskListContainer.firstChild); // Inserts above new project\n  });\n\n  // Making sure the last child is the \'Add a new task\' task\n  const addNewItemLast = document.createElement(\'div\');\n  addNewItemLast.classList.add(\'project-list-add-item\');\n  addNewItemLast.innerHTML = `\n        <img src="images/plus.svg" alt="" class="project-list-item-icon">\n        <div class="project-list-item-title">Add a new task</div>\n    `;\n  mainContentContainer.appendChild(addNewItemLast);\n\n  // Event Handling; CHEESING "Add a new task" task\n  mainContentContainer.addEventListener(\'click\', (e) => {\n    if (e.target.classList.contains(\'project-list-item-delete\')) {\n      deletedFunc(e.target.previousElementSibling.innerText); // Gets the title of the task\n    } else if (e.target.classList.contains(\'project-list-add-item\') || e.target.innerText === \'Add a new task\') {\n      console.log(\'adding new item!\');\n      currentPageRenderer(toDoListProjectsTempData, renderTaskForm(cancelForm, submitTask));\n    } else {\n      taskData.forEach((task) => {\n        if (e.target.innerText === task.name) {\n          updateCurrentTask(task);\n          selectedFunc(task, projectData);\n        }\n      });\n    }\n  });\n\n  return mainContentContainer;\n}\n\nfunction renderSelectedTask(task, backFunc, editFunc, deleteFunc, currentProj) {\n  const { name } = task;\n  const { description } = task;\n  const { priority } = task;\n\n  const selectedTaskContainer = document.createElement(\'div\');\n  selectedTaskContainer.classList.add(\'selected-task\', \'py-4\', \'my-5\');\n\n  selectedTaskContainer.innerHTML = `\n        <img src="images/back-button.svg" alt="" class="selected-task-back-icon">\n        <img src="images/edit.svg" alt="" class="selected-task-edit-icon">\n        <img src="images/delete.svg" alt="" class="selected-task-delete-icon">\n        \n        <div class="task-title-container">\n            <h6 class="text-center task-title">${name}</h6>\n        </div>\n        <div class="task-description">\n            <p>\n                ${description}\n            </p>\n        </div>\n        <div class="task-priority">\n            <p>Task Priority: ${priority}</p>\n        </div>\n    `;\n\n  selectedTaskContainer.addEventListener(\'click\', (e) => {\n    if (e.target.classList.contains(\'selected-task-back-icon\')) {\n      console.log(\'clicked back!\');\n      backFunc(currentProj);\n    }\n    if (e.target.classList.contains(\'selected-task-edit-icon\')) {\n      // Need to pass editFunc an object filled with the details of the current task\n      const taskDetailsObj = {};\n      const { childNodes } = e.target.parentNode;\n      taskDetailsObj.name = childNodes[7].innerText;\n      taskDetailsObj.description = childNodes[9].innerText;\n      taskDetailsObj.priority = childNodes[11].innerText;\n      editFunc(taskDetailsObj);\n    }\n    if (e.target.classList.contains(\'selected-task-delete-icon\')) {\n      console.log(\'clicked delete!\');\n      deleteFunc(name);\n    }\n  });\n\n  return selectedTaskContainer;\n}\n\nfunction renderProjectForm(cancelFunc, submitFunc, projectTitle = \'\') {\n  const formContainer = document.createElement(\'form\');\n  formContainer.classList.add(\'task-project-form\', \'my-4\');\n  formContainer.innerHTML = `\n        <h6 class="text-center">New Project</h6>\n\n        <label for="projectName">Project Name</label>\n        <input type="text" class="u-full-width project-input" id="projectName" value="${projectTitle}">\n        \n        <button class="button-primary" id="cancel">Cancel</button>\n        <input class="button-primary" type="submit" value="submit">\n    `;\n\n  formContainer.addEventListener(\'submit\', (e) => {\n    e.preventDefault();\n    console.log(\'submitted!\');\n    submitFunc(e.path[0].childNodes[5].value); // Passing the text within the project name input\n  });\n\n  formContainer.querySelector(\'#cancel\').addEventListener(\'click\', (e) => {\n    e.preventDefault();\n    console.log(\'cancelled!\');\n    cancelFunc();\n  });\n\n  return formContainer;\n}\n\nfunction renderTaskForm(cancelFunc, submitFunc, taskDetailsObject = {}) {\n  const formContainer = document.createElement(\'form\');\n  formContainer.classList.add(\'task-project-form\', \'my-4\');\n  if (Object.keys(taskDetailsObject).length === 0) {\n    formContainer.innerHTML = `\n        <h6 class="text-center">New Task</h6>\n\n        <label for="taskName">Task Name</label>\n        <input type="text" class="u-full-width text-input" id="taskName">\n\n        <label for="taskDescription">Description</label>\n        <textarea class="u-full-width task-input" placeholder="Why I need to finish this task..." id="taskDescription"></textarea>\n\n        <label for="taskPriority">Priority</label>\n        <select class="u-full-width task-input" id="taskPriority">\n            <option value="Option 1">High</option>\n            <option value="Option 2">Medium</option>\n            <option value="Option 3">Low</option>\n        </select>\n        \n        <button class="button-primary" id="cancel">Cancel</button>\n        <input class="button-primary" type="submit" value="submit">\n    `;\n  } else {\n    formContainer.innerHTML = `\n        <h6 class="text-center">New Task</h6>\n\n        <label for="taskName">Task Name</label>\n        <input type="text" class="u-full-width text-input" id="taskName" value="${taskDetailsObject.name}">\n\n        <label for="taskDescription">Description</label>\n        <textarea class="u-full-width task-input" id="taskDescription">${taskDetailsObject.description}</textarea>\n\n        <label for="taskPriority">Priority</label>\n        <select class="u-full-width task-input" id="taskPriority">\n            <option value="Option 1">High</option>\n            <option value="Option 2">Medium</option>\n            <option value="Option 3">Low</option>\n        </select>\n        \n        <button class="button-primary" id="cancel">Cancel</button>\n        <input class="button-primary" type="submit" value="submit">\n    `;\n  }\n\n  formContainer.addEventListener(\'submit\', (e) => {\n    e.preventDefault();\n    console.log(\'submitted!\');\n    const taskName = e.path[0].childNodes[5].value; // name\n    const taskDesc = e.path[1].childNodes[1].childNodes[9].value; // desc\n    const taskPriority = e.path[1].childNodes[1].childNodes[13].options[e.path[1].childNodes[1].childNodes[13].selectedIndex].innerText; // prior\n    submitTask(taskName, taskDesc, taskPriority);\n  });\n\n  formContainer.querySelector(\'#cancel\').addEventListener(\'click\', (e) => {\n    e.preventDefault();\n    console.log(\'cancelled!\');\n    cancelFunc();\n  });\n\n  return formContainer;\n}\n\n/* ========== EVENT HANDLER FUNCIONS ========== */\n\n// These Functions will call pageRenderer()\nfunction projectSelected(projData) {\n  console.log(`Selected ${projData.title}!`);\n  currentPageRenderer(toDoListProjectsTempData, renderSelectedProjectTasks(projData, taskSelected, taskDeleted));\n}\n\nfunction projectDeleted(projTitle) {\n  console.log(`Deleted ${projTitle}!`);\n  _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(projTitle);\n  toDoListProjectsTempData = _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();\n  const placeHolder = document.createElement(\'div\');\n  currentPageRenderer(toDoListProjectsTempData, placeHolder);\n}\n\nfunction taskSelected(task, projData) {\n  console.log(`Selected ${task.name}!`);\n  currentPageRenderer(toDoListProjectsTempData, renderSelectedTask(task, backToProjectTasks, editTask, taskDeleted, projData));\n}\n\nfunction taskDeleted(taskName) {\n  console.log(`Deleted ${taskName}!`);\n  currentProject.deleteTask(taskName);\n  currentPageRenderer(toDoListProjectsTempData, renderSelectedProjectTasks(currentProject, taskSelected, taskDeleted));\n}\n\n// These functions are called on Submit of the forms\n// Calls the Data Handler functions of setProject & setTask\n// After creating the new project or task, calls pageRender\nfunction submitProject(projectName) {\n  if (currentProject === null) {\n    _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName));\n    toDoListProjectsTempData = _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects(); // Needed to re-initialize the projects\n    const placeHolder = document.createElement(\'div\');\n    currentPageRenderer(toDoListProjectsTempData, placeHolder);\n  } else {\n    _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"].updateProject(currentProject, projectName);\n    updateCurrentProject(null);\n    const placeHolder = document.createElement(\'div\');\n    currentPageRenderer(toDoListProjectsTempData, placeHolder);\n  }\n}\n\nfunction submitTask(taskName, taskDesc, taskPriority) {\n  if (currentTask === null) {\n    const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName);\n    newTask.setDescription(taskDesc);\n    newTask.setPriority(taskPriority);\n    currentProject.addTask(newTask);\n    updateCurrentTask(null);\n    backToProjectTasks(currentProject);\n  } else {\n    currentProject.updateTask(currentTask, taskName, taskDesc, taskPriority);\n    updateCurrentTask(null);\n    backToProjectTasks(currentProject);\n  }\n}\n\nfunction editTask(taskDetailsObj) {\n  currentPageRenderer(toDoListProjectsTempData, renderTaskForm(cancelForm, submitTask, taskDetailsObj));\n}\n\nfunction cancelForm() {\n  const placeHolder = document.createElement(\'div\');\n  currentPageRenderer(toDoListProjectsTempData, placeHolder);\n}\n\nfunction backToProjectTasks(project) {\n  currentPageRenderer(toDoListProjectsTempData, renderSelectedProjectTasks(project, taskSelected, taskDeleted));\n}\n\n\n\n\n//# sourceURL=webpack://todolistproject/./src/modules/RenderUI.js?'
        );

        /***/
      },

    /***/ "./src/modules/Task.js":
      /*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nclass Task {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.description = '';\r\n        this.priority = '';\r\n    }\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n\r\n    setName(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    getDescription() {\r\n        return this.description;\r\n    }\r\n\r\n    setDescription(description) {\r\n        this.description = description;\r\n    }\r\n\r\n    getPriority() {\r\n        return this.priority;\r\n    }\r\n\r\n    setPriority(priority) {\r\n        this.priority = priority;\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todolistproject/./src/modules/Task.js?"
        );

        /***/
      },

    /***/ "./src/modules/ToDoList.js":
      /*!*********************************!*\
  !*** ./src/modules/ToDoList.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");\n\r\n\r\n\r\nclass ToDoList {\r\n    constructor() {\r\n        this.projects = [];\r\n    }\r\n\r\n    getProjects() {\r\n        return this.projects;\r\n    }\r\n\r\n    getProject(projectName) {\r\n        return this.projects.find((project) => project.getTitle() === projectName);\r\n    }\r\n\r\n    addProject(newProject) {\r\n        if (this.projects.find((project) => project.getTitle() === newProject.getTitle())) return;\r\n        this.projects.push(newProject)\r\n    }\r\n\r\n    deleteProject(projectName) {\r\n        this.projects = this.projects.filter(project => project.getTitle() !== projectName);\r\n    }\r\n\r\n    updateProject(currentProject, newProjectName) {\r\n        const proj = this.projects.find((project) => project.getTitle() === currentProject.getTitle());\r\n        this.deleteProject(currentProject.getTitle());\r\n        proj.setTitle(newProjectName);\r\n        this.projects.push(proj);\r\n    }\r\n\r\n}\r\n\r\n// This is the "Temp Storage"\r\n\r\nconst ToDoListTemp = new ToDoList();\r\n\r\nconst tempProject1 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]("test1");\r\nconst tempProject2 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]("test2"); \r\nconst tempProject3 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]("test3"); \r\n\r\nconst tast1 = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("cwinge");\r\ntast1.setDescription("OOOOOOOOOOOOOOOOOGA");\r\ntast1.setPriority("High");\r\n\r\nconst tast2 = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("fgnaifgnaEIOLfnile");\r\ntast2.setDescription("OOOOOOOawdaFAEFASEfASEFGOOOOOOOOOGA");\r\ntast2.setPriority("Low");\r\n\r\nconst tast3 = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("vyak");\r\ntast2.setDescription("deeznuts");\r\ntast2.setPriority("Low");\r\n\r\ntempProject1.addTask(tast1);\r\ntempProject2.addTask(tast2);\r\ntempProject3.addTask(tast3);\r\n\r\nToDoListTemp.addProject(tempProject1);\r\nToDoListTemp.addProject(tempProject2);\r\nToDoListTemp.addProject(tempProject3);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoListTemp);\n\n//# sourceURL=webpack://todolistproject/./src/modules/ToDoList.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
