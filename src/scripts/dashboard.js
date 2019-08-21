import welcomePageHTML from "./registration/factoryRegistration";
import renderFunctions from "./registration/domRegistration";
import initArticles from "./articles/mainArticles";
import initEvents from "./events/mainEvents";
import initMessages from "./messages/mainMessages";
import initTasks from "./tasks/mainTasks";

const dashboardFunctions = () => {
    const dashboardHTML = welcomePageHTML.createDashboard()
    renderFunctions.renderDashboard(dashboardHTML)
    const activeUserId = parseInt(sessionStorage.getItem("activeUser"))
    initTasks(activeUserId)
    initEvents(activeUserId)
    initArticles(activeUserId)
    // initMessages(activeUserId)
}

export default dashboardFunctions