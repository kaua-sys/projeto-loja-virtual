const produtos = [
    {
        id_compra: 1,
        descricao_produto: "Violão Acústico",
        valor_unitario: 396.10,
        unidade: "UN",
        caminho_imagem: "/imagens/violão.jpg",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_compra: 2,
        descricao_produto: "Guitarra Stratocaster",
        valor_unitario: 1288.00,
        unidade: "UN",
        caminho_imagem: "/imagens/guitarra.jpg",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_compra: 3,
        descricao_produto: "Baixo 4 Cordas",
        valor_unitario: 995.90,
        unidade: "UN",
        caminho_imagem: "/imagens/baixo 4 cordas.jpg",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_compra: 4,
        descricao_produto: "Contrabaixo",
        valor_unitario: 2049.00,
        unidade: "UN",
        caminho_imagem: "/imagens/contrabaixo.jpg",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_compra: 5,
        descricao_produto: "Violino",
        valor_unitario: 485.00,
        unidade: "UN",
        caminho_imagem: "/imagens/violino.jpg",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_compra: 6,
        descricao_produto: "Harpa",
        valor_unitario: 62071.74,
        unidade: "UN",
        caminho_imagem: "/imagens/harpa.jpg",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_compra: 7,
        descricao_produto: "Harpa de Lira",
        valor_unitario: 700.00,
        unidade: "UN",
        caminho_imagem: "/imagens/harpa de lira.jpg",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_compra: 8,
        descricao_produto: "Clarinete",
        valor_unitario: 402.00,
        unidade: "UN",
        caminho_imagem: "/imagens/clarinete.jpg",
        id_secao: 2,
        secao: "Sopro"
    },
    {
        id_compra: 9,
        descricao_produto: "Flauta Transversal",
        valor_unitario: 1160.40,
        unidade: "UN",
        caminho_imagem: "/imagens/flauta transversal.jpg",
        id_secao: 2,
        secao: "Sopro"
    },
    {
        id_compra: 10,
        descricao_produto: "Gaita",
        valor_unitario: 169.20,
        unidade: "UN",
        caminho_imagem: "/imagens/gaita.jpg",
        id_secao: 2,
        secao: "Sopro"
    },
    {
        id_compra: 11,
        descricao_produto: "Ocarina",
        valor_unitario: 123.40,
        unidade: "UN",
        caminho_imagem: "/imagens/ocarina.jpg",
        id_secao: 2,
        secao: "Sopro"
    },
    {
        id_compra: 12,
        descricao_produto: "Saxofone",
        valor_unitario: 1361.00,
        unidade: "UN",
        caminho_imagem: "/imagens/safoxone.jpg",
        id_secao: 2,
        secao: "Sopro"
    },
    {
        id_compra: 13,
        descricao_produto: "Trombone",
        valor_unitario: 2274.64,
        unidade: "UN",
        caminho_imagem: "/imagens/trombone.jpg",
        id_secao: 2,
        secao: "Sopro"
    },
    {
        id_compra: 14,
        descricao_produto: "Trompete",
        valor_unitario: 108116.10,
        unidade: "UN",
        caminho_imagem: "/imagens/trompete.jpg",
        id_secao: 2,
        secao: "Sopro"
    },
    {
        id_compra: 15,
        descricao_produto: "Teclado",
        valor_unitario: 1211.74,
        unidade: "UN",
        caminho_imagem: "/imagens/teclado.jpg",
        id_secao: 3,
        secao: "Teclas"
    },
    {
        id_compra: 16,
        descricao_produto: "Piano",
        valor_unitario: 78368.44,
        unidade: "UN",
        caminho_imagem: "/imagens/piano.jpg",
        id_secao: 3,
        secao: "Teclas"
    },
    {
        id_compra: 17,
        descricao_produto: "Bateria",
        valor_unitario: 4758.90,
        unidade: "UN",
        caminho_imagem: "/imagens/bateria.jpg",
        id_secao: 4,
        secao: "Percussão"
    },
    {
        id_compra: 18,
        descricao_produto: "Pandeiro",
        valor_unitario: 122.50,
        unidade: "UN",
        caminho_imagem: "/imagens/pandeiro.jpg",
        id_secao: 4,
        secao: "Percussão"
    },
    {
        id_compra: 19,
        descricao_produto: "Triângulo",
        valor_unitario: 70.90,
        unidade: "UN",
        caminho_imagem: "/imagens/triângulo.jpg",
        id_secao: 4,
        secao: "Percussão"
    },
    {
        id_compra: 20,
        descricao_produto: "Tambor",
        valor_unitario: 540.00,
        unidade: "UN",
        caminho_imagem: "/imagens/tambor.jpg",
        id_secao: 4,
        secao: "Percussão"
    }
];

// Completa até 40 produtos
for (let i = 21; i <= 40; i++) {
    produtos.push({
        id_compra: i,
        descricao_produto: `Produto Musical ${i}`,
        valor_unitario: Number((100 + i * 25.5).toFixed(2)),
        unidade: "UN",
        caminho_imagem: "/imagens/sem-imagem.jpg",
        id_secao: 5,
        secao: "Acessórios"
    });
}

@export{produtos};