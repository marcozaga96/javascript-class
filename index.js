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

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  stessoPadrone(padrone) {
    if (this.ownerName === padrone.ownerName) {
      return `${this.petName} e ${padrone.petName} hanno lo stesso padrone`;
    }
  }
}
const animali = [];
const aggiungiAnimale = (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const nomePadrone = document.getElementById("nomePadrone").value;
  const specie = document.getElementById("specie").value;
  const razza = document.getElementById("razza").value;
  const newPet = new Pet(nome, nomePadrone, specie, razza);
  animali.push(newPet);
  animali.forEach((pet) => {
    if (pet !== newPet) {
      console.log(newPet.stessoPadrone(pet));
    }
  });
  console.log(animali);
};
document.getElementById("form").addEventListener("submit", aggiungiAnimale);
