import registrationAPI from "./dataRegistration"
import welcomePageHTML from "./factoryRegistration.js"
import renderRegistration from "./domRegistration.js"

// Get reference to registration page container
const registrationContainer = document.querySelector("#registration")

const initRegistration = () => {
    // Show welcome message and log in form when page loads
    const html = welcomePageHTML.createWelcome()
    renderRegistration(html)
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
            renderRegistration(newAccountHTML)
            // User clicks on "Log In"
        } else if (event.target.id.startsWith("logIn")) {
            registrationContainer.innerHTML = ""
            // PLACEHOLDER - we'll need additional logic for this condition
        } else if (event.target.id.startsWith("saveNewAccount")) {
            // User clicks on the "Create Account" button after clicking on "Don't have an account?"
            // Get reference to username and email input fields
            const usernameInput = document.querySelector("#username")
            const passwordInput = document.querySelector("#password")
            if (usernameInput.value === "" || passwordInput.value === "") {
                alert("Please fill out both fields")
            } else {
                const newUser = createNewUser(usernameInput, passwordInput)
                registrationAPI.saveNewUser(newUser)
                    .then(newUser => {
                        sessionStorage.setItem("activeUser", newUser.id)
                        let sessionUser = sessionStorage.getItem("activeUser")
                        console.log(sessionUser)
                    })
            }
        } else {
            event.stopPropagation()
        }
    })
}

export default initRegistration