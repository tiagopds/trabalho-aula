let abrigos = [
    {
        nome: "Abrigo A",
        endereco: "Rua A, 123",
        telefone: "1111-1111",
        capacidade: 50
    },
    {
        nome: "Abrigo B",
        endereco: "Rua B, 456",
        telefone: "2222-2222",
        capacidade: 30
    },
    {
        nome: "Abrigo C",
        endereco: "Avenida C, 789",
        telefone: "3333-3333",
        capacidade: 40
    }
];

// Função para listar os abrigos
function listarAbrigos(abrigos) {
    abrigos.forEach((abrigo, index) => {
        console.log(Código: ${index}, Nome: ${abrigo.nome}, Endereço: ${abrigo.endereco}, Telefone: ${abrigo.telefone}, Capacidade: ${abrigo.capacidade});
    });
}

// Chamar a função para listar os abrigos
listarAbrigos(abrigos);