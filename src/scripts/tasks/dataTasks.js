const API = {
    getTasks() {
        return fetch("http://localhost:8088/tasks")
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
    }
}

export default API