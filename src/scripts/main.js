import API from "./registration/dataRegistration";
import welcomePageHTML from "./registration/factoryRegistration";
import renderRegistration from "./registration/domRegistration";

// Show welcome message and log in form when page loads
const html = welcomePageHTML.createWelcome()
renderRegistration(html)

// Get reference to registration page container
const registrationContainer = document.querySelector("#registration")

// Create a new user object
const createNewUser = (username, email) => {
    return {
        username: username.value,
        email: email.value
    }
}

// Event listener on results container
registrationContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("createAccount")) {
        registrationContainer.innerHTML = ""
        const newAccountHTML = welcomePageHTML.createAccount()
        renderRegistration(newAccountHTML)
    } else if (event.target.id.startsWith("saveNewAccount")) {
        const userNameValue = document.querySelector("#userName")
        const emailValue = document.querySelector("#email")
        const newUser = createNewUser(userNameValue, emailValue)
        console.log(newUser)
        API.saveNewUser(newUser)
    } else {
        event.stopPropagation()
    }
})