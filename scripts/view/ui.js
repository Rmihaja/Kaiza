// *** functions init

// *********** User Interaction, User Experience *************

// change theme to dark/light
const toggleTheme = () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');
    
    // caching theme to browser local storage
    localStorage.setItem('theme', body.classList.value);
}

// applying last save theme on reload
const theme = localStorage.getItem('theme');
if (theme) {
    body.classList.replace(body.classList.value, theme);
} else {
    // default theme fallback
    body.classList.add('light');
}

// show user profile
const toggleProfileDisplay = () => {
    console.log('hello');
    setTimeout(function () {
        profileDisplay.classList.toggle('hide');
    }, 10);
}

// *********** header Displayer ************

// setting logged user account header
const loadUserProfile = loggedUser => {
    userNameHeader.innerHTML = loggedUser.getName();
    userPictureImage.src = loggedUser.profilePicture;
}

// *********** Navigation panel Displayer *************

const createGroupTab = groupData => {
    return `<a id="${groupData.id}" onclick='switchTab(event.target)' href="#"><img class="icon" src="${groupData.icon}"><p>${groupData.name}</p></a>
    `
}

const createPeopleTab = peopleData => {
    return `
    <a id="${peopleData.id}" onclick='switchTab(event.target)' href="#"><img class="profile-picture" src="${peopleData.profilePicture}" alt="${userInitials(peopleData.getName())}"><p>${peopleData.getName()}</p></a>
    `
}

const displayChatsNav = (groupTabsList, peopleTabsList) => {
    for (group of groupTabsList) {
        groupTabs.innerHTML += createGroupTab(group);
    }
    for (people of peopleTabsList) {
        peopleTabs.innerHTML += createPeopleTab(people);
    }

}

// *********** Post Displayer *************

// check if poster added image to post
const checkImageInput = additionalContent => {
    if (additionalContent && additionalContent.image) {
        return `<img src="${additionalContent.image}" alt="image">`;
    } else {
        return '';
    }
}

// create post template
const createPost = postData => {
    return `
        <div class="metadata">
            <img src="${postData.author.profilePicture}" alt="${userInitials(postData.author.getName())}" class="profile-picture">
            <h2>${postData.author.getName()}</h2>
            <h3>${postData.submitDate}</h3>
        </div>
        <p>${postData.content}</p>
        ` + checkImageInput(postData.additionalContent); 
        
}

// display posts ul
const renderPosts = postsData => {
    // cleaning old data
    postsList.innerHTML = '';

    // rendering updated database
    for (postData of postsData) {
        let post = document.createElement('li');
        post.innerHTML = createPost(postData);
        postsList.appendChild(post);

        // .show animation setting
        setTimeout(function () {
            post.classList.add('show');
          }, 10);
    }
}

// reset post input value on submit 
const resetInput = input => {
    input.value = '';
    photoDescription.innerHTML = '';
} 

// *********** Message Displayer *************

// create message template
const createMessageText = messageData => {
    return `
        <img src="${messageData.author.profilePicture}" alt="${userInitials(messageData.author.getName())}" class="profile-picture">
        <div class="metadata">
            <h2>${messageData.author.getName()}</h2>
            <h3>${messageData.submitDate}</h3>
        <p>${messageData.content}</p>
        </div>`
}

// display message ul
const renderChat = chatData => {
    // cleaning old data
    messagesList.innerHTML = '';

    // rendering updated database
    for (chatMessage of chatData) {
        console.log(chatMessage);
        let message = document.createElement('li');
        message.innerHTML = createMessageText(chatMessage);
        messagesList.appendChild(message);

        // .show animation setting
        setTimeout(function () {
            message.classList.add('show');
        }, 10);
    }
    
        
    scrollToBottom();
}

const scrollToBottom = () => {
    window.scrollTo(0, body.scrollHeight);
}

// *** event handler init

// header events

// ? self explanatory
changeThemeButton.onclick = toggleTheme;
profileButton.onclick = toggleProfileDisplay;

// post event

// ? when user add photo to post
photoInputContent.onchange = () => {
    console.log( photoInputContent.files[0]);
    photoDescription.innerHTML = photoInputContent.files[0].name;
}
