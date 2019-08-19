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
            <h3>Create New Event</h3>
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
    }
}
export default eventsHTML