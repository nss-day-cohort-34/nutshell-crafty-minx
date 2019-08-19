const tasksContainer = document.querySelector("#tasks")

const renderTasks = (HTMLString) => {
    tasksContainer.innerHTML += HTMLString
}

export default renderTasks