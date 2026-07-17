//Pegando Elemento do DOM
const inputCep = document.querySelector('#cep')

//Capturand o evento change
inputCep.addEventListener('change',(evt) =>{

    const numCep = evt.target.value.replace(/\D/g, "")

    if (numCep.length !== 8){
        alert('Cep Inválido')

        return
    }
    //Chama a função consultaCep
    consultaCep(numCep)

})

//Função consulta Cep ViaCep
const consultaCep = async (cep) => {
    //Tenta conectar a API
    try{

  //Faz a comunicação com a API do via cep por meio da função fetch
  //await - Aguarda até obter um promise      
  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  
  //Se os status da respostas não for OK. Dispara um excessão
  if(resposta.ok){
    throw new Error("Erro na Requisição")
  }

  //Obtem os dados da API
  const dadosEndereco = await resposta.json()

  //Verifica se o dados são válidos
  if(dadosEndereco.erro){
    alert("Cep não localizado")

    return
  }

  //Chama a função carregaInput
  carregaInput(dadosEndereco)

//Caso haja qualquer erro é disparada uma exceção  
}catch(erro){
    console.log("Erro",erro.message)
}

}
//Objeto literal dos inputs
const campos = {
  logradouro: document.querySelector("#logradouro"),
  bairro: document.querySelector("#bairro"),
  localidade: document.querySelector("#cidade"),
  estado: document.querySelector("#estado")
}

//Função carrega inputs
const carregaInput = (objEndereco) => {

}