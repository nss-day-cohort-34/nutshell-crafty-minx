const eventsContainer = document.querySelector("#events")
const eventsDisplay = document.querySelector("#eventsDisplay")
const listOfEvents = document.querySelector("#listOfEvents")

const eventsRendering = {

    renderEvents(HTMLString) {
        eventsContainer.innerHTML += HTMLString
    }
}

export default eventsRendering