import eventsRendering from "./domEvents";
import eventsHTML from "./factoryEvents";
import eventsAPI from "./dataEvents";

// Get a reference to the hidden Id field for editing and sorting purposes
const hiddenEventId = document.querySelector("#hiddenEventId")

// Get userId for activeUser
let activeUserId = sessionStorage.getItem("activeUser")

const initEvents = () => {
    const eventsContainer = document.querySelector("#events")
    // Initial event display
    const initialEventDisplay = eventsHTML.createEventsContainer()
    eventsRendering.renderEvents(eventsContainer, initialEventDisplay)
    eventsAPI.getEvents(activeUserId)
        .then(events => {
            copyAndDisplayEvents(events)
        })

    const eventsDisplay = document.querySelector("#eventsDisplay")
    const listOfEvents = document.querySelector("#listOfEvents")

    // Sort events in descending order by ID
    const sortEventsById = (eventsArray) => {
        const descendingEvents = eventsArray.sort((a, b) => b.date - a.date)
        return descendingEvents
    }
    // Make a copy of the events array and apply sorting
    const copyAndDisplayEvents = (events) => {
        const copiedEventsArray = [...events]
        const sortedCopiedEvents = sortEventsById(copiedEventsArray)
        sortedCopiedEvents.forEach(event => {
            const HTMLVersion = eventsHTML.createEventRepresentation(event)
            eventsRendering.renderEvents(listOfEvents, HTMLVersion)
        })
    }

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
            eventsRendering.renderEvents(eventsContainer, eventsForm)
            // Logic to save new event
        } else if (event.target.id.startsWith("saveNewEvent")) {
            // Get reference to input fields
            const eventTitleInput = document.querySelector("#eventTitle")
            const eventDateInput = document.querySelector("#eventDate")
            const eventLocationInput = document.querySelector("#eventLocation")
            // Check for empty fields before creating event. Display an alert if any field is blank
            if (eventTitleInput.value === "" || eventDateInput.value === "" || eventLocationInput.value === "") {
                alert("Please fill out all fields")
            } else {
                // Create new event
                const newEvent = createNewEvent(eventTitleInput, eventDateInput, eventLocationInput, activeUserId)
                eventsAPI.saveNewEvent(newEvent)
                    .then(() => {
                        const eventForm = document.querySelector("#eventForm")
                        eventForm.innerHTML = ""
                    })
                    .then(() => (eventsAPI.getEvents(activeUserId)))
                    .then(events => {
                        console.log(events)
                        listOfEvents.innerHTML = ""
                        copyAndDisplayEvents(events)
                    })
            }
        } else {
            event.stopPropagation()
        }
    })

    // Edit and Delete event listener
    listOfEvents.addEventListener("click", () => {
        if (event.target.id.startsWith("delete")) {
            // Ask user to confirm deletion request before executing
            const confirmDeletion = confirm("Do you want to delete this event?")
            if (confirmDeletion) {
                const eventToDelete = event.target.id.split("-")[1]
                eventsAPI.deleteEvent(eventToDelete)
                    .then(() => (eventsAPI.getEvents(activeUserId)))
                    .then(events => {
                        listOfEvents.innerHTML = ""
                        copyAndDisplayEvents(events)
                    })
            }
        }
    })
}

export default initEvents