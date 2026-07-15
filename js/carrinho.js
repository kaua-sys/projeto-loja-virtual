//Criadno o array de itens do carrinho
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []
//const itensCarrinho2 = JSON.parse(localStorage.get('carrinhoSessao')) || []

//Função item
const item = (objProduto) => {
    const item ={
    id_compra: objProduto.id_compra,
    descricao_produto: objProduto.descricao_produto,
    valor_unitario: objProduto.valor_unitario,
    unidade: objProduto.unidade,
    caminho_imagem: objProduto.caminho_imagem,
    quantidade: '1'
    }

    return item
} 

//Criando para que o usúario adicione mais 1 na quantidade quando repetir a escolha do instrumento
const itemAdd = (add) =>{
    
}

//Função para adicionar um item
const addItem = (objItem)=>{
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
}

//Função para listar os itens do carrinho
const listItens = () =>{
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

    return listaItens
}

// Função para remover um item
const removeItem = (indice) => {
    itensCarrinho.splice(indice, 1);

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );
}

export { addItem, listItens, removeItem };
