const eventsAPI = {
    getEvents(activeUserId) {
        return fetch(`http://localhost:8088/events?userId=${activeUserId}`)
            .then(response => response.json())
    },
    saveNewEvent(newEvent) {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        })
            .then(response => response.json())
    }
}

export default eventsAPI