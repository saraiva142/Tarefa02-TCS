class Funcionario {
    constructor(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Cargo: ${this.cargo}, Salário: ${this.salario}`;
    }
}

const funcionarios = [];

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cargo = document.getElementById('cargo').value;
    const salario = document.getElementById('salario').value;

    // Verifica se todos os campos foram preenchidos
    if (!nome || !idade || !cargo || !salario) {
        alert('Animal Faltou preencher algum campo! 🤬');
        return;
    }

    const funcionario = new Funcionario(nome, idade, cargo, salario);
    funcionarios.push(funcionario);

    atualizarTabela();
    this.reset(); // Limpa o formulário após o envio
});

function atualizarTabela() {
    const tabela = document.getElementById('table');
    tabela.innerHTML = ''; // Limpa a tabela antes de atualizar

    funcionarios.forEach((funcionario, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${funcionario.nome}</td>
            <td>${funcionario.idade}</td>
            <td>${funcionario.cargo}</td>
            <td>${funcionario.salario}</td>
            <td><button class="editar">Editar</button></td>
            <td><button class="remover">Remover</button></td>
        `;
        tabela.appendChild(row);

        // Adiciona evento de clique ao botão "Editar"
        row.querySelector('.editar').addEventListener('click', () => {
            editarFuncionario(index);
        });

        // Adiciona evento de clique ao botão "Remover"
        row.querySelector('.remover').addEventListener('click', () => {
            removerFuncionario(index);
        });
    });
}

// Exemplo de substituição de uma função anônima tradicional por uma arrow function:
// Tradicional:
//row.querySelector('.editar').addEventListener('click', function() {
    //editarFuncionario(index);
//});
// Arrow:
//row.querySelector('.editar').addEventListener('click', () => editarFuncionario(index));

const removerFuncionario = (index) => {
    const funcionarioRemovido = funcionarios[index];
    funcionarios.splice(index, 1); // Remove o funcionario do array
    atualizarTabela(); // Atualiza a tabela
    console.log(`Funcionario ${funcionarioRemovido.nome} foi removido com sucesso!`);
  };

const editarFuncionario = (index) => {
    const funcionario = funcionarios[index];
    document.getElementById('nome').value = funcionario.nome;
    document.getElementById('idade').value = funcionario.idade;
    document.getElementById('cargo').value = funcionario.cargo;
    document.getElementById('salario').value = funcionario.salario;
  
    const form = document.querySelector('form');
    const botaoCadastrar = form.querySelector('input[type="submit"]');
    botaoCadastrar.value = "Salvar";
  
    // Substitui o comportamento padrão do botão "Cadastrar"
    form.onsubmit = function (index) {
      const funcionario = funcionarios[index];
      document.getElementById('nome').value = funcionario.nome;
      document.getElementById('idade').value = funcionario.idade;
      document.getElementById('cargo').value = funcionario.cargo;
      document.getElementById('salario').value = funcionario.salario;
  
  
      funcionarios[index] = new Funcionario(nomeAtualizado, idadeAtualizada, cargoAtualizado, salarioAtualizada);
  //Essa porra não exclui a desgraça da linha antiga pois estou usando index, e se eu excluir antes ele não vai alterar pq n vai mais existir essa porra
      alert('Funcionario foi editado com sucesso!');
  
      // Restaura o botão "Cadastrar" e o comportamento padrão
      botaoCadastrar.value = "Cadastrar";
      form.onsubmit = null;
  
      atualizarTabela();
  
      // Limpa o formulário
      form.reset();
    };
  }
  
//Relatorio dos com salario maior q 5k
document.getElementById('maior-que-cinco').addEventListener('click', function () {
    const MaiorQueCinco = funcionarios.filter(funcionario => funcionario.salario >= 5000);
    const listaMaiorQueCinco = MaiorQueCinco.map(funcionario => funcionario.toString()).join('<br>');
    document.getElementById('relatorio-bi').innerHTML = `<h3>uncionários com salário maior que 5k:</h3><p>${listaMaiorQueCinco}</p>`;
  });

//media das notas
document.getElementById('media-salario').addEventListener('click', () => {
    const mediaSalario = funcionarios.reduce((soma, funcionario) => soma + parseFloat(funcionario.salario), 0) / funcionarios.length;
    document.getElementById('relatorio-bi').innerHTML = `<h3>Média Salarial:</h3><p>${mediaSalario.toFixed(2)}</p>`;
  });