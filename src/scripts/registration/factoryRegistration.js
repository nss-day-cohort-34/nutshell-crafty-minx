// New User Front Page Registration

const welcomePageHTML = {
    createWelcome() {
        return `
            <h1>Welcome to Nutshell, the Premiere Social Networking Application</h1><hr/>
            
            <div id="signIn">
                <h3>Log Into My Account</h3>
                <fieldset>
                <label for="userName">User Name</label>    
                <input type="text" id="userName" name="userName"></input>  
                </fieldset>
                <fieldset>
                <label for="email">Email Address</label>    
                <input type="text" id="email" name="email"></input>  
                </fieldset>
                <button id="logIn">Log In</button>
            </div>
            <div>
                <button id="createAccount">Don't have an account?</button>
            </div>
        `
    },
    createAccount() {
        return `
        <div id="signIn">
            <h3>Create New Account</h3>
            <fieldset>
            <label for="userName">User Name</label>    
            <input type="text" id="userName" name="userName"></input>  
            </fieldset>
            <fieldset>
            <label for="email">Email Address</label>    
            <input type="text" id="email" name="email"></input>  
            </fieldset>
            <button id="saveNewAccount">Create Account</button>
        </div>
           `
    }
}

export default welcomePageHTML