//Importando os produtos do arquivo lista_produtos.js
import { produtos } from "./lista_produtos.js";

//Pegando elementos do DOM
const sectionCards = document.querySelector('#cards')

//Carregando os cards
const lista_produtos = () =>{
    //Limpando o section cards
    sectionCards.innerHTML = ''
 
    //Pecorrendo o array de produtos
    produtos.forEach((elem, i)=>{
        //Criando o elemento div e definindo o atributo card
    const divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')

    //Criando o elemento img e definindo os atributos sc e alt os valores do caminho das imagens e a descrição dos produtos
    const imgCard = document.createElement('img')
    imgCard.setAttribute('src',elem.caminho_imagem)
    imgCard.setAttribute('alt', elem.descricao_produto)

    //Criando o elemento p e atribuido a descrição dos produtos
    const pCard = document.createElement('p')
    pCard.innerHTML = elem.descricao_produto

    //Criadno o elemento h2 e atribuindo o valor unitário deixando em duas casas decimais e substituindo ponto por vírgulo
    const h2Card = document.createElement ('h2')
    h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}`

    //Criando o elemento button e definindo os atributos class e a descrição adicionar
    const btnCard = document.createElement('button')
    btnCard.setAttribute('class', 'btn-add')
    btnCard.innerHTML = 'Adicionar'

    btnCard.addEventListener('click', () => {
        window.location.href = '../paginas/carrinho.html';
    });

    //Adicionando os elementos filhos aos divCard
    divCard.appendChild(imgCard)
    divCard.appendChild(pCard)
    divCard.appendChild(h2Card)
    divCard.appendChild(btnCard)
    
    //Adicionando o divCard a section cards
    sectionCards.appendChild(divCard)


    })


}

//Chamando a Função listarProdutos
lista_produtos()

//Montando os menus seções
const menuSecoes = () =>{
    const mapSecoes = new Map()

    produtos.forEach((elem) =>{
        mapSecoes.set(elem.id_secao, elem)
    })

    const secoesFiltrada = Array.from(mapSecoes.values())

    //Retornando o array selecionado
    return secoesFiltrada
}

//Função para Inserir os menus na lista
const carregaSecoes = () =>{
    const ulMenuSecoes = document.querySelector('#menu-secoes')

    menuSecoes().forEach((elem, i) =>{
        
        const liMenu = document.createElement('li')
    
        const aMenu = document.createElement('a')
        aMenu.setAttribute('href','#')
        aMenu.setAttribute('class', 'link-secao')
        aMenu.innerHTML = elem.secao

        aMenu.addEventListener('click',()=>{
            montaCards(filtroProduto(elem.id_secao))
        })

        liMenu.appendChild(aMenu)

        ulMenuSecoes.appendChild(liMenu)
    })

}

carregaSecoes()

const filtroProduto = (idSecao) => {
    return produtos.filter(elem => elem.id_secao === idSecao)
}

//Capturando os caracteres do input pesquisa
//Pegando input do DOM
const inputPesquisa = document.querySelector('#pesquisa')

inputPesquisa.addEventListener('input',(evt)=>{
    //Pegando o valor do input e converendo em minúsculos
   let txtInput = evt.target.value.toLowerCase()

   //Filtrando os cards a partir do filter e includes
  montaCards(produtos.filter(elem => elem.descricao_produto.toLowerCase().includes(txtInput)))
})

const montaCards = (objProduto) =>{
    //Limpando o section cards
    sectionCards.innerHTML = ''
 
    //Pecorrendo o array de produtos
    objProduto.forEach((elem, i)=>{
        //Criando o elemento div e definindo o atributo card
    const divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')

    //Criando o elemento img e definindo os atributos sc e alt os valores do caminho das imagens e a descrição dos produtos
    const imgCard = document.createElement('img')
    imgCard.setAttribute('src',elem.caminho_imagem)
    imgCard.setAttribute('alt', elem.descricao_produto)

    //Criando o elemento p e atribuido a descrição dos produtos
    const pCard = document.createElement('p')
    pCard.innerHTML = elem.descricao_produto

    //Criadno o elemento h2 e atribuindo o valor unitário deixando em duas casas decimais e substituindo ponto por vírgulo
    const h2Card = document.createElement ('h2')
    h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}`

    //Criando o elemento button e definindo os atributos class e a descrição adicionar
    const btnCard = document.createElement('button')
    btnCard.setAttribute('class', 'btn-add')
    btnCard.innerHTML = 'Adicionar'

    btnCard.addEventListener('click',()=>{
        window.location.href = '../paginas/carrinho.html'
    })

    //Adicionando os elementos filhos aos divCard
    divCard.appendChild(imgCard)
    divCard.appendChild(pCard)
    divCard.appendChild(h2Card)
    divCard.appendChild(btnCard)
    
    //Adicionando o divCard a section cards
    sectionCards.appendChild(divCard)
    })
}

