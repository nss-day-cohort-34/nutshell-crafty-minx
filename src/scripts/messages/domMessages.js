import messageFactory from "./factoryMessages"

const messagesRendering = {
    renderNewMessageField(location, HTMLString) {
        location.innerHTML += HTMLString
    },

    renderMessages(HTMLString) {
        const messagesContainer = document.querySelector("#listOfMessages")
        messagesContainer.innerHTML += HTMLString
    }
}

    // renderEditMessageField(messageObject) {
    //     editMessageContainer.innerHTML += messageFactory.editMessageHTML(messageObject)


export default messagesRendering
