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
    editTask(task, id) {
        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(() => {
            const hiddenId = document.querySelector("#taskId")
            hiddenId.value = ""
        })
    },
    getSingleTask(id) {
        return fetch(`http://localhost:8088/tasks/${id}`)
            .then(response => response.json())
    }
}

export default API