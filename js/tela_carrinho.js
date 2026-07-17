//Importando as funções do carrinho.js
import { listItens, removeItem, updateQuantidade } from "./carrinho.js";

//Função para montar a tela do carrinho
const montaTelaCarrinho = (objListaItens = []) => {

    const sectionItensCarrinho = document.querySelector("#itens-carrinho");

    //Limpando a lista de produtos
    sectionItensCarrinho.innerHTML = "";

    //Verificando se o carrinho está vazio
    if (objListaItens.length === 0) {
        sectionItensCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    let totalCarrinho = 0;

    //Calculando o valor total do carrinho
    objListaItens.forEach((elem) => {
        totalCarrinho += elem.valor_unitario * elem.quantidade;
    });

    //Percorrendo os itens do carrinho
    objListaItens.forEach((elem, i) => {

        //Criando o produto
        const sectionItem = document.createElement("section");
        sectionItem.setAttribute("class", "produto");

        //Criando a imagem do produto
        const divImgItem = document.createElement("div");
        divImgItem.setAttribute("class", "img-item");

        const imgItem = document.createElement("img");
        imgItem.setAttribute("src", elem.caminho_imagem);
        imgItem.setAttribute("alt", elem.descricao_produto);

        divImgItem.appendChild(imgItem);

        //Criando a descrição do produto
        const divDescricaoItens = document.createElement("div");
        divDescricaoItens.setAttribute("class", "descricoes-itens");

        const h3 = document.createElement("h3");
        h3.textContent = elem.descricao_produto;

        divDescricaoItens.appendChild(h3);

        //Criando a área de valores
        const divValores = document.createElement("div");
        divValores.setAttribute("class", "valores");

        const pItem = document.createElement("p");
        pItem.innerHTML = `Preço: R$ ${parseFloat(elem.valor_unitario)
            .toFixed(2)
            .replace(".", ",")}`;

        //Criando o campo de quantidade
        const divQuant = document.createElement("div");
        divQuant.setAttribute("class", "input-quantidade");

        const inputQuantidade = document.createElement("input");
        inputQuantidade.setAttribute("type", "number");
        inputQuantidade.setAttribute("name", `quant${i}`);
        inputQuantidade.setAttribute("id", `quant${i}`);
        inputQuantidade.setAttribute("class", "input-item");
        inputQuantidade.setAttribute("min", "1");
        inputQuantidade.setAttribute("value", elem.quantidade);

        divQuant.appendChild(inputQuantidade);

        //Criando o total do item
        const pTotal = document.createElement("p");

        //Criando o botão remover
        const btnRemover = document.createElement("button");
        btnRemover.setAttribute("class", "remover");
        btnRemover.textContent = "Remover";

        //Removendo o produto do carrinho
        btnRemover.addEventListener("click", () => {
            if (confirm(`Tem certeza que deseja remover ${elem.descricao_produto}`)) {
                removeItem(i);
                montaTelaCarrinho(listItens());
            }
        });

        //Atualizando o total do produto
        const atualizaTotal = () => {
            const total = elem.valor_unitario * Number(inputQuantidade.value);

            pTotal.textContent = `R$${total
                .toFixed(2)
                .replace(".", ",")}`;
        };

        atualizaTotal();

        //Atualizando a quantidade do produto
        inputQuantidade.addEventListener("input", () => {

            const quantidade = Number(inputQuantidade.value);
        
            atualizaTotal();
        
            updateQuantidade(
                elem.id_compra,
                quantidade
            );
        
            montaTelaCarrinho(listItens());
        });
        //Exibindo o total do carrinho
        const valorProdutos = document.querySelector("#valor-produtos");

        valorProdutos.textContent = `R$ ${totalCarrinho.toFixed(2).replace(".", ",")}`;
        
        //Total do carrinho dos produtos com o frete
        const total = document.querySelector("#valor-total");

         total.innerHTML = `R$ ${totalCarrinho.toFixed(2).replace(".",",")}` 

        //Montando a área de valores
        divValores.appendChild(pItem);
        divValores.appendChild(divQuant);
        divValores.appendChild(pTotal);
        divValores.appendChild(btnRemover);

        //Montando o produto
        sectionItem.appendChild(divImgItem);
        sectionItem.appendChild(divDescricaoItens);
        sectionItem.appendChild(divValores);

        //Adicionando o produto ao carrinho
        sectionItensCarrinho.appendChild(sectionItem);
    });
};

//Carregando os itens do carrinho
montaTelaCarrinho(listItens());