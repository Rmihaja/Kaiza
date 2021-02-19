// *** basic functions

const formatDate = date => {
}

// getting user initials
const userInitials = user => {
    return user.match(/\b(\w)/g).join('');
}

// *** functions init

// submit post to database
const submitMessage = (author, targetData, targetId, inputContent, additionalContent) => {

        // create message
        let message = new Message(author, getSubmitDate(), inputContent.value, getAdditionalContent(additionalContent));

        // store message to type database
        storeMessage(message, targetData, targetId); 
}

// message parameters

const getSubmitDate = () => {
    // getting HH:MM formated time
    let messageSubmitDate = new Date().toTimeString();
    // get only the 5 first value wich is hour and minute
    return messageSubmitDate.substr(0, 5);
}

const getAdditionalContent = additionalInputContent => {
    let additionalContent = null;
    if (additionalInputContent) {
        if (additionalInputContent.files[0]) {
            additionalContent = {};
            if (additionalInputContent.files[0].type.includes('image')) {
                let imageURL = URL.createObjectURL(additionalInputContent.files[0]);
                URL.revokeObjectURL(additionalInputContent.files[0]);
                additionalContent.image = imageURL;
            }
            resetInput(additionalInputContent);
        }
    } 
    return additionalContent;
}

// message to database handler

storeMessage = (message, targetData, id) => {
    if (targetData == 'post') {
        postsData.push(message);
    }
    else if (targetData == 'message') {
        // the user was on a group chat
        if (groupChatsData.filter(group => group.getId() == id)[0]) {
            let targetChat = groupChatsData.filter(group => group.getId() == id)[0];
            groupChatsData[groupChatsData.indexOf(targetChat)].addMessage(message);

            // rendering updated database
            renderChat(groupChatsData[groupChatsData.indexOf(targetChat)].getMessages());
        }
        // or a private chat
        else if (privateChatsData.filter(group => group.getId() == id)[0]) {
            let targetChat = privateChatsData.filter(group => group.getId() == id)[0];
            privateChatsData[privateChatsData.indexOf(targetChat)].addMessage(message);

            // rendering updated database
            renderChat(privateChatsData[privateChatsData.indexOf(targetChat)].getMessages());
        }
    }
}