// ************* DOM attribut init *****************

// *** UI elements

const body = document.querySelector('body');
const main = document.querySelector('main');

// getting section switches
const announcesSection = document.querySelector('#announcesSection');
const messagesSection = document.querySelector('#messagesSection');

// getting each logged in user referenced element
const userNameHeader = document.querySelector('#userName');
const userPictureImage = document.querySelector('#userPicture');

// getting nav Chats div handler
const groupTabs = document.querySelector('#groupTabs');
const peopleTabs = document.querySelector('#peopleTabs');

// getting theme toggler
const changeThemeButton = document.querySelector('#toggleTheme');
// getting profile display toggler
const profileButton = document.querySelector('#showProfile');
const profileDisplay = document.querySelector('#profileDisplay');

// *** Navbar element
const announcesActivityLink = document.querySelector('#announcesLink');

// get add people or chat button
const createChatButton = document.querySelector('#createGroupChat')
const addPeopleButton = document.querySelector('#addPeople');

// *** posts handler elements

// getting input text content
let inputPostContent = document.querySelector('#inputPostContent');

// getting photos input
let photoInputContent = document.querySelector('#photoInput');
let photoDescription = document.querySelector('#photoDescription');

// getting posts list
let postsList = document.querySelector('#posts');

// getting input submit button
let submitPostButton = document.querySelector('#submitPostButton');

// *** messages handler elements

// getting input text content
let inputMessageContent = document.querySelector('#inputMessageContent');

// getting messages list
let messagesList = document.querySelector('#messages');

// getting input submit button
let submitMessageButton = document.querySelector('#submitMessageButton');
