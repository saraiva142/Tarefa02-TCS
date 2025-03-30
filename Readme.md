# 📌 Conceitos Importantes

## 🎯 Programação Orientada a Objetos (POO)
### 🔹 Atributos
Os atributos são variáveis que armazenam os dados de um objeto. No JavaScript, são declarados dentro de uma classe e associados a cada instância do objeto.

```js
class Funcionario {
    constructor(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }
}
```

### 🔹 Construtor
O construtor é um método especial que inicializa um objeto quando ele é instanciado.

```js
class Funcionario {
    constructor(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }
}

const funcionario1 = new Funcionario("Carlos", 30, "Desenvolvedor", 5000);
```

### 🔹 Métodos
Os métodos são funções dentro de uma classe que definem o comportamento do objeto.

```js
class Funcionario {
    constructor(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    toString() {
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: ${this.salario}`;
    }
}
```

## 🎯 Eventos, Funções Anônimas e Arrow Functions
### 🔹 Eventos
Eventos são interações do usuário, como cliques ou submissões de formulários.

```js
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulário enviado!");
});
```

### 🔹 Funções Anônimas
São funções sem um nome definido, geralmente usadas dentro de eventos.

```js
document.getElementById("botao").addEventListener("click", function() {
    console.log("Botão clicado!");
});
```

### 🔹 Arrow Functions
São funções anônimas mais concisas, usando `=>`.

```js
document.getElementById("botao").addEventListener("click", () => {
    console.log("Botão clicado!");
});
```

## 🎯 Métodos de Array: filter, map, reduce e sort
### 🔹 filter
Filtra elementos de um array com base em uma condição.

```js
const funcionarios = [
    { nome: "Ana", salario: 6000 },
    { nome: "Carlos", salario: 4000 },
    { nome: "Bruna", salario: 7000 }
];

const altosSalarios = funcionarios.filter(f => f.salario > 5000);
console.log(altosSalarios);
```

### 🔹 map
Cria um novo array transformando cada elemento.

```js
const nomes = funcionarios.map(f => f.nome.toUpperCase());
console.log(nomes);
```

### 🔹 reduce
Acumula valores dentro de um array.

```js
const totalSalarios = funcionarios.reduce((total, f) => total + f.salario, 0);
console.log(totalSalarios);
```

### 🔹 sort
Ordena um array.

```js
const ordenado = funcionarios.sort((a, b) => a.salario - b.salario);
console.log(ordenado);
```

## 🎯 Docker
Docker é uma plataforma para criar, distribuir e rodar aplicações em contêineres.

### 🔹 Dockerfile Básico
```dockerfile
# Usa a imagem oficial do nginx
FROM nginx:latest

# Copiar os arquivos do projeto para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 80 para acessar o servidor
EXPOSE 80.

```

### 🔹 Comandos Docker
- `docker build -t meu-app .` → Constrói a imagem
- `docker run -p 3000:3000 meu-app` → Executa o contêiner

## 🌐 URL

https://saraiva142.github.io/Tarefa02-TCS/

---
📌 **Com esse conhecimento, seu projeto está mais robusto e organizado! 🚀**