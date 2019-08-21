const messagesAPI = {
    getAllMessages() {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(response => response.json())
    },

    postMessage(messageObject) {
        console.log(messageObject)
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)
        })
            .then(response => response.json())

    },

    getSingleMessage(messageId) {
        return fetch(`http://localhost:8088/messages/${messageId}?_expand=user`)
        .then(response => response.json())
    },

    editMessage(messageObject) {
        return fetch(`http://localhost:8088/messages/${messageObject.id}?_expand=user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)
        })
        .then(response => response.json())
    }
}

export default messagesAPI
