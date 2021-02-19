class Message {
    constructor(author, submitDate, content, additionalContent) {
        
        // * attributs init

        this.author = author;
        this.submitDate = submitDate;
        this.content = content;
        this.additionalContent = additionalContent;
    }

    // * method init

    getMessage() {
        let message = {
            author: author,
            submitDate: submitDate, 
            content: content,
            additionalContent: additionalContent
        }
        return message;
    }
}