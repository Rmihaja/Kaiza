// *** basic functions
const getRandomUser = usersList => {
    return usersList[Math.floor(Math.random() * usersList.length)];
}

const getRandomTime = () => {
    let hour = Math.floor(Math.random() * 24).toString();
    let minute = Math.floor(Math.random() * 60).toString();
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
    new Chat('Recherche et Développement', './images/icons/lightbulb.svg',[usersList[0], usersList[2], usersList[5], usersList[7]]),
    new Chat('Resources Humaines', './images/icons/contact_page.svg', usersList),
    new Chat('Production', './images/icons/smart_toy.svg', [usersList[0], usersList[1], usersList[4], usersList[6]]),
    new Chat('Marketing et vente', './images/icons/sell.svg', [usersList[0], usersList[3], usersList[6]]),
    new Chat('Direction et administration', './images/icons/admin_panel_settings.svg', [usersList[0], usersList[8]]),
    new Chat('Logistique', './images/icons/local_shipping.svg', [usersList[5]])
]

let privateChatsData = [];

// ! for the client demo purpose, we are only setting usersList[0] private chat
// ? populating private chats with existing user database
for (let i = 1; i < usersList.length; i++) {
    let userChat = new Chat(usersList[i], usersList[i].profilePicture, [usersList[0], usersList[i]]);
    userChat.addMessage(new Message(usersList[i], getRandomTime(), 'Hey bonjour', null));
    privateChatsData.push(userChat);
}

// ? filling groupChatsData with arbitrary data

// our human resource handler
let HRAdministrator = usersList[8];

// Comptabilité et finances
groupChatsData[0].addMessage(
    new Message(HRAdministrator, '14:41', 'Bonjour, nous allons définir le budget dès que #Production aura fait un devis, je vous ferai une mise à jour d\'ici là')
);

// Recherche et Développement 
groupChatsData[1].addMessages([
    new Message(usersList[0], '8:01', 'Bonjour à tous'),
    new Message(usersList[2], '8:02', 'Bonjour'),
    new Message(usersList[5], '8:02', 'Bonjour'),
    new Message(usersList[7], '8:02', 'Bonjour'),
    new Message(usersList[0], '8:03', 'Alors, vous avez des idées de produits?'),
    new Message(usersList[5], '8:05', 'Je propose une auscultation à distance'),
    new Message(usersList[2], '8:07', 'J\'aime bien l\'idée'),
    new Message(usersList[7], '8:10', 'Qu\'en dites vous de la création de cigarettes éléctroniques?'),
    new Message(usersList[5], '8:11', 'Uhmmmm'),
    new Message(usersList[0], '8:15', 'Bon, je propose que chacun développe leurs idées en détail puis nous nous reverrons dans 2h pour les confronter'),
    new Message(usersList[5], '8:16', 'D\'accord, bonne idée!')
]);

// Resources Humaines
groupChatsData[2].addMessages([
    new Message(HRAdministrator, '7:37', `Bonjour tout le monde, voici les rôles de chacun : \n
    #RechercheEtDéveloppement : ${groupChatsData[1].getMembers()}`),
    new Message(HRAdministrator, '7:40', `#Production : ${groupChatsData[3].getMembers()}`),
    new Message(HRAdministrator, '7:42', `#MarketingEtVente : ${groupChatsData[4].getMembers()}`),
    new Message(HRAdministrator, '7:45', `#Logistique : ${groupChatsData[6].getMembers()}`)
]);

// Production 
groupChatsData[3].addMessages([
    new Message(usersList[4], '13:20', 'Bonjour à tous'),
    new Message(usersList[4], '13:21', 'Qui sera en charge de l\'inventaire? Et qui sera en charge de l\'étude des prix?'),
    new Message(usersList[1], '14:00', `J'aimerai faire l'inventaire, celà ne te dérange pas @${usersList[6].getName()}`),
    new Message(usersList[6], '14:15', 'Pas de soucis. Je ferai le tableau des prix alors')
])

// Marketing et vente
groupChatsData[4].addMessages([
    new Message(usersList[3], '16:54', 'Il faut chercher une enseigne de publicité même si le produit est encore au stade de prototype'),
    new Message(usersList[6], '16:58', 'C\' est vrai. je me charge d\'étudier le coût en même temps afin d\'estimer le prix final de notre produit'),
    new Message(usersList[3], '17:00', 'Parfait')
]);

// Direction et administration
groupChatsData[5].addMessages([
    new Message(HRAdministrator, '8:30', 'Maintenant que les roles sont bien répartis, les choses avancent bien. Seul #RechercheEtDéveloppement traine un peu avec leurs idées sur le planning'),
    new Message(usersList[0], '18:19', 'Je trouve celà assez normal, le design est important. Mais il faut bien se décider alors je les ai secoué un peu quand même')
])