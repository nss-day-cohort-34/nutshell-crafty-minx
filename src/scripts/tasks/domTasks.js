// const tasksContainer = document.querySelector("#tasks")

const renderTasks = (location, HTMLString) => {
    location.innerHTML += HTMLString
}

export default renderTasks