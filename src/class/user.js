class User {
  static USER_ROLE = {
    USER: 1,
    ADMIN: 2,
    DEVELOPER: 3,
  }

  static #List = []

  constructor({ email, password, role }) {
    this.email = email
    this.password = password
    this.role = User.#convertRole(role)
  }

  static #convertRole = (role) => {
    role = Number(role)

    if (isNaN(role)) {
      role = this.USER_ROLE.USER
    }

    role = Object.values(this.USER_ROLE).includes(role)
      ? role
      : this.USER_ROLE.USER

    return role
  }

  static create(data) {
    const user = new User(data)

    console.log(user)

    this.#List.push(user)

    console.log(this.#List)
  }

  static getByEmail(email) {
    return (
      this.#List.find((user) => user.email === email) ||
      null
    )
  }
}

module.exports = {
  User,
}
