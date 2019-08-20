const eventsContainer = document.querySelector("#events")
const eventsDisplay = document.querySelector("#eventsDisplay")
const listOfEvents = document.querySelector("#listOfEvents")

const eventsRendering = {
<<<<<<< HEAD

    renderEvents(HTMLString) {
        eventsContainer.innerHTML += HTMLString
=======
    renderEvents(location, HTMLString) {
        location.innerHTML += HTMLString
>>>>>>> master
    }
}

export default eventsRendering