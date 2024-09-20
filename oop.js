const person = {
    name: "Mike",
    lastName: "Showman",
    age: 34,
    friends: [],
    getFullName() {
        return this.name + ' ' + this.lastName;
    }
}

console.log(person.getFullName())