import renderEvents from "./domEvents";
import eventsHTML from "./factoryEvents";

const initialEventDisplay = eventsHTML.createEventsContainer()



const mainEvents = () => {
    renderEvents(initialEventDisplay)
    

}

export default mainEvents