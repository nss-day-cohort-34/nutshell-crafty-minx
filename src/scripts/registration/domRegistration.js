const registrationContainer = document.querySelector("#registration")
const dashboardContainer = document.querySelector("#primaryContainer")

const renderFunctions = {
    renderRegistration(HTMLString) {
        registrationContainer.innerHTML = HTMLString
    },
    renderDashboard(HTMLString) {
        dashboardContainer.innerHTML = HTMLString
    }
}

export default renderFunctions