const messageFactory = {
    newMessageFieldHTML() {
        return `
        <h2>Messages</h2>
        <input type="hidden" id="hiddenId" value=""></input>
        <section id="newMessageContainer"
            <fieldset>
                <textarea id="newMessageInput" placeholder="enter message here"></textarea>
                <br>
                <button id="sendMessage">Send</button>
            </fieldset>
            <div id="listOfMessages"></div>
        </section>
        `
    },

    messageHTML(messageObject, activeUserId) {
       console.log(messageObject.userId)
        if (messageObject.userId === activeUserId) {
            return `
                <section id="messageDisplay--${messageObject.id}">
                    <p>${messageObject.user.username}: ${messageObject.message}</p>
                    <button id="editMessage--${messageObject.id}">Edit</button>
                </section>
        `
        }
        else {
            return `
            <section id="messageDisplay">
                <p>${messageObject.user.username}: ${messageObject.message}</p>
            </section>
            `
        }
    },

    editMessageHTML(messageObject) {
        return `
        <section id="messageDisplay--${messageObject.id}">
            <p>${messageObject.user.username}: ${messageObject.message}</p>
            <textarea id="editMessageInput">${messageObject.message}</textarea>
            <button id="sendEditedMessage--${messageObject.id}>Submit</button>
            `
    }
}

export default messageFactory
