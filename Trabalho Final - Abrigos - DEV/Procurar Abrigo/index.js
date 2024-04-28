// Definição dos abrigos cadastrados
const abrigos = [
    { cidade: "São Paulo", nome: "Abrigo A", vagas: 10 },
    { cidade: "São Paulo", nome: "Abrigo B", vagas: 5 },
    { cidade: "Rio de Janeiro", nome: "Abrigo C", vagas: 8 },
    // Adicione mais abrigos com suas informações completas aqui
];

// Função para procurar abrigos por cidade
function procurarAbrigoPorCidade(cidade) {
    const abrigosNaCidade = abrigos.filter(abrigo => abrigo.cidade === cidade);

    if (abrigosNaCidade.length > 0) {
        console.log(Abrigos em ${cidade}:);
        abrigosNaCidade.forEach(abrigo => {
            console.log(Nome: ${abrigo.nome} - Vagas disponíveis: ${abrigo.vagas});
        });
    } else {
        console.log("Nenhum abrigo encontrado nessa cidade.");
    }
}

// Exemplo de uso: procurar abrigos em São Leopoldo
procurarAbrigoPorCidade("São Leopoldo");