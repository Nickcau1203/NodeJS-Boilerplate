import User from "./User.js";

class UserRepository {
  constructor() {
    this.users = [];
  }

  getAllusers() {
    return this.users;
  }

  addUser(name, email, password) {
    const newUser = new User(name, email, password)

    this.users.push(newUser);

    return newUser;
  }

  getUserById(id) {
    const user = this.users.find(u => u.id = id);

    return user;
  }
}

  export default UserRepository;