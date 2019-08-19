import API from "./registration/dataRegistration";
import welcomePageHTML from "./registration/factoryRegistration";
import renderRegistration from "./registration/domRegistration";
import renderToArticles from "./articles/domArticles";
import factoryArticles from "./articles/factoryArticles";
import articlesData from "./articles/dataArticles";


/*----------------------REGISTRATION----------------------*/
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
/*----------------------END REGISTRATION----------------------*/
/*----------------------TASKS----------------------*/
/*----------------------END TASKS----------------------*/
/*----------------------EVENTS----------------------*/
/*----------------------END EVENTS----------------------*/
/*----------------------ARTICLES----------------------*/
const welcomeConverted = factoryArticles.factoryArticlesWelcome()
renderToArticles(welcomeConverted)

const newArticleButton = document.querySelector("#newArticleButton")

newArticleButton.addEventListener("click", () => {
    const newArticleConverted = factoryArticles.factoryNewArticle()
    renderToArticles(newArticleConverted)
})

const articleContainer = document.querySelector("#articles")
const newDate = new Date();
const timestamp = newDate.toUTCString();
let activeID = sessionStorage.getItem("activeUser")

articleContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("saveArticleButton")) {
        const articleTitle = document.querySelector(".articleTitleInput")
        const articleSynopsis = document.querySelector(".articleSynopsisInput")
        const articleURL = document.querySelector(".articleURLInput")
        console.log(articleTitle.value, articleSynopsis.value, articleURL.value);
        const newArticle = factoryArticles.createJSON(articleTitle.value, articleSynopsis.value, articleURL.value, timestamp, activeID);
        console.log(newArticle);

        fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
        })

        articlesData.articleFetch().then(articles => {
            articleContainer.innerHTML = ""
            for (const article of articles) {
                const postedArticleConverted = factoryArticles.factoryPostedArticle(article)
                renderToArticles(postedArticleConverted);
            }
            })
    }
})


/*----------------------END ARTICLES----------------------*/
/*----------------------MESSAGES----------------------*/
/*----------------------END MESSAGES----------------------*/
/*----------------------FRIENDS (MAYBE)----------------------*/
/*----------------------END FRIENDS----------------------*/