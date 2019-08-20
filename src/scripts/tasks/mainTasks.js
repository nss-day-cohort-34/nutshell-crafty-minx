import tasksHTML from "./factoryTasks";
import renderTasks from "./domTasks";
import renderRegistration from "../registration/domRegistration";
import API from "./dataTasks.js";

// const registrationContainer = document.querySelector("#registration")
// const createNewTaskForm = document.querySelector("#createNewTaskForm")
// const clearTaskDisplay = document.querySelector("#clearTaskDisplay")
let activeUserId = sessionStorage.getItem("activeUser")
console.log(activeUserId)
// get data and render it
const getTasks = () => {
    const list = document.querySelector("#listOfTasks")
    API.getTasks(activeUserId).then(tasksArray => {
        tasksArray.forEach(entry => {
            const tasksList = tasksHTML.createTasksList(entry)
            renderTasks(list, tasksList)
        })
    })
}
// this creates an object
const createNewTaskList = (title, date, userId) => {
    return {
        "title": title.value,
        "date": date.value,
        "completed": false,
        "userId": userId
    }
}

const initTasks = () => {
    // renders tast container
    const tasksContainer = document.querySelector("#tasks")
    const taskshtml = tasksHTML.tasksContainerHTML()
    renderTasks(tasksContainer, taskshtml)
    getTasks()
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
            const newTaskForm = tasksHTML.createNewTaskForm()
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
                    renderTasks(tasksContainer, taskshtml)
                    getTasks()
                })
        } else if (event.target.id.startsWith("deleteButton")) {
            const taskToDelete = event.target.id.split("_")[1]
            API.deleteTask(taskToDelete)
            .then(() => {
                tasksContainer.innerHTML = ""
                    const taskshtml = tasksHTML.tasksContainerHTML()
                    renderTasks(tasksContainer, taskshtml)
                    getTasks()
            })
        } else if (event.target.id.startsWith("editButton")) {
            const taskToEdit = event.target.id.split("_")[1]
            console.log(taskToEdit)
            API.getSingleTask(taskToEdit)
            .then(task => {
                const taskName = document.querySelector("#taskName")
                const taskCompletionDate = document.querySelector("#taskCompletionDate")
                const hiddenId = document.querySelector("#taskId")
                hiddenId.value = task.id
                taskName.value = task.title
                taskCompletionDate.value = task.completed
            })

            // API.editTask(taskToEdit)
        }
    })
}

export default initTasks
