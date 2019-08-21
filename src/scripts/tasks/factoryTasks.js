const tasksHTML = {
    tasksContainerHTML() {
        return `
            <input type="hidden" id="taskId" value=""/>
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
                <input type="date" name="taskCompletionDate" id="taskCompletionDate">
            </fieldset>
            <button id="saveTask">Save Task</button>
            </section>
        `
    },
    createTasksList(taskObject, completedStatus) {
        return `
            <section id="taskListName">Title: ${taskObject.title}</section>
            <section id="taskCompletionDate">Expected Completion Date: ${taskObject.date}</section>
            <section id="taskCompletion">Completed: <input type="checkbox" id="check" value="${taskObject.completed}" ${taskObject.completed === true ? "checked" : ""}></section>
            <button id="editButton_${taskObject.id}">Edit</button>
            <button id="deleteButton_${taskObject.id}">Delete</button>
        `
    }
    // editTaskForm() {
    //     return `
    //     <section id="editTaskForm">
    //     <h3>Edit Task</h3>
    //     <fieldset>
    //         <label for="taskName">Name of Task</label>
    //         <input type="text" id="editTaskName" name="taskName"></input>
    //     </fieldset>
    //     <fieldset>
    //         <label for="taskCompletionDate">Expected Completion Date</label>
    //         <input type="date" name="taskCompletionDate" id="editTaskCompletionDate">
    //     </fieldset>
    //     <button id="saveEditedTask">Save Changes</button>
    //     </section>
    //     `
    // }
}

export default tasksHTML
// ternary