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
    },
    deleteEvent(eventId) {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    editEvent(event) {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(response => response.json())
    },
    getSingleEvent(event) {
        return fetch(`http://localhost:8088/events/${event.id}`)
            .then(response => response.json())
    }
}

export default eventsAPI