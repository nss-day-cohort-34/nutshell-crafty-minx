// New User Front Page Registration
const welcomePageHTML = {
    createWelcome() {
        return `
            <h1>Welcome to Nutshell, the Premiere Social Networking Application</h1>
            
            <div id="signIn">
                <h3>Log Into My Account</h3>
                <fieldset>
                <label for="username">Username</label>    
                <input type="text" id="username" name="username"></input>  
                </fieldset>
                <fieldset>
                <label for="password">Password</label>    
                <input type="password" id="password" name="password"></input>  
                </fieldset>
                <button id="logIn">Log In</button>
            </div>
            <div>
                <button id="noAccount">Don't have an account?</button>
            </div>
        `
    },
    createAccount() {
        return `
        <div id="signIn">
            <h3>Create New Account</h3>
            <fieldset>
            <label for="username">User Name</label>    
            <input type="text" id="username" name="username"></input>  
            </fieldset>
            <fieldset>
            <label for="password">Password</label>    
            <input type="password" id="password" name="password"></input>  
            </fieldset>
            <button id="saveNewAccount">Create Account</button>
        </div>
           `
    },
    createDashboard() {
        return `
        <article id="tasks"></article>
        <article id="events"></article>
        <article id="articles"></article>
        <article id="messages"></article>
        <article id="friends"></article>
        `
    }
}
export default welcomePageHTML