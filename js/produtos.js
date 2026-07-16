//Importando os produtos do arquivo lista_produtos.js
import { produtos } from "./lista_produtos.js";
//Importando a função para adicionar itens ao carrinho ao arquivo carrinho.js
import { itemAdd } from "./carrinho.js";

//Pegando elementos do DOM
const sectionCards = document.querySelector('#cards')

//Função que carrega todos os produtos na tela
const lista_produtos = () => {
    //Limpando o section cards
    sectionCards.innerHTML = ''

    //Percorrendo o array de produtos
    produtos.forEach((elem, i) => {
        //Criando o card do produto
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        //Criando a imagem do produto
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminho_imagem)
        imgCard.setAttribute('alt', elem.descricao_produto)

        //Criando a descrição do produto
        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        //Criando o preço do produto
        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

        //Criando o botão de adicionar
        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

        //Adicionando o produto ao carrinho e redirecionando
        btnCard.addEventListener('click', () => {
            itemAdd(elem)
            window.location.href = '../paginas/carrinho.html';
        });

        //Adicionando os elementos ao card
        divCard.appendChild(imgCard)
        divCard.appendChild(pCard)
        divCard.appendChild(h2Card)
        divCard.appendChild(btnCard)

        //Adicionando o card na página
        sectionCards.appendChild(divCard)
    })
}

//Chamando a função
lista_produtos()

//Criando o menu de seções sem repetir categorias
const menuSecoes = () => {
    const mapSecoes = new Map()

    produtos.forEach((elem) => {
        mapSecoes.set(elem.id_secao, elem)
    })

    //Convertendo o Map em array
    const secoesFiltrada = Array.from(mapSecoes.values())

    //Retornando as seções
    return secoesFiltrada
}

//Carregando o menu de seções
const carregaSecoes = () => {
    const ulMenuSecoes = document.querySelector('#menu-secoes')

    menuSecoes().forEach((elem, i) => {

        const liMenu = document.createElement('li')

        const aMenu = document.createElement('a')
        aMenu.setAttribute('href', '#')
        aMenu.setAttribute('class', 'link-secao')
        aMenu.innerHTML = elem.secao

        //Filtrando os produtos da seção clicada
        aMenu.addEventListener('click', () => {
            montaCards(filtroProduto(elem.id_secao))
        })

        liMenu.appendChild(aMenu)
        ulMenuSecoes.appendChild(liMenu)
    })
}

carregaSecoes()

//Filtra os produtos pela seção
const filtroProduto = (idSecao) => {
    return produtos.filter(elem => elem.id_secao === idSecao)
}

//Pegando o campo de pesquisa
const inputPesquisa = document.querySelector('#pesquisa')

//Pesquisando produtos conforme o usuário digita
inputPesquisa.addEventListener('input', (evt) => {
    //Texto digitado em minúsculo
    let txtInput = evt.target.value.toLowerCase()

    //Exibindo apenas os produtos encontrados
    montaCards(produtos.filter(elem => elem.descricao_produto.toLowerCase().includes(txtInput)))
})

//Função que monta os cards filtrados
const montaCards = (objProduto) => {
    //Limpando a área dos cards
    sectionCards.innerHTML = ''

    //Percorrendo os produtos filtrados
    objProduto.forEach((elem, i) => {
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminho_imagem)
        imgCard.setAttribute('alt', elem.descricao_produto)

        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

        //Adicionando o produto ao carrinho
        btnCard.addEventListener('click', () => {
            itemAdd(elem)
            window.location.href = '../paginas/carrinho.html'
        })

        //Montando o card
        divCard.appendChild(imgCard)
        divCard.appendChild(pCard)
        divCard.appendChild(h2Card)
        divCard.appendChild(btnCard)

        //Exibindo o card na tela
        sectionCards.appendChild(divCard)
    })
}
