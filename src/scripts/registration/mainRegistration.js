import registrationAPI from "./dataRegistration"
import welcomePageHTML from "./factoryRegistration.js"
import renderFunctions from "./domRegistration.js"
import initTasks from "../tasks/mainTasks"

// Get reference to registration page container
const registrationContainer = document.querySelector("#registration")

const initRegistration = () => {
    // Show welcome message and log in form when page loads
    const html = welcomePageHTML.createWelcome()
    renderFunctions.renderRegistration(html)
    // Create a new user object
    const createNewUser = (username, password) => {
        return {
            username: username.value,
            password: password.value
        }
    }

    // Event listener on results container
    registrationContainer.addEventListener("click", () => {
        // User clicks on "Don't have an account?"
        if (event.target.id.startsWith("noAccount")) {
            registrationContainer.innerHTML = ""
            const newAccountHTML = welcomePageHTML.createAccount()
            renderFunctions.renderRegistration(newAccountHTML)
            // User clicks on "Log In"
        } else if (event.target.id.startsWith("logIn")) {
            // Get reference to username and password input fields
            const usernameInput = document.querySelector("#username")
            const passwordInput = document.querySelector("#password")
            if (usernameInput.value === "" || passwordInput.value === "") {
                alert("Please fill out both fields")
            } else {
                registrationAPI.getSingleUser(usernameInput.value)
                    .then(user => {
                        if (user[0].username === usernameInput.value && user[0].password === passwordInput.value) {
                            sessionStorage.setItem("activeUser", user[0].id)
                            registrationContainer.innerHTML = ""
                            const dashboardHTML = welcomePageHTML.createDashboard()
                            renderFunctions.renderDashboard(dashboardHTML)
                            initTasks()
                        } else {
                            alert("Username and password do not match any registered account. Please try again.")
                        }
                    })
            }
        } else if (event.target.id.startsWith("saveNewAccount")) {
            // User clicks on the "Create Account" button after clicking on "Don't have an account?"
            // Get reference to username and password input fields
            const usernameInput = document.querySelector("#username")
            const passwordInput = document.querySelector("#password")
            if (usernameInput.value === "" || passwordInput.value === "") {
                alert("Please fill out both fields")
            } else {
                registrationAPI.getSingleUser(usernameInput.value)
                    .then(user => {
                        if (user.length < 1) {
                            const newUser = createNewUser(usernameInput, passwordInput)
                            registrationAPI.saveNewUser(newUser)
                                .then(newUser => {
                                    sessionStorage.setItem("activeUser", newUser.id)
                                    registrationContainer.innerHTML = ""
                                    const dashboardHTML = welcomePageHTML.createDashboard()
                                    renderFunctions.renderDashboard(dashboardHTML)
                                    initTasks()
                                })
                        } else {
                            alert("Username already exists. Please choose another or log in if you already have an account")
                        }
                    })
            }
        } else {
            event.stopPropagation()
        }
    })
}

export default initRegistration