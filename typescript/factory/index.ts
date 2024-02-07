class User {
  firstName: string

  lastName: string

  email: string

  constructor(data: Omit<User, 'fullName'>) {
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.email = data.email
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const user = new User({
  firstName: 'Bruce',
  lastName: 'Song',
  email: 'recall4056@gmail.com'
})
