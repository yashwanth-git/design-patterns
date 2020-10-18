/** Observer Pattern **/
//Define One to Many Relationship
//Use Case: Sending notification across users

//Holds the list of users
function Observable() {
    this.observers = [];
}
//Functions on list of users
Observable.prototype = {
    subscribe(fn) {
        this.observers.push(fn);
    },
    unsubscribe(fnRemove) {
        this.observers = this.observers.filter(fn => {
            if (fn != fnRemove)
                return fn
        })
    },
    notifySubscribers(notification) {
        //For all Subscribers send notification
        this.observers.forEach(fn => {
            newNotification.call(fn, notification)
        })
    }
}
//For Initialising the user
function Observer(name) {
    this.name = name;
}
//For Customized notification
function newNotification(notification) {
    console.log(`Hey, ${this.name} : ${notification}`);
}

//Only the subscribed users get the notifications
const observable = new Observable();
const observer1 = new Observer("Yashwanth");
const observer2 = new Observer("Sridharan");
observable.subscribe(observer1);
observable.subscribe(observer2);
observable.unsubscribe(observer1);
console.log(observable)
observable.notifySubscribers("New Update is available!")//Custom notification passed