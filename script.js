//Comunicação com o Banco de Dados - NO_SQL - JSON

fetch('dados.json').then(resposta => resposta.json()).then(banco => {
    console.log(banco)

    //FRONT-END
    document.getElementById('imagem').innerHTML = banco[4].imagemProdutos.image1
    document.getElementById('produto').innerHTML = banco[0].produtos.prod1
    document.getElementById('preco').innerHTML = "R$" + banco[2].preco.preco1
    document.getElementById('vendedor').innerHTML = banco[1].vendedor.venda1
    document.getElementById('cliente').innerHTML = banco[3].cliente.cliente1

    document.getElementById('imagem2').innerHTML = banco[4].imagemProdutos.image2
    document.getElementById('produto2').innerHTML = banco[0].produtos.prod2
    document.getElementById('preco2').innerHTML = "R$" + banco[2].preco.preco2
    document.getElementById('vendedor2').innerHTML = banco[1].vendedor.venda2
    document.getElementById('cliente2').innerHTML = banco[3].cliente.cliente2

    document.getElementById('imagem3').innerHTML = banco[4].imagemProdutos.image3
    document.getElementById('produto3').innerHTML = banco[0].produtos.prod3
    document.getElementById('preco3').innerHTML = "R$" + banco[2].preco.preco3
    document.getElementById('vendedor3').innerHTML = banco[1].vendedor.venda3
    document.getElementById('cliente3').innerHTML = banco[3].cliente.cliente3
})