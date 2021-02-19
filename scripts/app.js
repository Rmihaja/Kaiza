// setting logged user group chats
const loadNavigationBar = (loggedUser, groupChatsData, peopleData) => {
    
    // showing only groups chats with logged in user as member
    let groupChatNavItems = [];
    for (groupChat of groupChatsData) {
        if (groupChat.isMember(loggedUser)) {
            groupChatNavItems.push(groupChat);
        }
    }

    // displaying everyone except logged in user
    let peopleNavItems = peopleData.filter(people => people != loggedUser);
    displayChatsNav(groupChatNavItems, peopleNavItems);
}

// getting user selected a tab
const getSelectedA = targetedElement => {
    if (targetedElement.nodeName == 'A') {
        return targetedElement;
    } else {
        return targetedElement.parentNode;
    }
}

// switch to user selected chat
const switchTab = target => {

    selectedLink = getSelectedA(target);

    if (!selectedLink.classList.contains('active')) {

        if (selectedLink.id == 'announcesLink') {
            announcesSection.classList.add('display');
            messagesSection.classList.remove('display');
            messagesSection.setAttribute('hidden', 'true');

            renderPosts(postsData);
        } else {
            announcesSection.classList.remove('display');
            messagesSection.classList.add('display');
            announcesSection.setAttribute('hidden', 'true');
            if (selectedLink.parentNode.id == 'groupTabs') {
                renderChat(getGroupChatData(selectedLink.id));
            } else {
                renderChat(getPrivateGroupChatData(selectedLink.id));
            }
        }
         

        document.querySelector('.active').classList.remove('active');
        selectedLink.classList.add('active');
    }
    window.scrollTo(0, body.scrollHeight);
}

const getGroupChatData = chatId => {
    let targetChat = groupChatsData.filter(group => group.getId() == chatId)[0];
    return groupChatsData[groupChatsData.indexOf(targetChat)].getMessages(); 
}

const getPrivateGroupChatData = chatId => {
    let targetChat = privateChatsData.filter(group => group.getId() == chatId)[0];
    return privateChatsData[privateChatsData.indexOf(targetChat)].getMessages();     
}

// *** firing application

const initApp = loggedUser => {
    
    // setting up user config
    loadUserProfile(loggedUser);
    
    // setting up header

    // loading nav panel
    let selectedLink;
    loadNavigationBar(loggedUser, groupChatsData, usersList);

    // loading posts on post Tab
    announcesActivityLink.onclick = event => switchTab(event.target);
    renderPosts(postsData);

    // setting up data change button
    submitPostButton.onclick = () => submitMessageAsPost(loggedUser, inputPostContent, photoInputContent);
    submitMessageButton.onclick = () => submitMessageAsMessage(loggedUser, getActiveTabId(), inputMessageContent);
    // sending message on Enter key pressed
    inputMessageContent.onkeypress = event => {
        // ? 13 is the 'Enter' keyboard code
        if (event.keyCode == 13) {
            submitMessageAsMessage(loggedUser, getActiveTabId(), inputMessageContent);
        }
    }
}

const submitMessageAsPost = (author, inputPostContent, additionalContent)  => {
    // check if there is a message to send
    if (inputPostContent.value || additionalContent.files[0]) {
        submitMessage(author, 'post', null, inputPostContent, additionalContent);

        // resetting input value
        resetInput(inputPostContent);
        resetInput(photoInputContent);

        // rendering updated database
        renderPosts(postsData);
    }
}

const submitMessageAsMessage = (author, chatId, inputMessageContent) => {
    // check if there is a message to send
    if (inputMessageContent.value) {
        submitMessage(author, 'message', chatId, inputMessageContent, null);

        // resetting input value
        resetInput(inputMessageContent);
    }
}

const getActiveTabId = () => {
    return document.querySelector('.active').id;
}

window.onload = initApp(usersList[0]);





