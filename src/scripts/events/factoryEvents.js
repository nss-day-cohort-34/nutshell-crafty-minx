// Events container HTML
const eventsHTML = {
    createEventsContainer() {
        return `
            <h2>Events</h2>
            <section id="eventsDisplay">
                <button id="createEvent">Create Event</button>
                <div id="listOfEvents">
                </div>
            </section>
        `
    },
    createNewEventForm() {
        return `
        <section id="eventForm">
            <h4>Create New Event</h4>
            <input type="hidden" id="hiddenEventId" value="" />
            <fieldset>
            <label for="eventTitle">Event Title</label>    
            <input type="text" id="eventTitle" name="eventTitle"></input>  
            </fieldset>
            <fieldset>
            <label for="eventDate">Event Date</label>    
            <input type="date" id="eventDate" name="eventDate"></input>  
            </fieldset>
            <fieldset>
            <label for="eventLocation">Event Location</label>    
            <input type="text" id="eventLocation" name="eventLocation"></input>  
            </fieldset>
            <button id="saveNewEvent">Save New Event</button>
        </section>
           `
    },
    createEventRepresentation(event) {
        return `
        <section class="event">
            <p class="eventTitle">Title: ${event.title}</p>
            <p class="eventDate">Date: ${event.date}</p>
            <p class="eventLocation">Location: ${event.location}</p>
            <button id="edit-${event.id}">Edit</button>
            <button id="delete-${event.id}">Delete</button>
        </section>
        `
    }
}

export default eventsHTML