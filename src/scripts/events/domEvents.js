const eventsContainer = document.querySelector("#events")
const eventsDisplay = document.querySelector("#eventsDisplay")
const listOfEvents = document.querySelector("#listOfEvents")

const eventsRendering = {
    renderEvents(location, HTMLString) {
        location.innerHTML += HTMLString
    },
    renderOneItem(location, HTMLString) {
        location.innerHTML = HTMLString
    }
}

export default eventsRendering