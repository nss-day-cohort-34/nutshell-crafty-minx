import API from "./registration/dataRegistration";
import welcomePageHTML from "./registration/factoryRegistration";
import renderRegistration from "./registration/domRegistration";

const html = welcomePageHTML.createWelcome()
renderRegistration(html)

const registrationContainer = document.querySelector("#registration")

const createAccountButton = document.querySelector("#createAccount")

createAccountButton.addEventListener("click", () => {
    registrationContainer.innerHTML = ""
const newAccountHTML = welcomePageHTML.createAccount()
renderRegistration(newAccountHTML)
}) 