import initRegistration from "./registration/mainRegistration";
import dashboardFunctions from "./dashboard";

let activeUserId = sessionStorage.getItem("activeUser")
if (activeUserId === null) {
    initRegistration()
} else {
    // Render initial display
    dashboardFunctions()
}
