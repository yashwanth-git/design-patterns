/** Mediator Pattern **/
// A mediator objects to communicate between different objects
//Use case: Chat Room
function Member(name) {
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    send(message, toMember) {
        this.chatroom.send(message, this, toMember);
    },
    receive(message, fromMember) {
        console.log(`${fromMember.name} to ${this.name}: ${message}`)
    }
}

function Chatroom() {
    this.members = {};
}
//Chatroom is the intermediate object that
//takes care of the functionality
Chatroom.prototype = {
    addMember(member) {
        this.members[member.name] = member;
        member.chatroom = this;
    },
    send(message, fromMember, toMember) {
        toMember.receive(message, fromMember);
    }
}

const chat = new Chatroom();
const yash = new Member('Yash');
const grey = new Member('Grey');
const mama = new Member('Mama');

chat.addMember(yash);
chat.addMember(grey);
chat.addMember(mama);

yash.send("Hey Grey", grey);
grey.send("Hii Yash", yash);