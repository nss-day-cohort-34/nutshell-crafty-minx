const registrationContainer = document.querySelector("#registration")

const renderRegistration = (HTMLString) => {
    registrationContainer.innerHTML += HTMLString
}

export default renderRegistration