class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  confronto = (user) => {
    if (this.age > user.age) {
      return `${this.firstName} è piu grande di ${user.firstName}`;
    } else return `${this.firstName} è piu piccolo di ${user.firstName}`;
  };
}
const x = new User("Marco", "Zagaria", 28, "Andria");
const y = new User("Aldo", "Valzani", 29, "Valenzano");
console.log(x.confronto(y));
