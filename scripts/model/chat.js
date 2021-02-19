class Chat {
       
    // * attribut init

    // TODO add private property
    messages = [];
    
    constructor(params, icon, members) {
        // either we get a User as params : private chat
        if (typeof params == 'object') {
            this.name = params.getName();
            this.id = params.getId();
        } else {
            // or a String : custom group name
            this.name = params;
            this.id = createId(10);
        }
        this.icon = icon;
        this.members = members;
    }

    // * methods init

    getId() {
        return this.id;
    }

    getMessages () {
        return this.messages;
    }

    addMessage (Message) {
        this.messages.push(Message);
    }

    isMember (user) {
        return this.members.includes(user);
    }
}