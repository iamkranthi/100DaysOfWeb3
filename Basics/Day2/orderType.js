const ORDER_TYPES=require('./order')

const orders = [
    { pizzas: 25, type: ORDER_TYPES.PIZZA },
    { wings: 12, type: ORDER_TYPES.WINGS },
];
console.log(orders.keys(orders))

function numberOfPizzas(orders) {
    let totalPizzas = 0;
    for (const element of orders) {
      if (element.type === ORDER_TYPES.PIZZA) {
        totalPizzas += element.pizzas;
      }
    }
    return totalPizzas
  }
