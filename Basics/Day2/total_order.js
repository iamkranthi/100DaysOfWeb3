const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];
function numberOfPizzas(orders) {
    let totalPizzas =0
for(let i=0;i<orders.length;i++){
    totalPizzas+=orders[i].pizzas
}
    return totalPizzas
}
