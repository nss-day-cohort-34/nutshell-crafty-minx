import welcomePageHTML from "./registration/factoryRegistration";
import renderFunctions from "./registration/domRegistration";
import initArticles from "./articles/mainArticles";
import initEvents from "./events/mainEvents";
import initMessages from "./messages/mainMessages";
import initTasks from "./tasks/mainTasks";

const dashboardFunctions = () => {
    const dashboardHTML = welcomePageHTML.createDashboard()
    renderFunctions.renderDashboard(dashboardHTML)
    // initTasks()
    initEvents()
    initArticles()
    // initMessages()
}

export default dashboardFunctions