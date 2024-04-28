// Definição da classe Abrigo
class Abrigo {
    constructor(nome, endereco, telefone, capacidade) {
      this.nome = nome;
      this.endereco = endereco;
      this.telefone = telefone;
      this.capacidade = capacidade;
    }
  }
  
  // Array para armazenar os abrigos
  let abrigos = [];
  
  // Função para cadastrar um novo abrigo
  function cadastrarAbrigo() {
    let nome = prompt("Digite o nome do abrigo:");
    let endereco = prompt("Digite o endereço do abrigo:");
    let telefone = prompt("Digite o telefone do abrigo:");
    let capacidade = prompt("Digite a capacidade de lotação do abrigo:");
  
    // Criar um novo objeto Abrigo com os dados fornecidos
    let novoAbrigo = new Abrigo(nome, endereco, telefone, capacidade);
  
    // Adicionar o novo abrigo ao array de abrigos
    abrigos.push(novoAbrigo);
  
    console.log("Abrigo cadastrado com sucesso!");
  }