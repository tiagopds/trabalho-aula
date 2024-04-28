// Banco de dados dos abrigos disponíveis no estado
let abrigos = [];

// Função para cadastrar um novo abrigo
function cadastrarAbrigo() {
    let nome = prompt("Digite o nome do abrigo:");
    let endereco = prompt("Digite o endereço do abrigo:");
    let cidade = prompt("Digite a cidade do abrigo:");
    let telefone = prompt("Digite o telefone do abrigo:");
    let capacidade = prompt("Digite a capacidade de lotação do abrigo:");

    abrigos.push({
        nome: nome,
        endereco: endereco,
        cidade: cidade,
        telefone: telefone,
        capacidade: capacidade
    });

    console.log("Abrigo cadastrado com sucesso!");
}

// Função para listar todos os abrigos disponíveis
function listarAbrigos() {
    console.log("Lista de Abrigos Disponíveis:");
    abrigos.forEach(abrigo => {
        console.log("Nome: " + abrigo.nome);
        console.log("Endereço: " + abrigo.endereco);
        console.log("Cidade: " + abrigo.cidade);
        console.log("Telefone: " + abrigo.telefone);
        console.log("Capacidade: " + abrigo.capacidade);
        console.log("----------------------------");
    });
}

// Função para procurar um abrigo por cidade
function procurarAbrigo() {
    let cidadeProcurada = prompt("Digite o nome da cidade para buscar um abrigo:");
    let abrigosEncontrados = abrigos.filter(abrigo => abrigo.cidade.toLowerCase() === cidadeProcurada.toLowerCase());

    if (abrigosEncontrados.length > 0) {
        console.log("Abrigos encontrados em " + cidadeProcurada + ":");
        abrigosEncontrados.forEach(abrigo => {
            console.log("Nome: " + abrigo.nome);
            console.log("Endereço: " + abrigo.endereco);
            console.log("Telefone: " + abrigo.telefone);
            console.log("----------------------------");
        });
    } else {
        console.log("Nenhum abrigo encontrado em " + cidadeProcurada + ".");
    }
}

// Menu principal
let opcao;
do {
    console.log("Menu:");
    console.log("1. Cadastrar Abrigo");
    console.log("2. Listar Abrigos");
    console.log("3. Procurar Abrigo");
    console.log("4. Sair");

    opcao = prompt("Escolha uma opção:");

    switch (opcao) {
        case '1':
            cadastrarAbrigo();
            break;
        case '2':
            listarAbrigos();
            break;
        case '3':
            procurarAbrigo();
            break;
        case '4':
            console.log("Saindo do programa. Obrigado!");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
} while (opcao !== '4');
