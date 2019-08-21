import eventsRendering from "./domEvents";
import eventsHTML from "./factoryEvents";
import eventsAPI from "./dataEvents";



const initEvents = (activeUserId) => {
    const eventsContainer = document.querySelector("#events")
    // Initial event display
    const initialEventDisplay = eventsHTML.createEventsContainer()
    eventsRendering.renderEvents(eventsContainer, initialEventDisplay)
    eventsAPI.getEvents(activeUserId)
        .then(events => {
            events.forEach(event => {
                const HTMLVersion = eventsHTML.createEventRepresentation(event)
                eventsRendering.renderEvents(listOfEvents, HTMLVersion)
            })
        })

    const eventsDisplay = document.querySelector("#eventsDisplay")
    const listOfEvents = document.querySelector("#listOfEvents")

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
            // eventsDisplay.innerHTML = ""
            const eventFormContainer = document.querySelector("#eventFormContainer")
            const eventsForm = eventsHTML.createNewEventForm()
            eventsRendering.renderEvents(eventFormContainer, eventsForm)
            // Logic to save event
        } else if (event.target.id.startsWith("saveEvent")) {
            // Get reference to input fields
            const eventTitleInput = document.querySelector("#eventTitle")
            const eventDateInput = document.querySelector("#eventDate")
            const eventLocationInput = document.querySelector("#eventLocation")
            // Check for empty fields before creating event. Display an alert if any field is blank
            if (eventTitleInput.value === "" || eventDateInput.value === "" || eventLocationInput.value === "") {
                alert("Please fill out all fields")
            // } else if {
            } else {
                const newEvent = createNewEvent(eventTitleInput, eventDateInput, eventLocationInput, activeUserId)
                eventsAPI.saveNewEvent(newEvent)
                    // .then(() => {
                    //     const eventForm = document.querySelector("#eventForm")
                    //     eventForm.innerHTML = ""
                    // })
                    .then(() => {
                        eventTitleInput.value = ""
                        eventDateInput.value = ""
                        eventLocationInput.value = ""
                        return eventsAPI.getEvents(activeUserId)
                    })
                    .then(events => {
                        listOfEvents.innerHTML = ""
                        events.forEach(event => {
                            const HTMLVersion = eventsHTML.createEventRepresentation(event)
                            eventsRendering.renderEvents(listOfEvents, HTMLVersion)
                        })
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
            if (confirmDeletion === true) {
                const eventToDelete = event.target.id.split("-")[1]
                eventsAPI.deleteEvent(eventToDelete)
                    .then(() => {
                        return eventsAPI.getEvents(activeUserId)
                    })
                    .then(events => {
                        listOfEvents.innerHTML = ""
                        events.forEach(event => {
                            const HTMLVersion = eventsHTML.createEventRepresentation(event)
                            eventsRendering.renderEvents(listOfEvents, HTMLVersion)
                        })
                    })
            }
        } else if (event.target.id.startsWith("edit")) {
            const eventToEdit = event.target.id.split("-")[1]
            // Get a reference to the hidden Id field for editing and sorting purposes
            const hiddenEventId = document.querySelector("#hiddenEventId")
            eventsAPI.getSingleEvent(eventToEdit)
                .then((event) => {
                    const eventFormContainer = document.querySelector("#eventFormContainer")
                    const eventsForm = eventsHTML.createNewEventForm()
                    eventsRendering.renderEvents(eventFormContainer, eventsForm)
                    return event
                })
                .then(event => {
                    const eventTitleInput = document.querySelector("#eventTitle")
        const eventDateInput = document.querySelector("#eventDate")
        const eventLocationInput = document.querySelector("#eventLocation")
                    hiddenEventId.value = event.id
                    eventTitleInput.value = event.title
                    eventDateInput.value = event.date
                    eventLocationInput.value = event.location
                })
            // .then(() => {
            //     return eventsAPI.getEvents(activeUserId)
            //         .then(events => {
            //             listOfEvents.innerHTML = ""
            //             events.forEach(event => {
            //                 const HTMLVersion = eventsHTML.createEventRepresentation(event)
            //                 eventsRendering.renderEvents(listOfEvents, HTMLVersion)
            //             })
            //         })
            // })
        }
    })
}

export default initEvents