// *** basic functions

const formatDate = date => {
}

// getting user initials
const userInitials = user => {
    return user.match(/\b(\w)/g).join('');
}

const getImageURL = image => {
    let imageURL = URL.createObjectURL(image);
    URL.revokeObjectURL(image);
    console.log(imageURL);
    return imageURL;
}

// *** functions init

// submit post to database
const submitMessage = (author, targetData, targetId, textValue, additionalContentValue) => {

        // create message
        let message = new Message(author, getSubmitDate(), textValue, getAdditionalContent(additionalContentValue));

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
        additionalContent = {};
        if (additionalInputContent[0].type.includes('image')) {
            additionalContent.image = getImageURL(additionalInputContent[0]);
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

// submit new group chat to database

const addGroupChat = (name, icon, members) => {
    groupChatsData.push(new Chat(name, getChatIcon(icon), members));
}

// group chat icon setters

const getChatIcon = (iconInputContent) => {
    if (iconInputContent[0]) {
        return getImageURL(iconInputContent[0]);
    }
    // return default group icon if not specified by user
    return './images/icons/group_default.svg'
}