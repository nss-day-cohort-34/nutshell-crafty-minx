// Events container HTML
const eventsHTML = {
    createEventsContainer() {
        return `
            <h2>Events</h2>
            <section id="eventDisplay">
                <button id="createEvent">Create Event</button>
            </section>
            <section id="listOfEvents">
            </section>
        `
    },
    createNewEventForm() {
        return `
        <section id="eventForm">
            <h3>Create New Event</h3>
            <fieldset>
            <label for="eventTitle">Event Title</label>    
            <input type="text" id="eventTitle" name="eventTitle"></input>  
            </fieldset>
            <fieldset>
            <label for="eventDate">Event Date</label>    
            <input type="date" id="eventDate" name="eventDate"></input>  
            </fieldset>
            <button id="saveNewEvent">Save New Event</button>
        </section>
           `
    }
}
export default eventsHTML