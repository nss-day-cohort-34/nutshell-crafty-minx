const API = {
    getTasks(activeUserId) {
        return fetch(`http://localhost:8088/tasks?userId=${activeUserId}`)
        .then(response => response.json())
    },
    saveNewTask(task) {
        return fetch("http://localhost:8088/tasks", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(response => response.json())
    },
    // delete needs id / id
    deleteTask(id) {
        return fetch (`http://localhost:8088/tasks/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    // edit button needs (object) and / id
    editTask(task) {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
    },
    getSingleTask(hidden) {
        return fetch(`http://localhost:8088/tasks/${hidden}`)
            .then(response => response.json())
    }
}

export default API