class User {
        
    // * attributs init

    // TODO add private property
    id = createId(7);

    constructor(firstName, lastName, profilePicture) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePicture = profilePicture;        
    }

    // * method init

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getId() {
        return this.id;
    }
}

// basic functions
const createId = length => {
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for ( var i = 0; i < length; i++ ) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
 }