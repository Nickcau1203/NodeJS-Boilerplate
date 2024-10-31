class User {
  constructor(id, name, email, password) {
    this.id = this.generateID();
    this.name = name;
    this.email = email;
    this.password = password;
  }
  generateID() {
    return Math.floor(Math.random() * 999) + 1;
  }
}