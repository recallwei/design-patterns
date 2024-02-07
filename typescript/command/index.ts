interface Order {
  id: number
  name: string
  price: number
}

class OrderManager {
  orders: Order[]

  constructor() {
    this.orders = []
  }

  execute(command: Command, ...args: []) {
    return command.execute(this.orders, ...args)
  }
}

class Command {
  execute: (orders: Order[]) => void

  constructor(execute: (orders: Order[]) => void) {
    this.execute = execute
  }
}

function addOrder(order: Order) {
  return new Command((orders) => {
    orders.push(order)
  })
}

function removeOrder(id: number) {
  return new Command((orders) => {
    const index = orders.findIndex((order) => order.id === id)
    if (index !== -1) {
      orders.splice(index, 1)
    }
  })
}

const manager = new OrderManager()
manager.execute(addOrder({ id: 1, name: 'Pizza', price: 100 }))
manager.execute(removeOrder(1))
