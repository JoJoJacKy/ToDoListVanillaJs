
class Project {

    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter(task => task.name !== taskName);
    }

}

export default Project;