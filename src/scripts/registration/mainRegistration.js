import API from "./dataRegistration"
import welcomePageHTML from "./factoryRegistration.js"
import renderRegistration from "./domRegistration.js"

const initRegistration = () => {
// Show welcome message and log in form when page loads
const html = welcomePageHTML.createWelcome()
renderRegistration(html)
// Get reference to registration page container
const registrationContainer = document.querySelector("#registration")
// Create a new user object
const createNewUser = (username, password) => {
    return {
        username: username.value,
        password: password.value
    }
}


// Get reference to username and email input fields
// const usernameInput = document.querySelector("#username")
// const passwordInput = document.querySelector("#password")
// const inputsArray = [usernameInput, emailInput]
// TABLED FOR LATER: Check if user filled out both input fields when they try to create account
// const checkEmptyFields = () => {
//     let validated
//     for (let i = 0; i < inputsArray.length; i++) {
//         const input = inputsArray[i]
//         if (input.value === "") {
//             validated = false
//             alert("Please fill out both fields")
//             break
//         } else {
//             validated = true
//         }
//         return validated
//     }
// }

// Event listener on results container
registrationContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("noAccount")) {
        registrationContainer.innerHTML = ""
        const newAccountHTML = welcomePageHTML.createAccount()
        renderRegistration(newAccountHTML)
    } else if (event.target.id.startsWith("logIn")) {
        registrationContainer.innerHTML = ""
    } else if (event.target.id.startsWith("saveNewAccount")) {
        // const resultOfValidation = checkEmptyFields()
        // if (resultOfValidation) {
        const usernameInput = document.querySelector("#username")
        const passwordInput = document.querySelector("#password")
        const newUser = createNewUser(usernameInput, passwordInput)
        API.saveNewUser(newUser)
            .then(newUser => {
                sessionStorage.setItem("activeUser", newUser.id)
                let sessionUser = sessionStorage.getItem("activeUser")
                console.log(sessionUser)
            })
        // }
    } else {
        event.stopPropagation()
    }
})
}

export default initRegistration