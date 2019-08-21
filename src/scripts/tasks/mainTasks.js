import tasksHTML from "./factoryTasks";
import renderTasks from "./domTasks";
import renderRegistration from "../registration/domRegistration";
import API from "./dataTasks.js";

// const registrationContainer = document.querySelector("#registration")
// const createNewTaskForm = document.querySelector("#createNewTaskForm")
// const clearTaskDisplay = document.querySelector("#clearTaskDisplay")
// let activeUserId = sessionStorage.getItem("activeUser")
// console.log(activeUserId)
// get data and render it
// this creates an object
const createNewTaskList = (title, date, userId) => {
    return {
        "title": title.value,
        "date": date.value,
        "completed": false,
        "userId": userId
    }
}
// const taskName = document.querySelector("#taskName")
// const taskCompletionDate = document.querySelector("#taskCompletionDate")
// const hiddenId = document.querySelector("#taskId")

const updateFields = task => {
    return fetch (`http://localhost:8088/tasks/${task}`)
    .then(response => response.json())
    .then(task => {
        hiddenId.value = task.id
        taskName.value = task.title
        taskCompletionDate.value = task.completed
    })
}
const getTasks = (activeUserId) => {
    const list = document.querySelector("#listOfTasks")
    API.getTasks(activeUserId).then(tasksArray => {
        tasksArray.forEach(entry => {
            const tasksList = tasksHTML.createTasksList(entry)
            renderTasks(list, tasksList)
        })
    })
}

const initTasks = (activeUserId) => {
    // renders task container
    const tasksContainer = document.querySelector("#tasks")
    const taskshtml = tasksHTML.tasksContainerHTML()
    renderTasks(tasksContainer, taskshtml)
    getTasks(activeUserId)
    // Capture Values of Input Fields by User and store in Function
    // Get reference to Task Form Container Buttons and Functionality
    // Capture User Input On createNewTaskForm

    // Event Listener On Save Button to Put Into Tasks API (#saveTask)
    // Render to List of Tasks Container
    tasksContainer.addEventListener("click", event => {
        if (event.target.id.startsWith("createTask")) {
            // clear the container
            tasksContainer.innerHTML = ""
            // make html the task form
            const newTaskForm = tasksHTML.createNewTaskForm("Create New Task")
            // rendering the task form to the dom
            renderTasks(tasksContainer, newTaskForm)
        } else if (event.target.id.startsWith("saveTask")) {
            // getting a ref to the inputs
            const taskName = document.querySelector("#taskName")
            const taskCompletionDate = document.querySelector("#taskCompletionDate")
            // creating an obj out of the inputs val
            const taskListObject = createNewTaskList(taskName, taskCompletionDate, activeUserId)
            API.saveNewTask(taskListObject)
                .then(() => {
                    // clearing the container and rerendering the task container
                    // tasksContainer.innerHTML = ""
                    const taskshtml = tasksHTML.tasksContainerHTML()
                    tasksContainer.innerHTML = ""
                    renderTasks(tasksContainer, taskshtml)
                    getTasks(activeUserId)
                })
        } else if (event.target.id.startsWith("deleteButton")) {
            const taskToDelete = event.target.id.split("_")[1]
            API.deleteTask(taskToDelete)
                .then(() => {
                    tasksContainer.innerHTML = ""
                    const taskshtml = tasksHTML.tasksContainerHTML()
                    renderTasks(tasksContainer, taskshtml)
                    getTasks(activeUserId)
                })
        } else if (event.target.id.startsWith("editButton")) {
            const taskToEdit = event.target.id.split("_")[1]
            console.log(taskToEdit)
            // get corresponding resource from the API
            API.getSingleTask(taskToEdit)
                // Render Form to the DOM with input fields
                .then(() => {

                    const editTaskHTML = tasksHTML.createNewTaskForm("Edit Task")
                    // rendering the edit task form to the dom
                    renderTasks(tasksContainer, editTaskHTML)
                })
                // Populate input fields in the DOM to represent the current state of the resource
                .then(() => {
                    const taskName = document.querySelector("#taskName")
                    const taskCompletionDate = document.querySelector("#taskCompletionDate")
                    const hiddenId = document.querySelector("#taskId")
                    const updateFields = task => {
                        return fetch(`http://localhost:8088/tasks/${task}`)
                            .then(response => response.json())
                            .then(task => {
                                hiddenId.value = task.id
                                taskName.value = task.title
                                taskCompletionDate.value = task.completed
                            })
                    }
                    updateFields(taskToEdit)
                })
        }
    })
}

// make sure the form is rendered to the dom where the hidden id exists

// Have an event handler on some affordance for a user to edit
// a particular resource,++++
// Get the corresponding resource from the API++++
// Render a form to the DOM with input fields++++
// Populate input fields in the DOM to represent the current state of the resource++++
// Have an event handler on a button to allow the user to save changes
// Collect the user input from the DOM
// Send a request to the API to update the correct resource
// Redirect the user to either a list view, or a detail view
// of the resource s/he just modified

export default initTasks
