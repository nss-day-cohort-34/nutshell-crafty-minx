const API = {
    getUsers() {
        return fetch("http://localhost:8088/users")
            .then(response => response.json())
    },
    saveNewUser(newUser) {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
    }
}

export default API