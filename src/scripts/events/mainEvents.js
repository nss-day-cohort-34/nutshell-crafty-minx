import renderEvents from "./domEvents";
import eventsHTML from "./factoryEvents";


const initEvents = () => {
    const initialEventDisplay = eventsHTML.createEventsContainer()
    renderEvents(initialEventDisplay)



}

export default initEvents