//Criando o array de itens do carrinho
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []

//Função que cria um item para o carrinho
const item = (objProduto) => {
    const item = {
        id_compra: objProduto.id_compra,
        descricao_produto: objProduto.descricao_produto,
        valor_unitario: objProduto.valor_unitario,
        unidade: objProduto.unidade,
        caminho_imagem: objProduto.caminho_imagem,
        quantidade: 1
    }

    return item
}

//Verificando se o produto já existe no carrinho
const itemAdd = (add) => {
    const itemCarrinho = itensCarrinho.findIndex(
        elem => elem.id_compra == add.id_compra
    )

    //Aumentando a quantidade do produto
    if (itemCarrinho != -1) {
        itensCarrinho[itemCarrinho].quantidade++

        //Atualizando o sessionStorage
        sessionStorage.setItem(
            'carrinhoSessao',
            JSON.stringify(itensCarrinho)
        )
    } else {
        //Adicionando um novo produto
        addItem(item(add))
    }
}

//Função para adicionar um item ao carrinho
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    //Salvando os dados no sessionStorage
    sessionStorage.setItem(
        'carrinhoSessao',
        JSON.stringify(itensCarrinho)
    )
}

//Função para listar os itens do carrinho
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

    return listaItens
}

//Função para remover um item do carrinho
const removeItem = (indice) => {
    itensCarrinho.splice(indice, 1)

    //Atualizando o sessionStorage
    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    )
}

//Função para atualizar a quantidade de um produto
const updateQuantidade = (idCompra, quantidade) => {

    //Localizando o produto no carrinho
    const indice = itensCarrinho.findIndex(elem => elem.id_compra == idCompra)

    if (indice != -1) {
        itensCarrinho[indice].quantidade = quantidade

        //Salvando a nova quantidade
        sessionStorage.setItem(
            'carrinhoSessao',
            JSON.stringify(itensCarrinho)
        )
    }
}

export { itemAdd, listItens, removeItem, updateQuantidade }