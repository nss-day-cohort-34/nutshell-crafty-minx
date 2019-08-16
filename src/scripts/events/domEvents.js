const eventsContainer = document.querySelector("#events")

const renderEvents = (HTMLString) => {
    eventsContainer.innerHTML += HTMLString
}

export default renderEvents