const tasksHTML = {
    tasksContainerHTML() {
        return `
            <h2>Tasks</h2>
            <div id="clearTaskDisplay">
                <button id="createTask">Create New Task</button>
            </div>
            <h3>Tasks to Complete</h3>
            <section id="listOfTasks"></section>
            `
    },
    createNewTaskForm() {
        return `
            <section id="createNewTaskForm">
            <h3>Create New Task</h3>
            <fieldset>
                <label for="taskName">Name of Task</label>    
                <input type="text" id="taskName" name="taskName"></input> 
            </fieldset>
            <fieldset>
                <label for="taskCompletionDate">Expected Completion Date</label>
                <input type="date" name="tastCompletionDate" id="taskCompletionDate">
            </fieldset>
            <button id="saveTask">Save Task</button>
        `
    },
    createTasksList() {
        return `
            <h3>List of Tasks</h3>
            <section id="taskListName">Name of Task</section>
            <section id="taskCompletionDate>Expected Completion Date</section>
            <button id="editButton">Edit</button>
        `
    }
}

export default tasksHTML
