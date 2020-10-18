/** Factory Pattern **/
//Useful for creating objects
//Handles object creation in a centralized location

function Developer(name) {
    this.name = name;
    this.type = 'Developer';
}

function Tester(name) {
    this.name = name;
    this.type = 'Tester';
}

function EmployeeFactory() {
    this.create = function (name, type) {
        switch (type) {
            case "developer":
                return new Developer(name);
            case "tester":
                return new Tester(name);
            default:
                throw new Error("Enter a valid role")
        }
    }
}

let employeeFactory = new EmployeeFactory();
console.log(employeeFactory.create("Yash", "developer"));
console.log(employeeFactory.create("Grey", "tester"));
