function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("hello" + this.name);
    }
}

module.exports = Person;