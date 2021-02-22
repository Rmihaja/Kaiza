// ************* DOM attribut init *****************

// *** UI elements

const body = document.querySelector('body');
const main = document.querySelector('main');

// get section switches
const announcesSection = document.querySelector('#announcesSection');
const messagesSection = document.querySelector('#messagesSection');

// get each logged in user referenced element
const userNameHeader = document.querySelector('#userName');
const userPictureImage = document.querySelector('#userPicture');

// get nav Chats div handler
const groupTabs = document.querySelector('#groupTabs');
const peopleTabs = document.querySelector('#peopleTabs');

// get theme toggler
const changeThemeButton = document.querySelector('#toggleTheme');
// get profile display toggler
const profileButton = document.querySelector('#showProfile');
const profileDisplay = document.querySelector('#profileDisplay');

// *** Navbar element
const announcesActivityLink = document.querySelector('#announcesLink');

// get add people or chat button
const createChatLink = document.querySelector('#createGroupChat')
const addPeopleLink = document.querySelector('#addPeople');

// *** Create group element

// get chat creation box 
const createChatPopup = document.querySelector('#createGroupBox');
// get chat icon input
const groupIconInputContent = document.querySelector('#groupIconInput');
const groupIconImage = document.querySelector('#groupIcon');
// get chat name input
const groupNameInputContent = document.querySelector('#groupNameInput');
// get add chat button
const addChatButton = document.querySelector('#addChat');
// get cancel chat creation
const cancelChatCreationButton = document.querySelector('#cancelCreateChat');

// *** posts handler elements

// get input text content
let inputPostContent = document.querySelector('#inputPostContent');

// get photos input
let photoInputContent = document.querySelector('#photoInput');
let photoDescription = document.querySelector('#photoDescription');

// get posts list
let postsList = document.querySelector('#posts');

// get input submit button
let submitPostButton = document.querySelector('#submitPostButton');

// *** messages handler elements

// get input text content
let inputMessageContent = document.querySelector('#inputMessageContent');

// get messages list
let messagesList = document.querySelector('#messages');

// get input submit button
let submitMessageButton = document.querySelector('#submitMessageButton');
