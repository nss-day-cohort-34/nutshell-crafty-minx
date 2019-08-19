import tasksHTML from "./factoryTasks";
import renderTasks from "./domTasks";
import renderRegistration from "../registration/domRegistration";
import API from "../registration/dataRegistration";

// API.getTasks().then(tasksArray => {
//     tasksArray.forEach(entry => {
//         const tasksList = createTasksList(entry)
//         renderTasks(tasksList)
//     })
// })

// const createNewTaskForm = document.querySelector("#createNewTaskForm")
// const clearTaskDisplay = document.querySelector("#clearTaskDisplay")
const tasksContainer = document.querySelector("#tasks")
let activeUserId = sessionStorage.getItem("activeUser")

const initTasks = () => {
    const taskshtml = tasksHTML.tasksContainerHTML()
    renderTasks(taskshtml)
}

// Capture Values of Input Fields by User and store in Function
const createNewTaskList = (title, date, userId) => {
    return {
        "title": title.value,
        "date": date.value,
        "completed": false,
        "userId": userId
    }
}
// Get reference to Task Form Container Buttons and Functionality
const taskName = document.getElementById("taskName")
const taskCompletionDate = document.getElementById("taskCompletionDate")
// Capture User Input On createNewTaskForm
// Event Listener On Save Button to Put Into Tasks API (#saveTask)
// Render to List of Tasks Container
tasksContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("createTask")) {
        tasksContainer.innerHTML = ""
        const newTaskForm = tasksHTML.createNewTaskForm()
        renderRegistration(newTaskForm)
    }
})

tasksContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("saveTask")) {
        const taskListObject = createNewTaskList(taskName, taskCompletionDate)
        console.log(taskListObject)
        // API.saveNewTask(taskListObject)
        // .then(API.getTasks)
        // .then(tasks => {
        //     createNewTaskForm.innerHTML = ""
        //     tasks.forEach(task => {
        //         const tasksListHTML = createTasksList(task)
        //         renderTasks(tasksListHTML)
        //     })
        // })
    }
})

export default initTasks
