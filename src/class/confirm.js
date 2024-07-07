class Confirm {
  static #List = []

  constructor(data) {
    this.code = Confirm.generateCode()
    this.data = data
  }

  static generateCode = () =>
    Math.floor(Math.random() * 9000) + 1000

  static create = (data) => {
    this.#List.push(new Confirm(data))

    setTimeout(() => {
      this.delete(code)
    }, 24 * 60 * 60 * 1000) // 24 hours in ms

    console.log(this.#List)
  }

  static delete = (code) => {
    const length = this.#List

    this.#List = this.#List.filter(
      (item) => item.code !== code,
    )

    return length > this.#List.length
  }

  static getData = (code) => {
    const obj = this.#List.find(
      (item) => item.code === code,
    )

    return obj ? obj.data : null
  }
}

module.exports = {
  Confirm,
}
