import renderEvents from "./domEvents";
import eventsHTML from "./factoryEvents";
import eventsAPI from "./dataEvents";

// Get reference to Events article, the main container
const eventsContainer = document.querySelector("#events")

// Get userId for activeUser
const activeUserId = sessionStorage.getItem("activeUser")

const initEvents = () => {
    // Initial event display
    const initialEventDisplay = eventsHTML.createEventsContainer()
    renderEvents(initialEventDisplay)
    const eventsDisplay = document.querySelector("#eventsDisplay")

    // Function to create new event
    const createNewEvent = (eventTitle, eventDate, eventLocation, activeUserId) => {
        return {
            title: eventTitle.value,
            date: eventDate.value,
            location: eventLocation.value,
            userId: activeUserId
        }
    }
    // Add event listener to create event button
    eventsContainer.addEventListener("click", () => {
        // User clicks on "Don't have an account?"
        if (event.target.id.startsWith("createEvent")) {
            eventsDisplay.innerHTML = ""
            const eventsForm = eventsHTML.createNewEventForm()
            renderEvents(eventsForm)
        } else if (event.target.id.startsWith("saveNewEvent")) {
            const eventTitleInput = document.querySelector("#eventTitle")
            const eventDateInput = document.querySelector("#eventDate")
            const eventLocationInput = document.querySelector("#eventLocation")
            if (eventTitleInput.value === "" || eventDateInput.value === "" || eventLocationInput.value === "") {
                alert("Please fill out all fields")
            } else {
                const newEvent = createNewEvent(eventTitleInput, eventDateInput, eventLocationInput, activeUserId)
                eventsAPI.saveNewEvent(newEvent)
            }
        } else {
            event.stopPropagation()
        }
    })
}

export default initEvents