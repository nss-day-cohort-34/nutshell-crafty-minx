import messagesAPI from "./dataMessages";
import messageFactory from "./factoryMessages";
import messagesRendering from "./domMessages";



const initMessages = (activeUserId) => {

    //Get reference to main messages container
    const messagesContainer = document.querySelector("#messages")


    //Initial messages display upon log in
    const initialMessageDisplay = messageFactory.newMessageFieldHTML()
    messagesRendering.renderNewMessageField(messagesContainer, initialMessageDisplay)
    messagesAPI.getAllMessages()
        .then(messages => {
            const messagesList = document.querySelector("#listOfMessages")
            const newMessageInput = document.querySelector("#newMessageInput")
            messagesList.innerHTML = ""
            newMessageInput.value = ""
            messages.forEach(message => {
                messagesList.innerHTML += messageFactory.messageHTML(message, activeUserId)
            })
        })

    // Save message to database and render to DOM
    messagesContainer.addEventListener("click", () => {
        if (event.target.id === "sendMessage") {
            const chatMessage = document.querySelector("#newMessageInput").value
            const hiddenMessageId = document.querySelector("#hiddenId")
            if (chatMessage !== "" && hiddenMessageId.value === "") {
                const newMessageObject =
                {
                    userId: activeUserId,
                    message: chatMessage
                }

                messagesAPI.postMessage(newMessageObject)
                    .then(() => {
                        return messagesAPI.getAllMessages()
                    })
                    .then(messages => {
                        const messagesList = document.querySelector("#listOfMessages")
                        const newMessageInput = document.querySelector("#newMessageInput")
                        messagesList.innerHTML = ""
                        newMessageInput.value = ""
                        messages.forEach(message => {
                            messagesList.innerHTML += messageFactory.messageHTML(message, activeUserId)
                            // messagesRendering.renderMessages(messageHTML)
                        })
                    })

            }
            else {
                const updatedMessageObject = {
                    id: hiddenMessageId.value,
                    userId: activeUserId,
                    message: document.querySelector("#newMessageInput").value
                }
                messagesAPI.editMessage(updatedMessageObject)
                    .then(() => {
                        document.querySelector("#newMessageInput").value = ""
                        return messagesAPI.getAllMessages()
                    })
                    .then(messages => {
                        const messagesList = document.querySelector("#listOfMessages")
                        messagesList.innerHTML = ""
                        messages.forEach(message => {
                            messagesList.innerHTML += messageFactory.messageHTML(message, activeUserId)
                        })
                    })
            }
        }
    }
    )

    // Edit button event listener -- save to database and render edited message to DOM
    const updateFormField = messageId => {
        const hiddenMessageId = document.querySelector("#hiddenId")
        const messageInput = document.querySelector("#newMessageInput")

        return fetch(`http://localhost:8088/messages/${messageId}?_expand=user`)
            .then(response => response.json())
            .then(message => {
                hiddenMessageId.value = message.id
                messageInput.value = message.message
            })
    }

    messagesContainer.addEventListener("click", event => {
        if (event.target.id.startsWith("editMessage--")) {
            const messageToEdit = event.target.id.split("--")[1]

            updateFormField(messageToEdit)
        }
    })

    //    sendMessage.addEventListener("click", event => {
    //         const hiddenMessageId = document.querySelector("#hiddenId")

    //         if (hiddenMessageId.value === "") {
    //             editMessage(messageId)
    //         } else {
    //             const editMessage = id => {
    //                 const updatedMessageObject = {
    //                     userId: activeUserId,
    //                     message: document.querySelector("#newMessageInput").value
    //                 }
    //                 fetch(`http://localhost:8088/messages/${id}?_expand=user`, {
    //                     method: "PUT",
    //                     headers: {
    //                         "Content-Type": "application/json"
    //                     },
    //                     body: JSON.stringify(messageObject)
    //                 })
    //                     .then(response => response.json())
    //                     .then(() => {
    //                         document.querySelecto r("#hiddenId").value = ""
    //                     })
    //             }
    //         } messagesAPI.getAllMessages()
    // })
}
export default initMessages
