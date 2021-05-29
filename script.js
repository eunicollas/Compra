let Saldo = prompt('Insira seu saldo inicial');
let ValorProduto = prompt('Insiria o valor da compra que você quer efetuar')
function saldo1(a, b) {
    return a-b;
}
const x = saldo1(Saldo, ValorProduto);

Saldo = parseInt(Saldo)

if (Saldo > 20) {
    alert(`A compra foi realizada com sucesso! Seu saldo atual é de ${x}`)
}
else if (Saldo < 20) {
    alert('Saldo insuficiente')
}
else {
    alert('A compra foi relizada com sucesso!')
}