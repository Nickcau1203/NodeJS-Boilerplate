import User from "./User.js";

class UserRepository {
  constructor() {
    this.users = [];
  }

  getAllusers() {
    return this.users;
  }
}

  export default UserRepository;