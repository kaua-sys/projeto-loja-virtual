//Criadno o array de itens do carrinho
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []
//const itensCarrinho2 = JSON.parse(localStorage.get('carrinhoSessao')) || []

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


//Exportação
export{addItem, listItens}