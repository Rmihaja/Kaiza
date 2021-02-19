// *** basic functions
const getRandomUser = usersList => {
    return usersList[Math.floor(Math.random() * usersList.length)];
}

const getRandomTime = () => {
    let hour = Math.floor(Math.random() * 24);
    let minute = Math.floor(Math.random() * 60);
    if (hour.length < 2) {
        hour = '0' + hour;
    }
    if (minute.length < 2) {
        minute = '0' + minute;
    }
    return `${hour}:${minute}`;
}

let usersList = [
        new User('Cassy', 'Ranaivoson', './images/profile_pictures/cassy.jpg'),
        new User('Mialisoa', 'Andriamanalina', './images/profile_pictures/mialisoa.jpg'),
        new User('Mihaja', 'Tatiana', './images/profile_pictures/mihaja.jpg'),
        new User('Finiavana', 'Rasolonjatovo', './images/profile_pictures/finiavana.jpg'),
        new User('Lucas Henri', 'Grau', null),
        new User('Felantsoa', 'Lydia', './images/profile_pictures/felantsoa.jpg'),
        new User('Fifaliana', 'Rafanomezantsoa', './images/profile_pictures/fifaliana.jpg'),
        new User('Aicha Alicia', 'Rabenarivo', './images/profile_pictures/aicha.jpg'),
        new User('Nomentsoa', 'Rakotonirim\'s', './images/profile_pictures/nomentsoa.jpg')
    ];


let postsData = [
    new Message(getRandomUser(usersList), '18:02', 'Bonjour et bienvenue!', null),
    new Message(getRandomUser(usersList), '21:54', "Hello tout le monde, ce soir nous continuons le design de notre nouveau jouet. A vos ✏!", {image: "./images/Buttercup.jpg"})
]

let groupChatsData = [
    new Chat('Comptabilité et Finances', './images/icons/analytics.svg', usersList),
    new Chat('Recherche et Développement', './images/icons/lightbulb.svg', usersList),
    new Chat('Resources Humaines', './images/icons/contact_page.svg', usersList),
    new Chat('Production', './images/icons/smart_toy.svg', usersList),
    new Chat('Marketing et vente', './images/icons/sell.svg', usersList),
    new Chat('Direction et administration', './images/icons/admin_panel_settings.svg', usersList),
    new Chat('Logistique', './images/icons/local_shipping.svg', usersList)
]

let privateChatsData = [];

// ! for the client demo purpose, we are only setting usersList[0] private chat
// populating private chats with existing user database
for (let i = 1; i < usersList.length; i++) {
    let userChat = new Chat(usersList[i], usersList[i].profilePicture, [usersList[0], usersList[i]]);
    userChat.addMessage(new Message(usersList[i], getRandomTime(), 'Salut\nComment ça va?', null));
    privateChatsData.push(userChat);
}