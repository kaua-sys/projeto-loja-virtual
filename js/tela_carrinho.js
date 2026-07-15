// Importando a função listItens do carrinho.js
import { listItens, removeItem } from "./carrinho.js";

// Montar tela do Carrinho
const montaTelaCarrinho = (objListaItens = []) => {

    const sectionItensCarrinho = document.querySelector("#itens-carrinho");

    // Limpa a lista apenas uma vez
    sectionItensCarrinho.innerHTML = "";

    // Carrinho vazio
    if (objListaItens.length === 0) {
        sectionItensCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    objListaItens.forEach((elem, i) => {

        // Produto
        const sectionItem = document.createElement("section");
        sectionItem.setAttribute("class", "produto");

        // Imagem
        const divImgItem = document.createElement("div");
        divImgItem.setAttribute("class", "img-item");

        const imgItem = document.createElement("img");
        imgItem.setAttribute("src", elem.caminho_imagem);
        imgItem.setAttribute("alt", elem.descricao_produto);

        divImgItem.appendChild(imgItem);

        // Descrição
        const divDescricaoItens = document.createElement("div");
        divDescricaoItens.setAttribute("class", "descricoes-itens");

        const h3 = document.createElement("h3");
        h3.textContent = elem.descricao_produto;

        divDescricaoItens.appendChild(h3);

        // Valores
        const divValores = document.createElement("div");
        divValores.setAttribute("class", "valores");

        const pItem = document.createElement("p");
        pItem.innerHTML = `Preço: R$ ${parseFloat(elem.valor_unitario)
            .toFixed(2)
            .replace(".", ",")}`;

        // Quantidade
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

        // Total do item
        const pTotal = document.createElement("p");
        
        //Adicionado o botão remover 
        const btnRemover = document.createElement("button");
        btnRemover.setAttribute("class", "remover");
        btnRemover.textContent = "Remover";

        btnRemover.addEventListener("click", () => {
            if(confirm(`Tem certeza que deseja remover ${elem.descricao_produto}`))
            removeItem(i);
            montaTelaCarrinho(listItens());
        });

        //Atualizando o valor total
        const atualizaTotal = () => {
            const total = elem.valor_unitario * Number(inputQuantidade.value);

            pTotal.textContent = `Total: R$ ${total
                .toFixed(2)
                .replace(".", ",")}`;
        };

        atualizaTotal();

        inputQuantidade.addEventListener("input", atualizaTotal);

        // Montagem
        divValores.appendChild(pItem);
        divValores.appendChild(divQuant);
        divValores.appendChild(pTotal);
        divValores.appendChild(btnRemover)

        sectionItem.appendChild(divImgItem);
        sectionItem.appendChild(divDescricaoItens);
        sectionItem.appendChild(divValores);

        sectionItensCarrinho.appendChild(sectionItem);
    });
};

// Carrega os itens do carrinho
montaTelaCarrinho(listItens());